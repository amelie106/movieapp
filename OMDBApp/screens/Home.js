import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';
import styles from '../components/styles';

function Home({navigation}) {

    const [text, setText] = useState('');
    
    return (

       <>
        {/* Name & Matrikelnummer */}
        <View style={styles.infoDeveloper}>
            <Text style={{color:'white'}}>Amelie Schneider</Text>
            <Text style={{color:'white'}}>11715842</Text>
        </View>
        {/* Search Field */}
        <View style={styles.centeredView}>
            {/* Search Field */}
            <TextInput
              style={styles.input}
              placeholder='Type in a movie title'
              onChangeText={text => setText(text)}
              defaultValue={text}
            />
            {/* Submit Button */}
            <TouchableOpacity
              style = {styles.button}
              onPress={() => navigation.navigate('Result', {
                  SearchText: text,
              })}
            > 
            <Text style={{textAlign: 'center'}}>SEARCH</Text>
            </TouchableOpacity>
        </View>
        {/* Go to Favourites Button */}
        <View style={styles.goToFavourites}>
            <TouchableOpacity
              style = {styles.goToFavourites}
              onPress={() => navigation.navigate('Favourites')}
            > 
            <Text style={styles.bigText}>Go to Favourites ➞</Text>
            </TouchableOpacity>
        </View>
      </>

    );
}

export default Home;