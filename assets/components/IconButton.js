import React from 'react'
import { Pressable, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

export default function IconButton({ onPress, icon, item }) {
    return (
        <Pressable style={styles.pressable} onPress={() => onPress(item.id)}>
            <Ionicons name={icon} size={24} color="black" />
        </Pressable>
    )
}

const styles = StyleSheet.create({

    pressable: {
        paddingHorizontal: 10,
        paddingVertical: 5
    }
})
