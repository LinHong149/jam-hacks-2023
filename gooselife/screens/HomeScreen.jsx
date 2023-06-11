import React, { useState } from 'react';
import { StyleSheet, View, SafeAreaView, Image, Text, TouchableOpacity } from 'react-native';
import Goose1 from '../assets/Goose1.png';
import HighFiveGoose from '../assets/HighFiveGoose.png';

const TimedTask = ({ isMeal, onRemove }) => {
  return (
    <View style={styles.timedTaskContainer}>
      <View style={styles.timedTaskData}>
        <Text style={styles.timedTaskHeader}>{isMeal ? 'Meal' : 'Meal'} Time</Text>
        <View style={styles.timedTaskTexts}>
          <Text style={styles.timedTaskType}>{isMeal ? 'Lunch' : 'Sleep'} - </Text>
          <Text style={styles.timedTaskTime}>in 30 minutes</Text>
        </View>
        <View style={styles.timedTaskProgress}>
          <View style={styles.timedTaskProgressTotal}></View>
          <View style={styles.timedTaskProgressCurrent}></View>
        </View>
      </View>

      <TouchableOpacity style={styles.timedTaskButton} onPress={onRemove}>
        <Text style={styles.timedTaskButtonText}>I ate</Text>
      </TouchableOpacity>
    </View>
  );
};

const HygieneTask = ({ onRemove }) => {
  return (
    <View style={styles.hygieneTaskContainer}>
      <View style={styles.hygieneTaskTexts}>
        <Text style={styles.hygieneTaskHeader}>Hygiene</Text>
        <Text style={styles.hygieneTaskText}>Take a shower</Text>
      </View>

      <TouchableOpacity style={styles.hygieneTaskButton} onPress={onRemove}>
        <Text style={styles.hygieneTaskButtonText}>I did</Text>
      </TouchableOpacity>
    </View>
  );
};

const ProgressTask = ({ isStudy, onRemove }) => {
  return (
    <View style={styles.progressTaskContainer}>
      <View style={styles.progressTaskData}>
        <Text style={styles.progressTaskHeader}>{isStudy ? 'Study Minutes' : 'Steps'}</Text>
        <View style={styles.progressTaskTexts}>
          <Text style={styles.progressTaskCurrent}>##/</Text>
          <Text style={styles.progressTaskTotal}>##</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.progressTaskButton} onPress={onRemove}>
        <Text style={styles.progressTaskButtonText}>Start</Text>
      </TouchableOpacity>
    </View>
  );
};

