/**
 * 4-Level Structured Logger
 * Enforces production log cleanliness and redaction of sensitive credentials.
 */

export type LogLevel = 'DEBUG' | 'INFO' | 'WARN' | 'ERROR';

const LOG_PRIORITY: Record<LogLevel, number> = {
  DEBUG: 0,
  INFO: 1,
  WARN: 2,
  ERROR: 3,
};

const MASK_PATTERNS = [
  /password/i,
  /token/i,
  /secret/i,
  /key/i,
  /authorization/i,
  /bearer/i,
];

const maskSensitiveData = (value: unknown): unknown => {
  if (typeof value === 'string') {
    if (value.length > 30 && /^[A-Za-z0-9_-]+$/.test(value)) {
      return `${value.slice(0, 4)}...[REDACTED]`;
    }
    return value;
  }
  if (value && typeof value === 'object') {
    const masked: Record<string, unknown> = {};
    for (const [k, v] of Object.entries(value)) {
      if (MASK_PATTERNS.some((pattern) => pattern.test(k))) {
        masked[k] = '[REDACTED]';
      } else {
        masked[k] = maskSensitiveData(v);
      }
    }
    return masked;
  }
  return value;
};

class StructuredLogger {
  private minLevel: LogLevel;

  constructor() {
    const rawLevel =
      typeof process !== 'undefined' && process.env?.NEXT_PUBLIC_LOG_LEVEL
        ? process.env.NEXT_PUBLIC_LOG_LEVEL
        : 'INFO';
    const envLevel = rawLevel.toUpperCase();
    this.minLevel = (['DEBUG', 'INFO', 'WARN', 'ERROR'].includes(envLevel)
      ? envLevel
      : 'INFO') as LogLevel;
  }

  private shouldLog(level: LogLevel): boolean {
    return LOG_PRIORITY[level] >= LOG_PRIORITY[this.minLevel];
  }

  private formatMessage(level: LogLevel, message: string, payload?: unknown) {
    const timestamp = new Date().toISOString();
    const safePayload = payload !== undefined ? maskSensitiveData(payload) : undefined;
    return {
      timestamp,
      level,
      message,
      ...(safePayload !== undefined ? { payload: safePayload } : {}),
    };
  }

  public debug(message: string, payload?: unknown): void {
    if (this.shouldLog('DEBUG')) {
      const entry = this.formatMessage('DEBUG', message, payload);
      console.debug(`[DEBUG] [${entry.timestamp}] ${entry.message}`, entry.payload ?? '');
    }
  }

  public info(message: string, payload?: unknown): void {
    if (this.shouldLog('INFO')) {
      const entry = this.formatMessage('INFO', message, payload);
      console.info(`[INFO] [${entry.timestamp}] ${entry.message}`, entry.payload ?? '');
    }
  }

  public warn(message: string, payload?: unknown): void {
    if (this.shouldLog('WARN')) {
      const entry = this.formatMessage('WARN', message, payload);
      console.warn(`[WARN] [${entry.timestamp}] ${entry.message}`, entry.payload ?? '');
    }
  }

  public error(message: string, payload?: unknown): void {
    if (this.shouldLog('ERROR')) {
      const entry = this.formatMessage('ERROR', message, payload);
      console.error(`[ERROR] [${entry.timestamp}] ${entry.message}`, entry.payload ?? '');
    }
  }
}

export const logger = new StructuredLogger();

