//https://www.udemy.com/the-complete-react-native-and-redux-course/
//Yi-Ju Tseng

// For android 

// 1. Import libraries to help create a component
import React, { Component }  from 'react';
import { View } from 'react-native';
import Header from './components/Header';
import AlbumList from './components/AlbumList';

// 2. Create a component
class App extends Component {
	render(){
    	return (
    		<View style={{ flex: 1 }}>
        		<Header headerText={'Albums!'} />
        		<AlbumList />
    		</View>
		);
	}
}

export default App;