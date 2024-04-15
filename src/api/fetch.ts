import { ErrorResponse } from '../types/fetch';

export function fetchApi<T>(execute: Function, errorCallback?: Function): Promise<T> {
    return new Promise((resolve) => {
        try {
            Promise.resolve(execute())
                .then(({ data }) => resolve(data))
                .catch((error) => {
                    const statusCode = error.response?.status;

                    // handling error 404 
                    if (statusCode === 404) {
                        resolve(error.response.data);
                    }

                    resolve(handleError(error, errorCallback));
                });
        } catch (error: any) {
            resolve(handleError(error, errorCallback));
        }
    });
}

function handleError(error: Error & ErrorResponse, errorCallback?: any) {
    if (errorCallback) {
        return errorCallback(error);
    } else {
        const errorObj: ErrorResponse = {
            hasError: true,
            response: error.response
        };

        return errorObj;
    }
}
