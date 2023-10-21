declare module 'random-fox-img' {
    interface FoxImageData {
        success: boolean;
        status: number;
        info: {
            category: string;
            endpoint: string;
        };
        message: string;
    }

    function getRandomFox(): Promise<FoxImageData>;
    export = getRandomFox;
}