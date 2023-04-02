import React from 'react'
import {View} from 'native-base'
import {Colors} from '@src/themes'

interface Props {
  children: Element
}

const Page = (props: Props) => {
  return (
    <View flex={1} backgroundColor={Colors.primary}>
      {props.children}
    </View>
  )
}

export default Page
