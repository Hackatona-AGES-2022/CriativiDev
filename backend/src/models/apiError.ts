export default class ApiError {
    public code: number;
    public message: string;

    constructor(
      code: number,
      message: string,
    ) {
      this.code = code;
      this.message = message;
    }

    static createApiError(message: string, code: number): ApiError {
      return new ApiError(code, message);
    }
}