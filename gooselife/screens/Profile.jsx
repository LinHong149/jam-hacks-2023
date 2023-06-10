import React from 'react'
import { StyleSheet, View, SafeAreaView, Image, Text, TextInput, Pressable } from 'react-native'

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
        <View style={styles.container}>
            
        </View>
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
})
