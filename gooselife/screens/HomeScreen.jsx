import React from 'react'
import { StyleSheet, View, SafeAreaView, Image, Text } from 'react-native'

const TimedTask = ({ isMeal }) => {
    return (
      <View style={styles.timedTask}>
          <View style={styles.timedTask}>
              <Text style={styles.timedTask}>{isMeal ? 'Meal' : 'Meal'} Time</Text>
              <View style={styles.timedTask}>
                  <Text style={styles.timedTask}>{isMeal ? 'Lunch' : 'Sleep'} - </Text>
                  <Text style={styles.timedTask}>in 30 minutes</Text>
              </View>
              <View style={styles.timedTask}>
                  <View style={styles.timedTask}></View>
                  <View style={styles.timedTask}></View>
              </View>
          </View>
  
          <View style={styles.timedTask}>
              <Text style={styles.timedTask}>I ate</Text>
          </View>
      </View>
    )
  }

  const HygieneTask = () => {
    return (
      <View style={styles.hygieneTask}>
          <View style={styles.hygieneTask}>
              <Text style={styles.hygieneTask}>Hygiene</Text>
              <Text style={styles.hygieneTask}>Take a shower</Text>
          </View>
  
          <View style={styles.hygieneTask}>
              <Text style={styles.hygieneTask}>I did</Text>
          </View>
      </View>
    )
  }

  const ProgressTask = ({ isStudy }) => {
    return (
      <View style={styles.progressTask}>
          <View style={styles.progressTask}>
              <Text style={styles.progressTask}>{isStudy? 'Study Minutes' : 'Steps'}</Text>
              <View>
                <Text style={styles.progressTask}>##/</Text>
                <Text style={styles.progressTask}>##</Text>
              </View>
          </View>
  
          <View style={styles.progressTask}>
              <Text style={styles.progressTask}>Start</Text>
          </View>
      </View>
    )
  }

export default function HomeScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.top}>
                <Image style={styles.top}></Image>
                <View style={styles.top}>
                    <Text style={styles.top}>Welcome</Text>
                    <Text style={styles.top}>Vickey Chen</Text>
                </View>
                <View style={styles.top}>
                    <Text style={styles.top}>Lv. 1</Text>
                </View>
            </View>

            <View style={styles.fact}>
                <Text style={styles.fact}>Did you know...</Text>
                <Text style={styles.fact}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi earum accusantium nesciunt nisi eaque blanditiis omnis saepe autem, est, amet provident error eligendi. Fuga iure ab accusamus est necessitatibus voluptatibus.</Text>
            </View>

            <View style={styles.task}>
                <Text style={styles.task}>Earn points</Text>
                <TimedTask isMeal={true}/>
                <HygieneTask/>
                <ProgressTask isStudy={false}/>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F6F5FC',
        width: '100%',
        height: '100%'
    }
})