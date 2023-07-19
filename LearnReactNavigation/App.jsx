import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import DetailScreen from './screens/DetailScreen';
import HeaderlessScreen from './screens/HeaderlessScreen';
import HomeScreen from './screens/HomeScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: '홈',
            headerStyle: {backgroundColor: '#29b6f6'},
            headerTintColor: '#ffffff',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 20,
            },
          }}
        />
        <Stack.Screen
          name="Detail"
          component={DetailScreen}
          options={{
            headerBackVisible: false,
            // eslint-disable-next-line react/no-unstable-nested-components
            headerLeft: ({onPress}) => (
              <TouchableOpacity onPress={onPress}>
                <Text>Left</Text>
              </TouchableOpacity>
            ),

            // eslint-disable-next-line react/no-unstable-nested-components
            headerTitle: ({children}) => (
              <View>
                <Text>{children}</Text>
              </View>
            ),
            // eslint-disable-next-line react/no-unstable-nested-components
            headerRight: () => (
              <View>
                <Text>Right</Text>
              </View>
            ),
          }}
        />
        <Stack.Screen
          name="Headerless"
          component={HeaderlessScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
