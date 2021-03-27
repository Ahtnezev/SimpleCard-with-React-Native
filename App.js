import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Contants from 'expo-constants'
import Profile from './screens/Profile';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

function ScreenA({ navigation }) {

  const onPressHandler = () => {
    navigation.navigate('Screen B')
    // navigation.replace('screen_b')
    // no muestra la flecha hacia atras con replace

  }

  return(
    <View style={ styles.container }>
      <Text style={ styles.mytext }>Screen A</Text>
      {/* style={ ({ pressed }) => ({ backgroundColor: pressed ? 'gray' : 'purple'}) } */}
      <Pressable onPress={ onPressHandler } >
        <Text style={ styles.mysecondText }>Go to B</Text>
      </Pressable>
    </View>
  )
}

function ScreenB({ navigation }) {

  const onPressHandler = () => {
    // navigation.navigate('screen_a')
    navigation.goBack()
  }

  return(
    <View style={ styles.container }>
      <Text style={ styles.mytext }>Screen B</Text>
      <Pressable onPress={ onPressHandler } >
        <Text style={ styles.mysecondText }>Go to back</Text>
      </Pressable>
    </View>
  )
}

//hader remueve la barra de titulo del activity Ln: 58
// screenOptions={{ header: () => null }} Stack.Navigator

export default function App() {
  return (
      <View style={ styles.container }>
        <Profile />
      </View>
  );
}

{/* <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name='screen_a'
            component={ ScreenA }
            options={{
              header: () => null
            }}
          />
          <Stack.Screen
            name='Screen B'
            component={ ScreenB }
          />
        </Stack.Navigator>
        <StatusBar style="auto" />
      </NavigationContainer> */}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: '#292929' ,
    // marginTop: Contants.statusBarHeight,
  },
  mytext: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#FFF'
  },
  mysecondText: {
    color: '#000',
    fontSize: 20,
    width: 200,
    paddingTop: 10,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 20,
    borderColor: '#333',
    borderWidth: 5,
    borderRadius: 10,
    backgroundColor: '#FFF',
    textAlign: 'center',
  },
});
