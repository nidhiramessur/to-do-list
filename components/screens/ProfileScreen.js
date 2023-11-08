import React from 'react';
import {View, Text, TouchableOpacity, KeyboardAvoidingView, Platform, TextInput, StyleSheet} from 'react-native';
import CustomNavBar from '../CustomNavBar';
import Task from "../Task";

const ProfileScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>

            <CustomNavBar activeScreen="Profile" onNavigate={navigation.navigate} />
            <Text>Profile Screen</Text>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E5D4CE'
    },
});

export default ProfileScreen;
