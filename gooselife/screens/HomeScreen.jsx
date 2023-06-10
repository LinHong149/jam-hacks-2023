import React from 'react'
import { StyleSheet, View, SafeAreaView, Image, Text } from 'react-native'

const TimedTask = ({ isMeal }) => {
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
  
          <View style={styles.timedTaskButton}>
              <Text style={styles.timedTaskButtonText}>I ate</Text>
          </View>
      </View>
    )
  }

  const HygieneTask = () => {
    return (
      <View style={styles.hygieneTaskContainer}>
          <View style={styles.hygieneTaskTexts}>
              <Text style={styles.hygieneTaskHeader}>Hygiene</Text>
              <Text style={styles.hygieneTaskText}>Take a shower</Text>
          </View>
  
          <View style={styles.hygieneTaskButton}>
              <Text style={styles.hygieneTaskButtonText}>I did</Text>
          </View>
      </View>
    )
  }

  const ProgressTask = ({ isStudy }) => {
    return (
      <View style={styles.progressTaskContainer}>
          <View style={styles.progressTaskData}>
              <Text style={styles.progressTaskHeader}>{isStudy? 'Study Minutes' : 'Steps'}</Text>
              <View style={styles.progressTaskTexts}>
                <Text style={styles.progressTaskCurrent}>##/</Text>
                <Text style={styles.progressTaskTotal}>##</Text>
              </View>
          </View>
  
          <View style={styles.progressTaskButton}>
              <Text style={styles.progressTaskButtonText}>Start</Text>
          </View>
      </View>
    )
  }

export default function HomeScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.topContainer}>
                <Image style={styles.topPicture}></Image>
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
                <Text style={styles.factText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi earum accusantium nesciunt nisi eaque blanditiis omnis saepe autem, est, amet provident error eligendi. Fuga iure ab accusamus est necessitatibus voluptatibus.</Text>
            </View>

            <View style={styles.taskContainer}>
                <Text style={styles.taskHeader}>Earn Points</Text>
                <TimedTask isMeal={true}/>
                <TimedTask isMeal={false}/>
                <HygieneTask/>
                <ProgressTask isStudy={false}/>
                <ProgressTask isStudy={true}/>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F6F5FC',
        width: '100%',
        height: '100%',
        padding: 30,
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
        width: 45,
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
        fontSize: 16,
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
        fontSize: 12,
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