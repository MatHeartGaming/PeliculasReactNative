import React, { useEffect, useState } from 'react'
import { Movie } from '../../core/entities/movies/movie.entity'
import * as UseCases from '../../core/use-cases';
import { movieDBFetcher } from '../../config/adapters/http/movieDB.adapter';

let popularPageNumber = 1;

export const useMovies = () => {
    const [isLoading, setIsLoading] = useState(true)

    const [nowPlaying, setNowPlaying] = useState<Movie[]>([])
    const [popular, setPopular] = useState<Movie[]>([])
    const [topRated, setTopRated] = useState<Movie[]>([])
    const [upcoming, setUpcoming] = useState<Movie[]>([])

    useEffect(() => {
        initLoad()
    }, [])

    const initLoad = async () => {
        const nowPlayingMoviesPromise = UseCases.moviesNowPlayingUseCase(movieDBFetcher)
        const populaPromise = UseCases.popularUseCase(movieDBFetcher, {})
        const topRatedPromise = UseCases.moviesTopRatedUseCase(movieDBFetcher)
        const upcomingPromise = UseCases.upcomingUseCase(movieDBFetcher)

        const [
            nowPlayingMovies, 
            popular, 
            topRated, 
            upcoming
        ] = await Promise.all([
            nowPlayingMoviesPromise, 
            populaPromise, 
            topRatedPromise, 
            upcomingPromise])

        setNowPlaying(nowPlayingMovies)
        setPopular(popular)
        setTopRated(topRated)
        setUpcoming(upcoming)

        setIsLoading(false)

        console.log({ nowPlayingMovies, popular, topRated, upcoming })
    }

    return {
        isLoading,
        nowPlaying,
        popular,
        topRated,
        upcoming,

        // Methods
        popularNextPage: async () => {
            popularPageNumber++;
            const popularMovies = await UseCases.popularUseCase(movieDBFetcher, {
                page: popularPageNumber
            })
            setPopular([...popular, ...popularMovies])
        }
    }
}
