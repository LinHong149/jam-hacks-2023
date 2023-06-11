import React from 'react'
import { StyleSheet, View, SafeAreaView, Image, Text, TextInput, Pressable, ImageBackground } from 'react-native'
import GooseBackground from '../assets/GooseBackground.png'
import adultGoose from '../assets/adultGoose.png'
import babyGoose from '../assets/babyGoose.png'
import eggGoose from '../assets/eggGoose.png'
import heart from '../assets/heart.png'
import brain from '../assets/brain.png'

export default function GooseScreen() {
    const level = 50
    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground source={GooseBackground} style={styles.backgroundImage}></ImageBackground>
            <View style={styles.statsContainer}>
                <Image style={styles.statsImage} source={heart}></Image>
                <View style={styles.statsProgress}>
                    <View style={styles.statsProgressTotal}></View>
                    <View style={styles.statsProgressCurrent}></View>
                </View>
            </View>

            <View style={styles.statsContainer}>
                <Image style={styles.statsImage} source={brain}></Image>
                <View style={styles.statsProgress}>
                    <View style={styles.statsProgressTotal}></View>
                    <View style={styles.statsProgressCurrent}></View>
                </View>
            </View>

            <View style={styles.gooseContainer}>
                <Image style={level <= 10 ? styles.gooseImage : styles.gooseImageBigger} source={level <= 3 ? eggGoose : level <= 10 ? babyGoose : adultGoose}></Image>
                <View style={styles.levelContainer}>
                    <Text style={styles.levelNext}>Level {level + 1}</Text>
                    <View style={styles.levelProgress}>
                        <View style={styles.levelProgressTotal}></View>
                        <View style={styles.levelProgressCurrent}></View>
                    </View>
                    <Text style={styles.levelCurrent}>Level {level}</Text>
                </View>
            </View>


            <View style={styles.actionsContainer}>
                <View style={styles.actionsButton}>
                    <Image style={styles.actions}></Image>
                </View>
                <View style={styles.actionsButton}>
                    <Image style={styles.actions}></Image>
                </View>
                <View style={styles.actionsButton}>
                    <Image style={styles.actions}></Image>
                </View>
                <View style={styles.actionsButton}>
                    <Image style={styles.actions}></Image>
                </View>
                <View style={styles.actionsButton}>
                    <Image style={styles.actions}></Image>
                </View>
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
    backgroundImage: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        resizeMode: 'cover'
    },
    

    statsContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 16
    },
    statsImage: {
        width: 36,
        aspectRatio: 1,
        resizeMode: 'contain'
    },
    statsProgress: {
        flexGrow: 1,
        height: 20,
        position: 'relative'
    },
    statsProgressTotal: {
        position: 'absolute',
        height: 20,
        borderRadius: 10,
        width: '100%',
        backgroundColor: '#204940',
        opacity: 0.5
    },
    statsProgressCurrent: {
        position: 'absolute',
        height: 20,
        borderRadius: 10,
        width: '20%',
        backgroundColor: '#204940',
    },


    gooseContainer: {
        display: 'flex',
        flexGrow: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    gooseImage: {
        width: 600,
        height: 300,
        resizeMode: 'contain',
        position: 'absolute',
        bottom: 0,
    },
    gooseImageBigger: {
        width: 800,
        height: 450,
        resizeMode: 'contain',
        position: 'absolute',
        bottom: 0,
    },

    levelContainer: {
        display: 'flex',
        position: 'absolute',
        right: 0,
        flexDirection: 'column',
        alignItems: 'center',
    },
    levelNext: {
        color: '#204940',
        fontSize: 16,
    },
    levelProgress: {
        width: 30,
        aspectRatio: 1/8,
        position: 'relative'
    },
    levelProgressTotal: {
        position: 'absolute',
        width: 30,
        borderRadius: 15,
        height: '100%',
        backgroundColor: '#EACB76',
        bottom: 0
    },
    levelProgressCurrent: {
        position: 'absolute',
        width: 30,
        borderRadius: 15,
        height: "20%",
        backgroundColor: '#204940',
        bottom: 0
    },
    levelCurrent: {
        color: '#EACB76',
        fontSize: 20,
    },


    actionsContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 12,
        marginBottom: 20,
    },
    actionsButton: {
        flexGrow: 1,
        aspectRatio: 1,
        backgroundColor: '#B8D8D4',
        borderRadius: 15,

    }
})
