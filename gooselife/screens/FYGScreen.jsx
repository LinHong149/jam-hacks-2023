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
            <Text style={styles.header}>Connect with Geeses</Text>
            <View style={styles.inputContainer}>
                <TextInput style={styles.inputSearch} placeholder="Find a goose"></TextInput>
                <Pressable style={styles.inputFilter}>
                    <Image></Image>
                </Pressable>
            </View>

            <View style={styles.resultsContainer}>
                <Text style={styles.resultsHeader}>Search Results</Text>
                <Goose style={styles.resultsGoose} Name='Ri Hong' Level='Lv. 32' Program='CS'/>   
                <Goose style={styles.resultsGoose} Name='Ri Hong' Level='Lv. 32' Program='CS'/>   
                <Goose style={styles.resultsGoose} Name='Ri Hong' Level='Lv. 32' Program='CS'/>   
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


    header: {
        color: '#1F1F1F',
        fontSize: 20,
    },


    inputContainer: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        gap: 16
    },
    inputSearch: {
        flexGrow: 1,
        backgroundColor: 'white',
        height: 48,
        display: 'flex',
        paddingHorizontal: 16,
        justifyContent: 'center',
        borderRadius: 24,
    },
    inputFilter: {
        backgroundColor: '#7A9791',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100,
        aspectRatio: 1,
        height: 48
    },


    resultsContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: 16
    },
    resultsHeader: {
        color: '#1F1F1F',
        fontSize: 16
    },

    
    gooseContainer: {
        backgroundColor: '#F6E1A5',
        borderRadius: 15,
        padding: 16,
        display: 'flex',
        flexDirection: 'row',
        gap: 12,
        justifyContent: 'space-between'
    },

    gooseProfile: {
        width: 48,
        aspectRatio: 1,
        backgroundColor: 'black'
    },
    gooseTexts: {
        display: 'flex',
        flexDirection: 'column',
        gap: 6,
        color: '#1F1F1F',
        flexGrow: 1,
    },
    gooseName: {
        fontSize: 16,
    },
    gooseLevel: {
        fontSize: 12,
    },
    gooseProgram: {
        display: 'flex',
        fontSize: 16,
        textAlign: 'center',
        verticalAlign: 'middle',
        backgroundColor: '#EACB76',
        aspectRatio: 1,
        borderRadius: 100
    }
})