/**
 * Standard JSend Specification Implementation
 * @see https://github.com/labs42/jsend
 */

export interface JSendSuccess<T> {
  success: true;
  data: T;
  message?: string;
}

export interface JSendErrorDetails {
  code: string;
  message: string;
  details?: unknown;
}

export interface JSendFail {
  success: false;
  error: JSendErrorDetails;
}

export type JSendResponse<T> = JSendSuccess<T> | JSendFail;

export const createSuccessResponse = <T>(data: T, message?: string): JSendSuccess<T> => ({
  success: true,
  data,
  ...(message ? { message } : {}),
});

export const createErrorResponse = (
  code: string,
  message: string,
  details?: unknown
): JSendFail => ({
  success: false,
  error: {
    code: code.toUpperCase(),
    message,
    ...(details !== undefined ? { details } : {}),
  },
});

