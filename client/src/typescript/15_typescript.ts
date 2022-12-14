// Handle Error
throw '2341234';
throw {};
throw undefined;
throw () => {};

try {
    
} catch (error: unknown) {
    console.log(getErrorMessage(error));
    
}
export function getErrorMessage(error: unknown): string {
    if(error instanceof Error) {
        return error.message;
    }else {
        return 'unknown error';
    }
}