import React from 'react';
import { Image, ScrollView } from 'react-native';

function ShowPicture ({route}) {

    const { PicURL } = route.params;

    return (

        // Show Poster Full Screen
        <ScrollView style ={{flex:1}}>
            <Image
                style={{
                    width: null,
                    height: 540,
                    resizeMode:'contain',
                }}
                source= {{
                    uri: PicURL
                }}
            />
        </ScrollView>

    );

}

export default ShowPicture;