import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import DateHead from './components/DateHead';

function App() {
  const today = new Date();
  console.log(today);
  console.log('디버깅 테스트');

  return (
    <SafeAreaView>
      <DateHead />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});

export default App;
