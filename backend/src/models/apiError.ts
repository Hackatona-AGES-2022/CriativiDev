export interface ApiError {
    message: string;
    code: number;
}

export function createApiError(err: any, code: number): ApiError {
    return {
        message: err,
        code,
    }
}