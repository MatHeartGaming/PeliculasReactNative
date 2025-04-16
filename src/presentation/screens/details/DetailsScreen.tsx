import { useRoute } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { Text, View } from 'react-native'
import { RootStackParams } from '../../navigation/Navigation';
import { useMovie } from '../../hooks/useMovie';
import { MovieHeader } from '../../components/movie/MovieHeader';
import { MovieDetails } from '../../components/movie/MovieDetails';
import { ScrollView } from 'react-native-gesture-handler';

interface Props extends StackScreenProps<RootStackParams, 'Details'> {

}

export const DetailsScreen = ({ route }: Props) => {

  const { movieId } = route.params;

  const { isLoading, movie } = useMovie(movieId);

  if (isLoading) {
    return <Text>Loading...</Text>
  }

  return (
    <ScrollView>
      <MovieHeader movie={movie!} />
      <MovieDetails movie={movie!} />
      
      <View style={{ marginTop: 10, marginBottom: 100 }}>
        <Text style={{
          fontSize: 23,
          marginVertical: 10,
          fontWeight: 'bold',
          marginHorizontal: 20,
        }}>
          Actores
        </Text>
      </View>

    </ScrollView>
  )
}
