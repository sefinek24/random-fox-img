declare module 'random-fox-img' {
    interface Info {
        category: string;
        endpoint: string;
    }

    interface GetRandomFox {
        success: boolean;
        status: number;
        info: Info;
        message: string;
    }

    /**
     * Retrieves a random fox object from the specified API.
     *
     * @async
     * @returns {Promise<GetRandomFox>} A promise that resolves with a random fox object on success or rejects with an error on failure.
     * @throws {Error} If there's an error in making the request, parsing JSON data, or if the API responds with a non-200 status code.
     */
    export function getRandomFox(): Promise<GetRandomFox>;
}