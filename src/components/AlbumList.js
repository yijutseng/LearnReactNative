import React,{Component} from 'react';
import {View} from 'react-native';
import AlbumDetail from './AlbumDetail';

//import axios from 'axios';
class AlbumList extends Component{
    state={albums:[]}; //only for class based component
    componentWillMount(){ //loading data
        //axios.get('https://rallycoding.herokuapp.com/api/music_albums')
        //    .then(response => console.log(response))
        //1. set default initial state of the component 
        //2. tell the component stay to update
        //3. tell the component to use the state (done data collection)
        fetch('https://rallycoding.herokuapp.com/api/music_albums')
        .then((response) => response.json())
        .then((responseData) => this.setState({ albums: responseData }) // console.log(responseData)
        );
    }

    renderAlbums(){
        return(
            this.state.albums.map(album => 
            <AlbumDetail key={album.title} album={album}/>)
        )
    }
    render (){
        //map method
        console.log(this.state)
        //Life cycle method
        return(
            <View>
                {this.renderAlbums()}
            </View>
        );
    }
}

export default AlbumList;

//