import axios, { AxiosInstance, AxiosResponse } from 'axios';

export default abstract class ApiClient {
    protected readonly instance: AxiosInstance;

    public constructor(baseURL: string) {
        this.instance = axios.create({
            baseURL,
        });
        this.initializeResponseInterceptor();
    }

    private handleResponse = (response: AxiosResponse) => response;

    private handleError = (error: any) => {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        let message;
        switch (error.response.status) {
            case 400:
                message = 'Invalid request';
                if (error.response.data) {
                    message += `. ${error.response.data}`;
                }
                break;
            case 403:
                message = 'Access Forbidden';
                window.location.href = '/access-denied';
                break;
            case 404:
                message = 'Sorry! the address you are looking for could not be found';
                break;
            case 500:
                message = 'Server error';
                break;
            default: {
                message = error.response && error.response.data ? error.response.data.message : error.message || error;
            }
        }
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
