class AppError extends Error {
  constructor(message, statusCode) { // On utilise statusCode par convention
    super(message);
    this.statusCode = statusCode; 
    this.isOperational = true; // Optionnel : pour distinguer tes erreurs des bugs serveurs
    Error.captureStackTrace(this, this.constructor);
  }
}
 
export default AppError;