import { HttpAdapter } from "../../../config/adapters/http/http.adapters";
import { NowPlayingResponse } from "../../../infrastructure/interfaces/movie-db-responses";
import { Movie } from "../../entities/movies/movie.entity";

export const moviesNowPlayingUseCase = async ( fetcher: HttpAdapter ): Promise<Movie[]> => {
    try {
        const nowPlaying = await fetcher.get<NowPlayingResponse>('/now_playing')
        console.log({nowPlaying})

        return []
    } catch(error) {
        console.log(error)
        throw new Error('Error fetching movies - Now Playing')
    }
}