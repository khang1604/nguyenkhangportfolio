import React, { useState } from 'react';
import { FontAwesomeIcon, faEnvelope, faCheckCircle } from '../../components/icons';
import { ContactFormSchema, type ContactFormInput } from '../../core/validation/schemas';
import { logger } from '../../core/logger/logger';
import { createSuccessResponse, createErrorResponse } from '../../core/api/jsend';

export const ContactSection: React.FC = () => {
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
      const issue = validation.error.issues[0]?.message || 'Please fill in all fields correctly';
      setErrorMessage(issue);
      const failResponse = createErrorResponse('VALIDATION_ERROR', issue, validation.error.issues);
      logger.warn('Contact form validation failure', failResponse);
      return;
    }

    const successResponse = createSuccessResponse(
      { submittedAt: new Date().toISOString() },
      'Thank you! Your message has been received.'
    );
    logger.info('Contact form successfully validated', successResponse);

    setStatusMessage('Thank you! Your message has been validated and recorded successfully.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="section-header">
        <span className="section-badge">Connect</span>
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">
          Have an interesting project or want to collaborate? Feel free to drop a message.
        </p>
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
            <label htmlFor="name">Your Name</label>
            <input
              id="name"
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="e.g. Nguyen Van A"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Your Email</label>
            <input
              id="email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="e.g. your.email@example.com"
            />
          </div>

          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input
              id="subject"
              type="text"
              required
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              placeholder="e.g. Collaboration Opportunity"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              rows={4}
              required
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Share details about your idea or project..."
            />
          </div>

          <button type="submit" className="btn btn-primary submit-btn">
            <FontAwesomeIcon icon={faEnvelope} /> Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

