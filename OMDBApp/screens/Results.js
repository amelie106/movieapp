import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, Image, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import axios from 'axios';
import Favourites from './Favourites';
import styles from '../components/styles';

function Results ({route, navigation}) {

    const { SearchText } = route.params;
    const [hasError, setHasError] = useState (false);
    const [loading, setLoading] = useState (true);
    const [firstMovie, setFirstMovie] = useState ({firstInfo: '', secondInfo: ''});
    const [favouriteText, setFavouriteText] = useState ('');

    useEffect(() => {

        const fetchData = async () => {
            try {
            // First Request for Movie Info
            const respFirst = await axios(
                'https://www.omdbapi.com/?s='+SearchText+'&apikey=e2921583'
            );
            // Second Request for more Movie Info
            const respSecond = await axios(
                'https://www.omdbapi.com/?apikey=e2921583&i='+respFirst.data.Search[0].imdbID
            );
            setFirstMovie({ firstInfo: respFirst.data.Search[0], secondInfo: respSecond.data });
            setLoading(false);
            
            }
            catch (error) {console.log(error); setHasError(true);}
        };
    
        fetchData();
        favouriteTextSetting();

      }, []);

    // Change Setting of movie as Favourite
    const changeFavouriteState = () => {

        new Favourites().changeFavourite(firstMovie);
        favouriteTextSetting();

    }

    // Change Button Text
    const favouriteTextSetting = () => {

        if (new Favourites().hasMovie(firstMovie) == true) {
            setFavouriteText('REMOVE FROM FAVOURITES');
        }
        else {
            setFavouriteText('ADD TO FAVOURITES');  
        }

    }

    // Screen if no results have been found
    if (hasError) {
       return (
         <View style = {styles.centeredView}>
           <Text style = {styles.bigText}>No Results found!</Text>
       </View>
       );
    }

    else {
        // Loading symbol while waiting for Result
        if (loading) { 
            return ( 
                <View style = {styles.centeredView}>
                    <ActivityIndicator size='large' color="#000000" />
                </View>
            );    
        }
        else {
            
            return (
                <>
                    <ScrollView style = {styles.resultsView}>
                        {/* Clickable Poster Banner */}
                        {firstMovie.firstInfo.Poster !== 'N/A'
                            ? <TouchableOpacity
                                onPress={() => navigation.navigate('Poster', {
                                    PicURL: firstMovie.firstInfo.Poster,
                                })}> 
                                <Image 
                                    style={{
                                        width:null,
                                        height:200,
                                        marginBottom:10,
                                    }}
                                    source={{
                                        uri: firstMovie.firstInfo.Poster
                                    }}>

                                </Image>
                              </TouchableOpacity> 
                            : null 
                        }
                        {/* Movie Title */}
                        <Text style = {{
                            fontSize: 20,
                            color: 'white',
                            fontWeight: 'bold',
                            marginBottom: 10,
                            padding: 5,
                        }}>
                            {firstMovie.firstInfo.Title}
                        </Text>
                        {/* Genre */}
                        {firstMovie.secondInfo.Genre !== 'N/A'
                            ? <Text style = {styles.resultsText}>
                                Genre: {firstMovie.secondInfo.Genre}
                              </Text> 
                            : null  
                        }
                        {/* Year */}
                        {firstMovie.firstInfo.Year !== 'N/A'
                            ? <Text style = {styles.resultsText}>
                                Year: {firstMovie.firstInfo.Year}
                              </Text> 
                            : null  
                        }
                        {/* Director */}
                        {firstMovie.secondInfo.Director !== 'N/A'
                            ? <Text style = {styles.resultsText}>
                                Director: {firstMovie.secondInfo.Director}
                              </Text> 
                            : null  
                        }
                        {/* Actors */}
                        {firstMovie.secondInfo.Actors !== 'N/A'
                            ? <Text style = {styles.resultsText}>
                                Actors: {firstMovie.secondInfo.Actors}
                              </Text> 
                            : null  
                        }
                        {/* Writer(s) */}
                        {firstMovie.secondInfo.Writer !== 'N/A'
                            ? <Text style = {styles.resultsText}>
                                Writer(s): {firstMovie.secondInfo.Writer}
                              </Text> 
                            : null  
                        }
                        {/* Ratings */}
                        {firstMovie.secondInfo.Ratings.length < 1 
                            ? null
                            : <Text style = {{
                                fontSize: 18,
                                fontWeight: 'bold',
                                color: 'white',
                                marginTop: 5,
                                padding: 5,
                            }}>
                                Ratings:
                            </Text> 
                        }
                        {firstMovie.secondInfo.Ratings.map((item, key) => (
                            <Text 
                                style = {styles.resultsText}
                                key = {key}
                            > 
                            {item.Source}: {item.Value} 
                            </Text>)
                        )}
                        {/* Add to Favourites/Remove from Favourites Button */}
                        <View  style={styles.centeredView}>
                        <TouchableOpacity
                            onPress={() => changeFavouriteState()}
                            style={styles.button}
                        > 
                        <Text style={{color:'black', alignSelf:'center'}}>{favouriteText}</Text> 
                        </TouchableOpacity>
                        </View>
                    </ScrollView>
                </>
            );
        }
    }
}

export default Results;