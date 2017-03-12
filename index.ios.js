//https://www.udemy.com/the-complete-react-native-and-redux-course/
//Yi-Ju Tseng

// For android 

// 1. Import libraries to help create a component
import React from 'react';
import {AppRegistry,View} from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

// 2. Create a component
const App =() => {
    return (
    <View style={{flex:1}}>
        <Header headerText={'Albums!'}/>
        <AlbumList/>
    </View>
);
};


// 3. Render it to the devece
//Only root component uses AppRegistry
AppRegistry.registerComponent('LearnReactNative', ()=>App);