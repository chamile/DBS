import React, {useEffect, useContext} from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Store } from '../../store';
import { getItemList } from '../listComponent/actions';
import ListViewComponent from '../listComponent/list.component';
import SearchComponent from '../searchComponent/search.component';

const HomeComponent = () => {

    const {state, dispatch} = useContext(Store);
    
  
  
    useEffect(() => {
      getItemList(dispatch);
    }, []);
  
    return (
          <View style ={styles.mainContainer}>
            <View style={styles.animationContainer}>
              <Image
                style={styles.imageStyles}
                source={require('../../../assets/imgs/walking_dog.gif')}  
                resizeMode='cover'
  
              />
            </View>
            <SearchComponent></SearchComponent>     
            <ListViewComponent></ListViewComponent>    
          </View>
    );
  };
  
  
  const styles = StyleSheet.create({
    mainContainer: {
      flex:1,
       justifyContent: "center",
       alignItems: "center",
       flexDirection: 'column',
       width: '100%'
    },
    animationContainer: {
      flex: 2,
      width: '100%'
    },
    imageStyles: {
      flex: 1,
      width: '100%'
    },
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
  
  export default HomeComponent;