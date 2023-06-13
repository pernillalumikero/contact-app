import React from 'react'
import { View, StyleSheet } from 'react-native'
import IconButton from './IconButton';

export default function DefaultIcons({toggleFavorite, updateFunction, deleteFunction, item, favorite}) {
    return (
        <View style={styles.iconWrapper}>
            <IconButton onPress={toggleFavorite} icon={favorite} item={item}/>
            <IconButton onPress={updateFunction} icon="pencil-outline" item={item}/>
            <IconButton onPress={deleteFunction} icon="trash-outline" item={item}/>
        </View>
    )
}

const styles = StyleSheet.create({

      iconWrapper: {
        flexDirection: 'row',
        rowGap: 10,
        columnGap: 10,
        marginBottom: 10
      },
})