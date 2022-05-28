export interface ApiResponse {
    message: string;
    data: any;
}

export function createApiResponse(message: any, data: any): ApiResponse {
    return {
        message,
        data,
    }
}