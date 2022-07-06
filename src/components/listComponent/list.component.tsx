import React, { useEffect, useContext} from 'react';
import { View, FlatList, Text, StyleSheet} from 'react-native';
import { Store } from '../../store';
import { randomNum } from '../../utils/generateRandomNum';

const ListViewComponent = () => {

    const {state, dispatch} = useContext(Store);

    return (
        <View style={styles.listViewContainer}>
            {console.log('---------------- number of posts : ', state.listData.length)}
            {state.listData.length > 0 
            ? 
            <FlatList
            data={searchDataSet(state.listData, state.searchKeyword)}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            /> 
            : null}
        </View>          
    );
  };

  function searchDataSet (dataArray, keyword){
    console.log('---------------- search keyword: ', keyword);
    
    if (!keyword || keyword == ''){
        return dataArray
    }
    return dataArray.filter(item => item.body.includes(keyword));
  }
  
  const renderItem = ({ item }) => (
    <View style={styles.singleListItemContainer}>
        <Text style={styles.textData}>{`${item.id} : ${item.body} : ${randomNum()}`}</Text>
    </View>
  );
  
  const styles = StyleSheet.create({
    listViewContainer: {
      width: '100%',
      flex: 4,
    },
    singleListItemContainer: {
      flexDirection: 'row',
      padding: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#eeeeee'
    },
    textData: {
      fontSize: 14,
      color: '#000'
    },
  });
  
  export default ListViewComponent;