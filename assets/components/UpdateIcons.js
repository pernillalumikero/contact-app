import React from 'react'
import { View, StyleSheet } from 'react-native'
import IconButton from './IconButton';

export default function UpdateIcons({ doneFunction, updateFunction, deleteFunction, item }) {


    return (
        <View style={styles.iconWrapper}>
            <IconButton onPress={doneFunction} icon="checkmark-circle-outline" item={item} size={24}/>
            <IconButton onPress={updateFunction} icon="close-circle-outline" item={item} size={24}/>
            <IconButton onPress={deleteFunction} icon="trash-outline" item={item} size={24}/>
        </View>
    )
}

const styles = StyleSheet.create({
    iconWrapper: {
        flexDirection: 'row',
        rowGap: 10,
        columnGap: '30',
        marginBottom: 10
    },
})