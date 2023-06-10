import React from 'react'
import { StyleSheet, View, SafeAreaView, Image, Text } from 'react-native'

const FoodWidget = () => {
  return (
    <div>HomeScreen</div>
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

            <View>
                <Text>Earn points</Text>
                <FoodWidget/>
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