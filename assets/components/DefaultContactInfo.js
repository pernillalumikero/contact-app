import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function DefaultContactInfo({ item }) {
    return (
        <View>
            <Text style={styles.text}>{item.name}</Text>
            <View>
                <Text style={styles.text}>{item.number}</Text>
            </View>
            <View >
                <Text style={styles.text}>{item.email}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        fontFamily: 'Montserrat-Regular',
        marginVertical: 10,
    },

    iconWrapper: {
        flexDirection: 'row',
        rowGap: 10,
        columnGap: '30',
        marginBottom: 10
    },
})