import React from 'react'
import {NativeBaseProvider} from 'native-base'
import {NavigationContainer} from '@react-navigation/native'
import {navigationRef, RootNavigator} from '@src/navigation'
import {theme} from './themes'

const App = () => {
  return (
    <NativeBaseProvider theme={theme}>
      <NavigationContainer ref={navigationRef}>
        <RootNavigator />
      </NavigationContainer>
    </NativeBaseProvider>
  )
}

export default App
