import React from 'react'
import { View, Animated, Button } from 'react-native';
import { useFade } from '../hooks/useFade';

const FadeInScreen = () => {

    const {fadeIn, fadeOut, opacity} = useFade();

  return (
    <View style={{flex: 1, backgroundColor: "grey", justifyContent: "center", alignItems: "center"}}>
        <Animated.View style={{backgroundColor: "#084F6A", width: 150, height: 150, borderColor: "white", marginBottom: 10  , borderWidth: 10, opacity: opacity}}/>
        <Button title='fadeIn' onPress={fadeIn}/>
        <Button title='fadeOut' onPress={fadeOut}/>
    </View>
  )
}

export default FadeInScreen