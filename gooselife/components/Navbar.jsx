import React from 'react'
import { StyleSheet, View, SafeAreaView, Image, Text, TextInput, Pressable } from 'react-native'

const Filter = () => {
    return (
        <View></View>
    )
}

const Goose = ({ Name, Level, Program }) => {
    return (
      <View style={styles.gooseContainer}>
        <Image style={styles.gooseProfile}></Image>
        <View style={styles.gooseTexts}>
            <Text style={styles.gooseName}>{Name}</Text>
            <Text style={styles.gooseLevel}>{Level}</Text>
        </View>
        <Text style={styles.gooseProgram}>{Program}</Text>
      </View>
    )
  }

export default function FYGScreen() {
    return (
        <SafeAreaView style={styles.container}>


            
            
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
})