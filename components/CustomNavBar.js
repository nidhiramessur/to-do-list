// components/CustomNavBar.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

const CustomNavBar = ({ activeScreen, onNavigate }) => {
    return (
        <View style={styles.navbar}>
            <Button
                mode={activeScreen === 'TodoList' ? 'contained' : 'outlined'}
                onPress={() => onNavigate('TodoList')}
            >
                Todo List
            </Button>
            <Button
                mode={activeScreen === 'Profile' ? 'contained' : 'outlined'}
                onPress={() => onNavigate('Profile')}
            >
                Profile
            </Button>
        </View>
    );
};

const styles = StyleSheet.create({
    navbar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 10,
        position: 'absolute', // Position the navbar at the bottom
        bottom: 0, // Stick it to the bottom of the screen
        width: '100%', // Make it span the entire width
        backgroundColor: '#fff', // Optional background color
        borderTopWidth: 1, // Optional border at the top of the navbar
        borderColor: '#ccc', // Optional border color
    },
});

export default CustomNavBar;
