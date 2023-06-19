import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios';

export default abstract class ApiClient {
    protected readonly instance: AxiosInstance;

    public constructor(baseURL: string) {
        this.instance = axios.create({
            baseURL,
        });
        this.initializeResponseInterceptor();
    }

    private handleResponse = (response: AxiosResponse) => response;

    private handleError = (error: AxiosError) => {
        const message = `code: ${error.code} - Message: ${error.message}`;;
        return Promise.reject(message);
    };

    private initializeResponseInterceptor = () => {
        this.instance.interceptors.response.use(this.handleResponse, this.handleError);
        this.instance.interceptors.request.use(
            async (config: any) => {
                
                return config;
            },
            (error: any) => {
                Promise.reject(error);
            }
        );
    };
}
