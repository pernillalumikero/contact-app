import React from 'react'
import { Pressable, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

export default function IconButton({ onPress, icon, item, size, color }) {
    return (
        <Pressable style={styles.pressable} onPress={() => onPress(item.id)}>
            <Ionicons name={icon} size={size} color={color} />
        </Pressable>
    )
}

const styles = StyleSheet.create({

    pressable: {
        paddingHorizontal: 10,
        paddingVertical: 5
    }
})
