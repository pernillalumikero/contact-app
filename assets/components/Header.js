import React from 'react'
import { FontAwesome5 } from '@expo/vector-icons';
import { View, Text, StyleSheet } from 'react-native'

export default function Header() {
    return (
        <View style={styles.wrapper}>
            <FontAwesome5 name="users" size={24} color="black" />
            <Text style={styles.h1}>KONTAKTER</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    
    h1: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 20,
      },

      wrapper: {
        flexDirection: 'row',
        columnGap: 20,
        marginTop: 50,
        marginBottom: 20
      },
})