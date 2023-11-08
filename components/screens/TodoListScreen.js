import React, {useState} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Keyboard,
    TouchableOpacity,
    KeyboardAvoidingView,
    Platform,
    TextInput
} from 'react-native';
import CustomNavBar from '../CustomNavBar';
import Task from "../Task";

const TodoListScreen = ({ navigation }) => {
    const [task, setTask] = useState();
    const [taskItems, setTaskItems] = useState([]);

    const handleAddTask = () => {
        Keyboard.dismiss();
        setTaskItems([...taskItems, task])
        setTask(null);
    }

    const completeTask = (index) => {
        let itemsCopy = [...taskItems];
        itemsCopy.splice(index, 1);
        setTaskItems(itemsCopy);
    }

    return (
        <View style={styles.container}>

            <CustomNavBar activeScreen="TodoList" onNavigate={navigation.navigate} />

            {/* Today's tasks */}
            <View style={styles.tasksWrapper}>
                <Text style={styles.sectionTile}> Today's tasks </Text>

                <View style={styles.items}>
                    {/* {This is where the tasks will go} */}
                    {
                        taskItems.map((item, index) => {
                            return (
                                <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                                    <Task text={item} />
                                </TouchableOpacity>
                            )
                        })
                    }
                </View>
            </View>

            {/* write a task */}
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={styles.writeTasksWrapper}
            >
                <TextInput style={styles.input} placeholder={'Write a task'} value={task} onChangeText={text => setTask(text)}/>

                <TouchableOpacity onPress={() => handleAddTask()} >
                    <View style={styles.addWrapper}>
                        <Text style={styles.addText}>+</Text>
                    </View>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E5D4CE'
    },
    tasksWrapper: {
        paddingTop: 10,
        paddingHorizontal: 22
    },
    sectionTile: {
        fontSize: 32,
        fontWeight: 'bold'
    },
    items: {
        marginTop: 30
    },
    writeTasksWrapper: {
        position: 'absolute',
        paddingHorizontal: 20,
        bottom: 80,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    input: {
        paddingVertical: 15,
        paddingHorizontal: 15,
        backgroundColor: "#FFF",
        borderRadius: 60,
        borderColor: "#C0C0C0",
        borderWidth: 1,
        width: 250
    },
    addWrapper: {
        width: 60,
        height: 60,
        backgroundColor: "#FFF",
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: "#C0C0C0",
        borderWidth: 1
    },
    addText: {}
});

export default TodoListScreen;
