import React from 'react';
import {SafeAreaView, View} from 'react-native';
import DateHead from './components/DateHead';

export default function App() {
  const today = new Date();

  return (
    <SafeAreaView>
      <View>
        <DateHead date={today} />
      </View>
    </SafeAreaView>
  );
}

// const styles = StyleSheet.create({});
