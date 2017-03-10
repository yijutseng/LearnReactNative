//https://www.udemy.com/the-complete-react-native-and-redux-course/
//Yi-Ju Tseng

// For android 

// 1. Import libraries to help create a component
import React from 'react';
import {Text,AppRegistry} from 'react-native';

// 2. Create a component
const App =() => (
    <Text>Some Text</Text> //JSX
);


// 3. Render it to the devece
//Only root component uses AppRegistry
AppRegistry.registerComponent('LearnReactNative', ()=>App);