import React, {useState, useContext} from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import { Store } from '../../store';
import { getItemList } from '../listComponent/actions';
import { updateSearchString } from './search.action';

const SearchComponent = () => {

    const {state, dispatch} = useContext(Store);
  
    return (
        <View style={styles.SearchBarContainer}>
            <View style={styles.InputBoxContainer} >
            <TextInput
                style={styles.searchBox}
                    multiline={false}
                    onChangeText={newText => {
                        console.log('value', newText);
                        
                        updateSearchString(dispatch, newText);
                    }}
                    placeholder={'Search'}
                    fontSize={16}
                    placeholderTextColor={'#333'}
                    />
            </View>
            <View style={styles.RerenderBtnContainer} >
            <TouchableOpacity
            style={styles.button}
            onPress={() => {getItemList(dispatch)}}
            >
            <Text style={styles.rerenderNowBtn}>Re-render</Text>
            </TouchableOpacity>
            </View>
        </View>       
    );
  };
  
  
  const styles = StyleSheet.create({
   
    SearchBarContainer:{
      width: '100%',
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    searchBox: {
      borderWidth: 1,
      borderColor: "#000",
      borderRadius: 10,
      paddingLeft: 10,
      margin: 10,
      height: 40,
      fontSize: 13
  },
  InputBoxContainer:{
    flex: 3
  },
  RerenderBtnContainer:{
    flex: 1
  },
  button: {
    alignItems: "center",
    backgroundColor: "#333",
    justifyContent: 'center',
    height: 42,
    marginRight: 10,
    borderRadius: 10
  },
  rerenderNowBtn: {
    fontSize: 13,
    color: 'white',
  }
  });
  
  export default SearchComponent;