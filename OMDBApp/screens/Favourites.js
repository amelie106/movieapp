import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import favourites from '../components/favouriteList.js';
import styles from '../components/styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

class Favourites extends Component {

    constructor(props) {

        super(props);

    }

    // Add/Remove Movie to/from Favourites
    changeFavourite = (item) => {

        if (this.hasMovie(item) === false) {
            favourites.push(item)
        }    
        else {
            favourites.splice(favourites.indexOf(item),1)
        }

    }

    // Check if movie is Favourite
    hasMovie = (item) => {

        return favourites.some(fav => fav.firstInfo.Title === item.firstInfo.Title);
        
    }

    render() {

        const {navigation} = this.props;

        // Screen if there are no Favourites
        if (favourites.length < 1) {
            return (
                <View style={styles.centeredView}>
                    <Text style={styles.bigText}>No favourites yet.</Text>
                </View>    
            );
        }

        return (

            // Show list of Favourites
            <ScrollView style={styles.resultsView}>
                {favourites.map((item, key) => (
                    <TouchableOpacity 
                        key={key}
                        onPress={() => navigation.navigate('Result', {
                            SearchText: item.firstInfo.Title,
                        })}>
                    <Text  style = {{
                        fontSize: 20,
                        color: 'white',
                        padding: 15,
                        borderBottomColor: 'white',
                        borderBottomWidth: 1,
                    }}> 
                        {item.firstInfo.Title} 
                    </Text>
                    </TouchableOpacity>)
                )}
            </ScrollView>      

        );
    }

}

export default Favourites;