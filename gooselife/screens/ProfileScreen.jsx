import React, { useState } from 'react';
import { StyleSheet, View, SafeAreaView, Image, Text, TextInput, Pressable } from 'react-native';
import Goose1 from '../assets/Goose1.png'

const Selection = ({ Info, selected, onPress }) => {
  const buttonStyle = selected ? styles.selectionButtonPressed : styles.selectionButton;
  const textStyle = selected ? styles.selectionTextPressed : styles.selectionText;

  return (
    <Pressable style={buttonStyle} onPress={onPress}>
      <Text style={textStyle}>{Info}</Text>
    </Pressable>
  );
};

export default function ProfileScreen() {
    const genders = ['Male', 'Female', 'Other'];
    const years = ['1st', '2nd', '3rd', '4th', '5th'];
    const exercises = ['Beginner', 'Average', 'Cracked'];
    const studies = ['Beginner', 'Average', 'Cracked'];
    const hobbies = ['Gaming', 'Cybersecurity', 'Web development', 'Data analysis', 'Hardware', 'Open-source contributions']
  
    const [selectedGender, setSelectedGender] = useState(null);
    const [selectedYear, setSelectedYear] = useState(null);
    const [selectedExercise, setSelectedExercise] = useState(null);
    const [selectedStudy, setSelectedStudy] = useState(null);
    const [selectedHobbies, setSelectedHobbies] = useState([]);
  
    const handleGenderSelection = (gender) => {
      setSelectedGender(gender);
    };
  
    const handleYearSelection = (year) => {
      setSelectedYear(year);
    };
  
    const handleExerciseSelection = (exercise) => {
      setSelectedExercise(exercise);
    };
  
    const handleStudySelection = (study) => {
      setSelectedStudy(study);
    };

    const handleHobbySelection = (hobby) => {
        if (selectedHobbies.includes(hobby)) {
        setSelectedHobbies(selectedHobbies.filter((h) => h !== hobby));
        } else {
        setSelectedHobbies([...selectedHobbies, hobby]);
        }
    };
    
  
    return (
      <SafeAreaView style={styles.container}>
            <View style={styles.profileContainer}>
                <Image style={styles.profileImage} source={Goose1}></Image>
                <Text style={styles.profileName}>Quackers Fishin</Text>
            </View>


            <View style={styles.filterContainer}>
                <Text style={styles.filterHeader}>Gender</Text>
                <View style={styles.filterSelections}>
                {genders.map((gender, index) => (
                    <Selection
                    key={index}
                    Info={gender}
                    selected={selectedGender === gender}
                    onPress={() => handleGenderSelection(gender)}
                    />
                ))}
                </View>
            </View>

            <View style={styles.filterContainer}>
                <Text style={styles.filterHeader}>Year</Text>
                <View style={styles.filterSelections}>
                {years.map((year, index) => (
                    <Selection
                    key={index}
                    Info={year}
                    selected={selectedYear === year}
                    onPress={() => handleYearSelection(year)}
                    />
                ))}
                </View>
            </View>

            <View style={styles.filterContainer}>
                <Text style={styles.filterHeader}>Exercise</Text>
                <View style={styles.filterSelections}>
                {exercises.map((exercise, index) => (
                    <Selection
                    key={index}
                    Info={exercise}
                    selected={selectedExercise === exercise}
                    onPress={() => handleExerciseSelection(exercise)}
                    />
                ))}
                </View>
            </View>

            <View style={styles.filterContainer}>
                <Text style={styles.filterHeader}>Study</Text>
                <View style={styles.filterSelections}>
                {studies.map((study, index) => (
                    <Selection
                    key={index}
                    Info={study}
                    selected={selectedStudy === study}
                    onPress={() => handleStudySelection(study)}
                    />
                ))}
                </View>
            </View>

            <View style={styles.filterContainer}>
                <Text style={styles.filterHeader}>Hobbies</Text>
                <View style={styles.filterSelections}>
                {hobbies.map((hobby, index) => (
                    <Selection
                    key={index}
                    Info={hobby}
                    selected={selectedHobbies.includes(hobby)}
                    onPress={() => handleHobbySelection(hobby)}
                    />
                ))}
                </View>
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


    profileContainer: {
        fontFamily: 'MS',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    profileImage: {
        fontFamily: 'MS',
        width: 120,
        height: 120,
        // aspectRatio: 1,
        borderRadius: 100,
        resizeMode: 'cover',
    },
    profileName: {
        fontFamily: 'MS',
        fontSize: 24,
        color: '#1F1F1F',
    },


    filterContainer: {
        fontFamily: 'MS',
        display: 'flex',
        flexDirection: 'column',
        gap: 6
    },
    filterHeader: {
        fontFamily: 'MS',
        color: '#1F1F1F',
        fontSize: 20
    },
    filterSelections: {
        fontFamily: 'MS',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 16
    },

    selectionButton: {
        fontFamily: 'MS',
        padding: 8,
        paddingHorizontal: 12,
        borderRadius: 15,
        backgroundColor: '#F6E1A5',
    },
    selectionButtonPressed: {
        fontFamily: 'MS',
        padding: 8,
        paddingHorizontal: 12,
        borderRadius: 15,
        backgroundColor: '#EACB76',
    },
    selectionText: {
        fontFamily: 'MS',
        fontSize: 16,
        color: '#1F1F1F',
        opacity: 0.75
    },
    selectionTextPressed: {
        fontFamily: 'MS',
        fontSize: 16,
        color: '#1F1F1F',
    },
})
