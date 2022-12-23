import React, { useState } from 'react';
import { StyleSheet, View, Text, SafeAreaView, TextInput, Button } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

const MyTextInput = () => {
    const [task, setTask] = useState('');

    const getTodoList = () => {
        // create flat list to view the list of tasks with a button to delete a task
        return () => {
            <View>
                <Text>{task}</Text>
                <Ionicons name="trash" size={24} color="black" />
            </View>
        }
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <Text>My Todo List</Text>
                <TextInput
                    value={task}
                    onChangeText={(task) => setTask(task)}
                    placeholder={'Add new task here...'}
                    style={styles.input}
                />
                <Button onPress={getTodoList} title="Submit" color="#841584" />
            </View>
            getTodoList();
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: 20,
        backgroundColor: '#ffffff',
    },
    input: {
        width: 250,
        height: 44,
        padding: 10,
        marginTop: 20,
        marginBottom: 10,
        backgroundColor: '#e8e8e8'
    },
});

export default MyTextInput;