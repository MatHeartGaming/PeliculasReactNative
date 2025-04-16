import { HttpAdapter } from "../../../config/adapters/http/http.adapters";
import { MovieDBCastResponse } from "../../../infrastructure/interfaces/movie-db-responses";
import { CastMapper } from "../../../infrastructure/mapper/cast.mapper";
import { Cast } from "../../entities/movies/cast.entity";

export const getMovieCastUseCase = async (fetcher: HttpAdapter, movieId: number): Promise<Cast[]> => {
    try {
        const { cast } = await fetcher.get<MovieDBCastResponse>(`/${movieId}/credits`);
        const actors = cast.map(actor => CastMapper.fromMovieDbCastToEntity(actor));
        return actors;
    } catch (error) {
        throw new Error(`Cannot get movie with id ${movieId}`)
    }
}