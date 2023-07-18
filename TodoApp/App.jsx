import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import AddTodo from './components/AddTodo';
import DateHead from './components/DateHead';
import Empty from './components/Empty';

export default function App() {
  const today = new Date();

  return (
    <SafeAreaView edges={['bottom']} style={styles.block}>
      <DateHead date={today} />
      <Empty />
      <AddTodo />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    backgroundColor: 'white',
  },
});
