export type ErrorStatus = {
    hasError?: boolean;
};

export type ErrorResponse = ErrorStatus & {
    response?: undefined | null;
};
