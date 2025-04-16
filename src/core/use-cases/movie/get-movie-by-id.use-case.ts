import { HttpAdapter } from "../../../config/adapters/http/http.adapters";
import { MovieDBMovie } from "../../../infrastructure/interfaces/movie-db-responses";
import { MovieMapper } from "../../../infrastructure/mapper/movie.mapper";
import { FullMovie } from "../../entities";

export const getMovieByIdUseCase = async (fetcher: HttpAdapter, movieId: number): Promise<FullMovie> => {
    try {
        const movie = await fetcher.get<MovieDBMovie>(`/${movieId}`);
        const fullMovie = MovieMapper.fromMovieDbToEntity(movie);
        return fullMovie;
    } catch (error) {
        throw new Error(`Cannot get movie with id ${movieId}`)
    }
}