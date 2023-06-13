import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'

export default function UpdateContactInfo({ setName, setNumber, setEmail, item }) {
    return (
        <View>
            <TextInput style={styles.text} onChangeText={(value) => setName(value)}>{item.name}</TextInput>
            <View style={styles.article}>
                <TextInput style={styles.text} keyboardType='numeric' onChangeText={(value) => setNumber(value)}>{item.number}</TextInput>
            </View>
            <View style={styles.article}>
                <TextInput style={styles.text} onChangeText={(value) => setEmail(value)}>{item.email}</TextInput>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    text: {
        fontFamily: 'Montserrat-Regular',
        marginVertical: 10,
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        padding: 5
      },

      article: {
        flexDirection: 'row',
        columnGap: 10,
        alignItems: 'center'
      },
})
