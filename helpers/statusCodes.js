exports.module = statusCodes = {
  OK: 200, // Success
  CREATED: 201, // Resource created successfully
  ACCEPTED: 202, // Request accepted but not yet processed
  NO_CONTENT: 204, // No content to send for this request
  BAD_REQUEST: 400, // Invalid request syntax
  UNAUTHORIZED: 401, // Missing or invalid authentication
  FORBIDDEN: 403, // Authentication succeeded but access is forbidden
  NOT_FOUND: 404, // Requested resource not found
  METHOD_NOT_ALLOWED: 405, // Request method not supported
  CONFLICT: 409, // Conflict with current state of the resource
  GONE: 410, // Resource is no longer available
  LENGTH_REQUIRED: 411, // Content length required for the request
  PRECONDITION_FAILED: 412, // Precondition failed (e.g., conditional requests)
  PAYLOAD_TOO_LARGE: 413, // Request entity is too large
  URI_TOO_LONG: 414, // Request URI is too long
  UNSUPPORTED_MEDIA_TYPE: 415, // Unsupported media type in request
  TOO_MANY_REQUESTS: 429, // Too many requests, rate limit exceeded
  INTERNAL_SERVER_ERROR: 500, // Server error, something went wrong
  NOT_IMPLEMENTED: 501, // Method not implemented by the server
  BAD_GATEWAY: 502, // Invalid response from the upstream server
  SERVICE_UNAVAILABLE: 503, // Server temporarily unavailable
  GATEWAY_TIMEOUT: 504, // Upstream server timed out
  HTTP_VERSION_NOT_SUPPORTED: 505, // HTTP version not supported by the server
};
