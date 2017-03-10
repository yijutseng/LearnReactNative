
// 1. Import libraries to help create a component
import React from 'react';
import {Text,View} from 'react-native';

// 2. Create a component
const Header =(props) => {
    const {textStyle,viewStyle}=styles;
    return (
    <View style={viewStyle}>
        <Text style={textStyle}>{props.headerText}</Text>
    </View>); //JSX
};

// 2.1. style
const styles = {
    viewStyle :{
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        shadowColor:'#000',
        shadowOffset: { width:0, height:2},
        shadowOpacity: 0.2,
        elevation:2,
        position:'relative'
    },
    textStyle:{
        fontSize: 20
    } 
};

// 3. Make the component avaliable to other parts of the app
//child component-->export
export default Header;
