import { AxiosAdapter } from "./axios.adapter";

export const movieDBFetcher = new AxiosAdapter({
    baseUrl: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: '578d1f8789cde3e94468415f7b82c6c6',
        language: 'es'
    }
})