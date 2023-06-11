import React, { useState, useEffect } from 'react';
import { StyleSheet, View, SafeAreaView, Image, Text, TouchableOpacity, Button, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Goose1 from '../assets/Goose1.png';
import HighFiveGoose from '../assets/HighFiveGoose.png';
import { currLevel } from './GooseScreen'
import { facts } from '../Database';

const TimedTask = ({ isMeal, onRemove }) => {
  return (
    <View style={styles.timedTaskContainer}>
      <View style={styles.timedTaskData}>
        <Text style={styles.timedTaskHeader}>{isMeal ? 'Meal' : 'Sleeping'} Time</Text>
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
        <Text style={styles.timedTaskButtonText}>Done</Text>
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
        <Text style={styles.hygieneTaskButtonText}>Done</Text>
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
          <Text style={styles.progressTaskCurrent}>{isStudy ? '23/' : '3242/'}</Text>
          <Text style={styles.progressTaskTotal}>{isStudy ? '120' : '8000'}</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.progressTaskButton} onPress={onRemove}>
        <Text style={styles.progressTaskButtonText}>Start</Text>
      </TouchableOpacity>
    </View>
  );
};

export default function HomeScreen() {
    const navigation = useNavigation();

    const navigateToScreen = (screenName) => {
        navigation.navigate(screenName);
    };

    // Fact Generation
    const [randomString, setRandomString] = useState('');
    const generateRandomString = () => {
        const randomIndex = Math.floor(Math.random() * facts.length);
        setRandomString(facts[randomIndex]);
    };
    useEffect(() => {
        generateRandomString();
    }, []);


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
      <Pressable style={styles.topContainer}
        onPress={() => navigateToScreen('Profile')}>
        <Image style={styles.topPicture} source={Goose1} />
        <View style={styles.topTextsContainers}>
          <Text style={styles.topWelcome}>Welcome</Text>
          <Text style={styles.topName}>Quackers Fishin</Text>
        </View>
        <View style={styles.topLevelContainer}>
          <Text style={styles.topLevel}>Lv. {currLevel}</Text>
        </View>
      </Pressable>
      <Pressable style={styles.factContainer}
        onPress={generateRandomString}>
        <Text style={styles.factHeader}>Did you know...</Text>
        <Text style={styles.factText}>{randomString}</Text>
      </Pressable>
      
      <View style={styles.taskContainer}>
        <Text style={styles.taskHeader}>Earn Points</Text>
        {tasks.length > 0 ? tasks.map(renderTask) : <Image style={styles.taskedFinishedImages} source={HighFiveGoose}/>}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
      fontFamily: 'MS',
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
      fontFamily: 'MS',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    topPicture: {
      fontFamily: 'MS',
        width: 50,
        aspectRatio: 1,
        backgroundColor: 'black',
        borderRadius: 100
    },
    topTextsContainers: {
      fontFamily: 'MS',
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        marginLeft: 16
    },
    topWelcome: {
      fontFamily: 'MS',
        color: "#1F1F1F",
        fontSize: 16,
    },
    topName: {
      fontFamily: 'MS',
        color: "#1F1F1F",
        fontSize: 20,
    },
    topLevelContainer: {
      fontFamily: 'MS',
        height: 45,
        backgroundColor: '#F6E1A5',
        borderRadius: 15,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 16
    },
    topLevel: {
      fontFamily: 'MS',
        fontSize: 16,
    },


    factContainer: {
      fontFamily: 'MS',
        backgroundColor: '#235F53',
        width: '100%',
        borderRadius: 15,
        padding: 16,
        gap: 6
    },
    factHeader: {
      fontFamily: 'MS',
        color: '#F6F5FC',
        fontSize: 20
    },
    factText: {
      fontFamily: 'MS',
        color: '#F6F5FC',
        fontSize: 16,
        opacity: 0.5
    },


    taskContainer: {
      fontFamily: 'MS',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: 16
    },
    taskHeader: {
      fontFamily: 'MS',
        color: '#1F1F1F',
        fontSize: 20
    },
    taskScrollContainer: {
      fontFamily: 'MS',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    },
    taskedFinishedImages:{
      fontFamily: 'MS',
        width: '100%',
        height: 300,
        resizeMode: 'contain'
    },


    timedTaskContainer: {
      fontFamily: 'MS',
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
      fontFamily: 'MS',
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        gap: 6
    },
    timedTaskHeader: {
      fontFamily: 'MS',
        color: '#1F1F1F',
        fontSize: 16,
    },
    timedTaskTexts: {
      fontFamily: 'MS',
        color: '#1F1F1F',
        opacity: 0.75,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-end',
        flexGrow: 1,
    },
    timedTaskType: {
      fontFamily: 'MS',
        fontSize: 12
    },
    timedTaskTime: {
      fontFamily: 'MS',
        fontSize: 10
    },
    timedTaskProgress: {
      fontFamily: 'MS',
        width: '100%',
        height: 10,
        position: 'relative'
    },
    timedTaskProgressTotal: {
      fontFamily: 'MS',
        position: 'absolute',
        height: 10,
        borderRadius: 5,
        width: '100%',
        backgroundColor: '#204940',
        opacity: 0.5
    },
    timedTaskProgressCurrent: {
      fontFamily: 'MS',
        position: 'absolute',
        height: 10,
        borderRadius: 5,
        width: "20%",
        backgroundColor: '#204940',
    },
    timedTaskButton: {
      fontFamily: 'MS',
        backgroundColor: '#EACB76',
        paddingHorizontal: 16,
        borderRadius: 15,
        height: 36,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    timedTaskButtonText: {
      fontFamily: 'MS',
        color: '#1F1F1F',
        fontSize: 12
    },


    hygieneTaskContainer: {
      fontFamily: 'MS',
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
      fontFamily: 'MS',
        display: 'flex',
        flexDirection: 'column',
        gap: 6
    },
    hygieneTaskHeader: {
      fontFamily: 'MS',
        color: '#1F1F1F',
        fontSize: 16
    },
    hygieneTaskText: {
      fontFamily: 'MS',
        color: '#1F1F1F',
        fontSize: 12
    },
    hygieneTaskButton: {
      fontFamily: 'MS',
        backgroundColor: '#EACB76',
        paddingHorizontal: 16,
        borderRadius: 15,
        height: 36,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    hygieneTaskButtonText: {
      fontFamily: 'MS',
        color: '#1F1F1F',
        fontSize: 12
    },


    progressTaskContainer: {
      fontFamily: 'MS',
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
      fontFamily: 'MS',
        display: 'flex',
        flexDirection: 'column',
        gap: 6
    },
    progressTaskHeader: {
      fontFamily: 'MS',
        color: '#1F1F1F',
        fontSize: 16
    },
    progressTaskTexts: {
      fontFamily: 'MS',
        color: '#1F1F1F',
        opacity: 0.75,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-end'
    },
    progressTaskCurrent: {
      fontFamily: 'MS',
        fontSize: 16,
    },
    progressTaskTotal: {
      fontFamily: 'MS',
        fontSize: 12,
    },


    progressTaskButton: {
      fontFamily: 'MS',
        backgroundColor: '#EACB76',
        paddingHorizontal: 16,
        borderRadius: 15,
        height: 36,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    progressTaskButtonText: {
      fontFamily: 'MS',
        color: '#1F1F1F',
        fontSize: 12
    }
})