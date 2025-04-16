import { HttpAdapter } from "../../../config/adapters/http/http.adapters";
import { MoviesReponse, NowPlayingResponse } from "../../../infrastructure/interfaces/movie-db-responses";
import { MovieMapper } from "../../../infrastructure/mapper/movie.mapper";
import { Movie } from "../../entities";

interface Options {
    page?: number;
    limit?: number;
}

export const popularUseCase = async (fetcher: HttpAdapter, {page, limit}: Options): Promise<Movie[]> => {

    try {

        const popular = await fetcher.get<MoviesReponse>('/popular', {
            params: {
                page: page || 1
            }
        });

        return popular.results.map(MovieMapper.fromMovieDBResultToEntity);
    } catch (error) {
        console.log(error);
        throw new Error('Error fetching movies - Popular');
    }


}