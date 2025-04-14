import React, { useEffect, useState } from 'react'
import { Movie } from '../../core/entities/movies/movie.entity'

import * as UseCases from '../../core/entities'
import { moviesNowPlayingUseCase } from '../../core/use-cases/movies/now-playing.use-case';
import { movieDBFetcher } from '../../config/adapters/http/movieDB.adapter';

export const useMovies = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [nowPlaying, setNowPlaying] = useState<Movie[]>([])

    useEffect(() => {
        initLoad()
    }, [])

    const initLoad = async () => {
        const nowPlayingMovies = UseCases.moviesNowPlayingUseCase(movieDBFetcher)
    }

    return {}
}