export default function HomeScreen() {
  const [tasks, setTasks] = useState([
    { id: 1, type: 'TimedTask', isMeal: true },
    { id: 2, type: 'TimedTask', isMeal: false },
    { id: 3, type: 'HygieneTask' },
    { id: 4, type: 'ProgressTask', isStudy: false },
    { id: 5, type: 'ProgressTask', isStudy: true },
  ]);

  const removeTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  const renderTask = (task) => {
    switch (task.type) {
      case 'TimedTask':
        return <TimedTask key={task.id} isMeal={task.isMeal} onRemove={() => removeTask(task.id)} />;
      case 'HygieneTask':
        return <HygieneTask key={task.id} onRemove={() => removeTask(task.id)} />;
      case 'ProgressTask':
        return <ProgressTask key={task.id} isStudy={task.isStudy} onRemove={() => removeTask(task.id)} />;
      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topContainer}>
        <Image style={styles.topPicture} source={Goose1} />
        <View style={styles.topTextsContainers}>
          <Text style={styles.topWelcome}>Welcome</Text>
          <Text style={styles.topName}>Vickey Chen</Text>
        </View>
        <View style={styles.topLevelContainer}>
          <Text style={styles.topLevel}>Lv. 1</Text>
        </View>
      </View>

      <View style={styles.factContainer}>
        <Text style={styles.factHeader}>Did you know...</Text>
        <Text style={styles.factText}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi earum accusantium nesciunt nisi eaque blanditiis
          omnis saepe autem, est, amet provident error eligendi. Fuga iure ab accusamus est necessitatibus voluptatibus.
        </Text>
      </View>

      <View style={styles.taskContainer}>
        <Text style={styles.taskHeader}>Earn Points</Text>
        {tasks.length > 0 ? tasks.map(renderTask) : <Image style={styles.taskedFinishedImages} source={HighFiveGoose}/>}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F6F5FC',
        width: '100%',
        height: '100%',
        paddingHorizontal: 30,
        paddingTop: 50,
        paddingBottom: 55,
        display: 'flex',
        flexDirection: 'column',
        gap: 24
    },
    topContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    topPicture: {
        width: 50,
        aspectRatio: 1,
        backgroundColor: 'black',
        borderRadius: 100
    },
    topTextsContainers: {
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        marginLeft: 16
    },
    topWelcome: {
        color: "#1F1F1F",
        fontSize: 12,
    },
    topName: {
        color: "#1F1F1F",
        fontSize: 20,
    },
    topLevelContainer: {
        height: 45,
        backgroundColor: '#F6E1A5',
        borderRadius: 15,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 16
    },
    topLevel: {
        fontSize: 16,
    },


    factContainer: {
        backgroundColor: '#235F53',
        width: '100%',
        borderRadius: 15,
        padding: 16,
        gap: 6
    },
    factHeader: {
        color: '#F6F5FC',
        fontSize: 16
    },
    factText: {
        color: '#F6F5FC',
        fontSize: 12,
        opacity: 0.5
    },


    taskContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: 16
    },
    taskHeader: {
        color: '#1F1F1F',
        fontSize: 20
    },
    taskedFinishedImages:{
        width: '100%',
        height: 300,
        resizeMode: 'contain'
    },


    timedTaskContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 16,
        borderRadius: 15,
        backgroundColor: '#F6E1A5',
        alignItems: 'flex-end',
        gap: 16
    },
    timedTaskData: {
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        gap: 6
    },
    timedTaskHeader: {
        color: '#1F1F1F',
        fontSize: 16,
    },
    timedTaskTexts: {
        color: '#1F1F1F',
        opacity: 0.75,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-end',
        flexGrow: 1,
    },
    timedTaskType: {
        fontSize: 12
    },
    timedTaskTime: {
        fontSize: 10
    },
    timedTaskProgress: {
        width: '100%',
        height: 10,
        position: 'relative'
    },
    timedTaskProgressTotal: {
        position: 'absolute',
        height: 10,
        borderRadius: 5,
        width: '100%',
        backgroundColor: '#204940',
        opacity: 0.5
    },
    timedTaskProgressCurrent: {
        position: 'absolute',
        height: 10,
        borderRadius: 5,
        width: "20%",
        backgroundColor: '#204940',
    },
    timedTaskButton: {
        backgroundColor: '#EACB76',
        paddingHorizontal: 16,
        borderRadius: 15,
        height: 36,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    timedTaskButtonText: {
        color: '#1F1F1F',
        fontSize: 12
    },


    hygieneTaskContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 16,
        borderRadius: 15,
        backgroundColor: '#F6E1A5',
        alignItems: 'flex-end'
    },
    hygieneTaskTexts: {
        display: 'flex',
        flexDirection: 'column',
        gap: 6
    },
    hygieneTaskHeader: {
        color: '#1F1F1F',
        fontSize: 16
    },
    hygieneTaskText: {
        color: '#1F1F1F',
        fontSize: 12
    },
    hygieneTaskButton: {
        backgroundColor: '#EACB76',
        paddingHorizontal: 16,
        borderRadius: 15,
        height: 36,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    hygieneTaskButtonText: {
        color: '#1F1F1F',
        fontSize: 12
    },


    progressTaskContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 16,
        borderRadius: 15,
        backgroundColor: '#F6E1A5',
        alignItems: 'flex-end'
    },
    progressTaskData: {
        display: 'flex',
        flexDirection: 'column',
        gap: 6
    },
    progressTaskHeader: {
        color: '#1F1F1F',
        fontSize: 16
    },
    progressTaskTexts: {
        color: '#1F1F1F',
        opacity: 0.75,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-end'
    },
    progressTaskCurrent: {
        fontSize: 16,
    },
    progressTaskTotal: {
        fontSize: 12,
    },


    progressTaskButton: {
        backgroundColor: '#EACB76',
        paddingHorizontal: 16,
        borderRadius: 15,
        height: 36,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    progressTaskButtonText: {
        color: '#1F1F1F',
        fontSize: 12
    }
})