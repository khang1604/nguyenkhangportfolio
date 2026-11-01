import React, { useState } from 'react';
import { FontAwesomeIcon, faEnvelope, faCheckCircle } from '../../components/icons';
import { ContactFormSchema, type ContactFormInput } from '../../core/validation/schemas';
import { logger } from '../../core/logger/logger';
import { createSuccessResponse, createErrorResponse } from '../../core/api/jsend';
import { useLanguage } from '../../core/i18n/LanguageContext';

export const ContactSection: React.FC = () => {
  const { t } = useLanguage();

  const [formData, setFormData] = useState<ContactFormInput>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setStatusMessage(null);

    const validation = ContactFormSchema.safeParse(formData);

    if (!validation.success) {
      const issue = validation.error.issues[0]?.message || 'Validation error';
      setErrorMessage(issue);
      const failResponse = createErrorResponse('VALIDATION_ERROR', issue, validation.error.issues);
      logger.warn('Contact form validation failure', failResponse);
      return;
    }

    const successResponse = createSuccessResponse(
      { submittedAt: new Date().toISOString() },
      t.contact.successMsg
    );
    logger.info('Contact form successfully validated', successResponse);

    setStatusMessage(t.contact.successMsg);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="section-header">
        <span className="section-badge">{t.contact.badge}</span>
        <h2 className="section-title">{t.contact.title}</h2>
        <p className="section-subtitle">{t.contact.subtitle}</p>
      </div>

      <div className="contact-container">
        <form className="contact-form" onSubmit={handleSubmit}>
          {statusMessage && (
            <div className="alert alert-success">
              <FontAwesomeIcon icon={faCheckCircle} /> {statusMessage}
            </div>
          )}
          {errorMessage && <div className="alert alert-error">{errorMessage}</div>}

          <div className="form-group">
            <label htmlFor="name">{t.contact.nameLabel}</label>
            <input
              id="name"
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder={t.contact.namePlaceholder}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">{t.contact.emailLabel}</label>
            <input
              id="email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder={t.contact.emailPlaceholder}
            />
          </div>

          <div className="form-group">
            <label htmlFor="subject">{t.contact.subjectLabel}</label>
            <input
              id="subject"
              type="text"
              required
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              placeholder={t.contact.subjectPlaceholder}
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">{t.contact.messageLabel}</label>
            <textarea
              id="message"
              rows={4}
              required
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder={t.contact.messagePlaceholder}
            />
          </div>

          <button type="submit" className="btn btn-primary submit-btn">
            <FontAwesomeIcon icon={faEnvelope} /> {t.contact.sendBtn}
          </button>
        </form>
      </div>
    </section>
  );
};
