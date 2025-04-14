import { HttpAdapter } from "../../../config/adapters/http/http.adapters";
import { NowPlayingResponse } from "../../../infrastructure/interfaces/movie-db-responses";
import { MovieMapper } from "../../../infrastructure/mapper/movie.mapper";
import { Movie } from "../../entities";


export const moviesNowPlayingUseCase = async (fetcher: HttpAdapter): Promise<Movie[]> => {

    try {

        const nowPlaying = await fetcher.get<NowPlayingResponse>('/now_playing');

        return nowPlaying.results.map(MovieMapper.fromMovieDBResultToEntity);
    } catch (error) {
        console.log(error);
        throw new Error('Error fetching movies - NowPlaying');
    }


}