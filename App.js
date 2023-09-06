import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Task from './components/Task';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Today's tasks */}
      <View style = {styles.tasksWrapper}>
        <Text style = {styles.sectionTile}> Today's tasks </Text>
        <View style = {styles.items}>
          {/* {This is where the tasks will go} */}
          <Task text = {'Task 1'} />
          <Task text = {'Task 2'} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5D4CE'
  },
  tasksWrapper: {
    paddingTop: 93,
    paddingLeft: 22
  },
  sectionTile: {
    fontSize: 32,
    fontWeight: 'bold'
  },
  items: {
    marginTop: 30,
    marginRight: 20
  }
});
