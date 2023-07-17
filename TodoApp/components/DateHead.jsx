import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function DateHead() {
  return (
    <View style={styles.block}>
      <Text style={styles.dateText}>2023년 7월 17일</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    padding: 16,
    backgroundColor: '#26a69a',
  },
  dateText: {
    fontSize: 24,
    color: 'white',
  },
});
