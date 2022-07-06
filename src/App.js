import React from 'react';
import {StoreProvider} from './store';
import { SafeAreaView} from 'react-native';
import HomeComponent from './components/homeComponent/home.screen';



const App = () => {

  return (
    <>
      <StoreProvider>
        <SafeAreaView></SafeAreaView>
          <HomeComponent></HomeComponent>
        <SafeAreaView></SafeAreaView>
      </StoreProvider>
    </>
  );
};

export default App;