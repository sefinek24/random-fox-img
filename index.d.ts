interface getRandomFox {
    success: boolean;
    status: number;
    info: {
        category: string;
        endpoint: string;
    };
    message: string;
}