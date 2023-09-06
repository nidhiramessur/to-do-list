import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native';

const Task = (props) => {
    return (
        <View style = {styles.item}>
            <View style = {styles.itemLeft}>
                <TouchableOpacity style = {styles.square}></TouchableOpacity>
                <Text style = {styles.itemText}> {props.text} </Text>
            </View>
            <View style = {styles.circular}>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: "#FFF",
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 15
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    square: {
        width: 26,
        height: 26,
        backgroundColor: '#A76571',
        borderRadius: 5,
        marginRight: 10
    },
    itemText: {
        maxWidth: '80%'
    },
    circular: {
        width: 15,
        height: 15,
        borderBlockColor: '#A76571',
        borderWidth: 3,
        borderRadius: 10
    }
});

export default Task;