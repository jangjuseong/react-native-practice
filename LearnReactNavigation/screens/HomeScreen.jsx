import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Button, Text, View} from 'react-native';

function OpenDetailButton() {
  const navigation = useNavigation();

  return (
    <Button
      title="Detail 1 열기"
      onPress={() => navigation.push('Detail', {id: 1})}
    />
  );
}

const HomeScreen = () => {
  return (
    <View>
      <Text>Home</Text>
      <OpenDetailButton />
    </View>
  );
};

export default HomeScreen;
