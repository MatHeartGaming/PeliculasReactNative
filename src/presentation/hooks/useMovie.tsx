
import { useEffect, useState } from 'react'
import * as UseCases from '../../core/use-cases';
import { movieDBFetcher } from '../../config/adapters/http/movieDB.adapter';
import { FullMovie } from '../../core/entities';

export const useMovie = (movieId: number) => {
    const [isLoading, setIsLoading] = useState(true);
    const [movie, setMovie] = useState<FullMovie>();
    
    useEffect(() => {
        loadMovie();
    }, [movieId])

    const loadMovie = async () => {
        setIsLoading(true);
        const fullMovie = await UseCases.getMovieByIdUseCase(movieDBFetcher, movieId);
        setIsLoading(false);
        setMovie(fullMovie);
    }

    return {
        isLoading,
        movie
    }
}