import { FullMovie, Movie } from "../../core/entities";
import type { MovieDBMovie, Result } from "../interfaces/movie-db-responses";

export class MovieMapper {
    
    static fromMovieDBResultToEntity(result: Result): Movie {
        return {
            id: result.id,
            title: result.title,
            description: result.overview,
            releaseData: new Date(result.release_date),
            rating: result.vote_average,
            poster: `https://image.tmdb.org/t/p/w500${result.poster_path}`,
            backdrop: `https://image.tmdb.org/t/p/w500${result.backdrop_path}`,
        }
    }
    
    static fromMovieDbToEntity(movie: MovieDBMovie): FullMovie {
        return {
            id: movie.id,
            title: movie.title,
            description: movie.overview,
            releaseData: new Date(movie.release_date),
            rating: movie.vote_average,
            genres: movie.genres.map(genre => genre.name),
            duration: movie.runtime,
            budget: movie.budget,
            originalTitle: movie.original_title,
            productionCompanies: movie.production_companies.map(company => company.name),
            poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
            backdrop: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`,
        }
    }
}
