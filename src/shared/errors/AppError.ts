class AppError extends Error {
    public readonly statusCode: number;

    constructor(message: string, statusCode = 400) {
        super(message);
        this.name = 'AppError';
        this.statusCode = statusCode;

        Error.captureStackTrace?.(this, AppError);
    }
}

export default AppError;