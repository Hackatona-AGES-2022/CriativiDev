export default class ApiResponse {
    public message: string;
    public data: any;

    constructor(
        message: string,
        data: any,
      ) {
        this.data = data;
        this.message = message;
      }
  
      static createApiResponse(message: string, data: any): ApiResponse {
        return new ApiResponse(message, data);
      }
}