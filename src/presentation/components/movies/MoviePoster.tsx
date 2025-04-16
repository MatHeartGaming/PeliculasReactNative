import React from 'react'
import { Image, Pressable, StyleSheet, View } from 'react-native'
import { Movie } from '../../../core/entities';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParams } from '../../navigation/Navigation';

interface Props {
    movie: Movie;
    height?: number;
    width?: number;
}

export const MoviePoster = ({ movie, height = 420, width = 300 }: Props) => {
    const navigation = useNavigation<NavigationProp<RootStackParams>>();
    return (
        <Pressable
            onPress={ () => navigation.navigate('Details', { movieId: movie.id }) }
            style={ ({ pressed }) => ({
                width,
                height,
                opacity: pressed ? 0.9 : 1,
                marginHorizontal: 8,
                paddingHorizontal: 8,
                paddingBottom: 20,
                
            })}
        >
            <View style={{ ...styles.imageContainer, width: width, height: height }}>
                <Image
                    style={styles.image}
                    source={{ uri: movie.poster }}
                />
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        borderRadius: 18
    },
    imageContainer: {
        flex: 1,
        borderRadius: 18,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 10
        },
        shadowOpacity: 0.24,
        shadowRadius: 7,
        elevation: 9
    }
})