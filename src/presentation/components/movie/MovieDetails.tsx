import React from 'react'
import { Text, View } from 'react-native';
import { FullMovie } from '../../../core/entities';
import { Formatter } from '../../../config/helpers/formatters';

interface Props {
    movie: FullMovie;
}

export const MovieDetails = ({ movie }: Props) => {
    return (
        <>
            <View style={{ marginHorizontal: 20 }}>
                <View style={{ flexDirection: 'row' }}>
                    <Text>{movie.rating}</Text>

                    <Text style={{ marginLeft: 5 }} >
                        - {movie.genres.join(', ')}
                    </Text>
                </ View>
            </View>

            <Text style={{ fontSize: 23, marginTop: 10, fontWeight: 'bold' }}>
                Historia
            </Text>
            <Text style={{ fontSize: 16, marginTop: 8 }}>
                {movie.description}
            </Text>
            <Text style={{ fontSize: 23, marginTop: 10, fontWeight: 'bold' }}>
                Presupuesto
            </Text>
            <Text style={{ fontSize: 18, marginTop: 4, fontWeight: 'black' }}>
                {Formatter.currency(movie.budget)}
            </Text>
        </>
    )
}