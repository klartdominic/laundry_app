import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {useTranslation} from 'react-i18next'
import {Colors} from '@src/themes'
import {RootStackParamList} from '@src/types/nav.types'
import {Login} from '@src/screens'

// type RootStackParamList = {
//   Splash: undefined
// }

const {Navigator, Screen, Group} =
  createNativeStackNavigator<RootStackParamList>()

export default function RootNavigator() {
  const {t} = useTranslation()

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        headerShadowVisible: false,
        headerStyle: {backgroundColor: Colors.light},
        headerTitleStyle: {fontSize: 16, fontWeight: 'bold'},
        animation: 'fade',
        headerBackTitleVisible: false,
      }}
      initialRouteName="Splash"
    >
      <Screen
        options={{
          headerShown: true,
          title: 'Login',
        }}
        component={Login}
        name="Login"
      />
    </Navigator>
  )
}
