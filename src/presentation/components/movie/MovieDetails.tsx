import React from 'react'
import { Text, View } from 'react-native';
import { FullMovie } from '../../../core/entities';
import { Formatter } from '../../../config/helpers/formatters';
import { Cast } from '../../../core/entities/movies/cast.entity';
import { FlatList } from 'react-native-gesture-handler';
import { CastActor } from '../cast/CastActor';

interface Props {
    movie: FullMovie;
    cast: Cast[];
}

export const MovieDetails = ({ movie, cast }: Props) => {
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

            <View style={{ marginTop: 10, marginBottom: 100 }}>
                <Text style={{
                    fontSize: 23,
                    marginVertical: 10,
                    fontWeight: 'bold',
                    marginHorizontal: 20,
                }}>
                    Actores
                </Text>

                <FlatList 
                    data={cast} 
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={item => item.id.toString()}
                    renderItem={ ({item}) => <CastActor actor={item} /> }
                />
            </View>
        </>
    )
}