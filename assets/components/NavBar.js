import React from 'react'
import { View, StyleSheet, Alert } from 'react-native'
import IconButton from './IconButton'

export default function NavBar() {

  return (
    <View style={styles.nav}>
      <IconButton icon='home-sharp' color='white' size={35} />
      <IconButton icon='call-sharp' color='white' size={35} />
      <IconButton icon='at-outline' color='white' size={35} />
    </View>
  )
}

const styles = StyleSheet.create({
    nav: {
        flexDirection: 'row',
        justifyContent: 'center',
        columnGap: 70,
        height: 50,
        width: '100%',
        backgroundColor: '#313232'
    }
})