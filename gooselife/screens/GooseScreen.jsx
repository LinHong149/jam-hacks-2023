import React from 'react'
import { StyleSheet, View, SafeAreaView, Image, Text, TextInput, Pressable, ImageBackground } from 'react-native'
import GooseBackground from '../assets/GooseBackground.png'
// const Goose = ({ Name, Level, Program }) => {
//     return (
//       <View style={styles.gooseContainer}>
//         <Image style={styles.gooseProfile}></Image>
//         <View style={styles.gooseTexts}>
//             <Text style={styles.gooseName}>{Name}</Text>
//             <Text style={styles.gooseLevel}>{Level}</Text>
//         </View>
//         <Text style={styles.gooseProgram}>{Program}</Text>
//       </View>
//     )
//   }

export default function GooseScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground source={GooseBackground} style={styles.backgroundImage}></ImageBackground>
            <View style={styles.statsContainer}>
                <Image style={styles.statsImage}></Image>
                <View style={styles.statsProgress}>
                    <Text style={styles.stats}>Level 2</Text>
                    <View style={styles.statsProgressTotal}></View>
                    <View style={styles.statsProgressCurrent}></View>
                </View>
            </View>

            <View style={styles.statsContainer}>
                <Image style={styles.statsImage}></Image>
                <View style={styles.statsProgress}>
                    <Text style={styles.stats}>Level 2</Text>
                    <View style={styles.statsProgressTotal}></View>
                    <View style={styles.statsProgressCurrent}></View>
                </View>
            </View>

            <View style={styles.levelContainer}>
                <Text style={styles.level}>Level 3</Text>
                <View style={styles.levelProgress}>
                    <View style={styles.levelProgressTotal}></View>
                    <View style={styles.levelProgressCurrent}></View>
                </View>
                <Text style={styles.levelCurrent}>Level 2</Text>
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
        padding: 30,
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
        width: 24,
        aspectRatio: 1,
        backgroundColor: 'black'
    },
    statsProgress: {
        flexGrow: 1,
        height: 10,
        position: 'relative'
    },
    statsProgressTotal: {
        position: 'absolute',
        height: 10,
        borderRadius: 5,
        width: '100%',
        backgroundColor: '#204940',
        opacity: 0.5
    },
    statsProgressCurrent: {
        position: 'absolute',
        height: 10,
        borderRadius: 5,
        width: "20%",
        backgroundColor: '#204940',
    },


    levelContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginRight: 0,
        marginLeft: 'auto'
    },
    levelNext: {
        color: '#1F1F1F',
        fontSize: 12,
    },
    levelProgress: {
        width: 20,
        aspectRatio: 1/8,
        position: 'relative'
    },
    levelProgressTotal: {
        position: 'absolute',
        width: 20,
        borderRadius: 10,
        height: '100%',
        backgroundColor: '#204940',
        opacity: 0.5,
        bottom: 0
    },
    levelProgressCurrent: {
        position: 'absolute',
        width: 20,
        borderRadius: 10,
        height: "20%",
        backgroundColor: '#204940',
        bottom: 0
    },
    levelCurrent: {
        color: '#1F1F1F',
        fontSize: 16,
    },


    actionsContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 12
    },
    actionsButton: {
        flexGrow: 1,
        aspectRatio: 1,
        backgroundColor: '#B8D8D4',
        borderRadius: 15,

    }
})
