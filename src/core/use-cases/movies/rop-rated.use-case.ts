import { HttpAdapter } from "../../../config/adapters/http/http.adapters";
import { MoviesReponse, NowPlayingResponse } from "../../../infrastructure/interfaces/movie-db-responses";
import { MovieMapper } from "../../../infrastructure/mapper/movie.mapper";
import { Movie } from "../../entities";


export const moviesTopRatedUseCase = async (fetcher: HttpAdapter): Promise<Movie[]> => {

    try {

        const topRated = await fetcher.get<MoviesReponse>('/top_rated');

        return topRated.results.map(MovieMapper.fromMovieDBResultToEntity);
    } catch (error) {
        console.log(error);
        throw new Error('Error fetching movies - TopRated');
    }


}