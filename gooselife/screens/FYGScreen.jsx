import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  Image,
  Text,
  TextInput,
  Pressable,
  ScrollView
} from 'react-native';
import Goose1 from '../assets/Goose1.png';
import Goose2 from '../assets/Goose2.png';
import Goose3 from '../assets/Goose3.png';
import Goose4 from '../assets/Goose4.png';
import filter from '../assets/filter.png';

const Selection = ({ Info, selected, onPress }) => {
  const buttonStyle = selected ? styles.selectionButtonPressed : styles.selectionButton;
  const textStyle = selected ? styles.selectionTextPressed : styles.selectionText;

  return (
    <Pressable style={buttonStyle} onPress={onPress}>
      <Text style={textStyle}>{Info}</Text>
    </Pressable>
  );
};

const Goose = ({ Name, Level, Program, Picture }) => {
  return (
    <View style={styles.gooseContainer}>
      <Image style={styles.gooseProfile} source={Picture}></Image>
      <View style={styles.gooseTexts}>
        <Text style={styles.gooseName}>{Name}</Text>
        <Text style={styles.gooseLevel}>{Level}</Text>
      </View>
      <Text style={styles.gooseProgram}>{Program}</Text>
    </View>
  );
};

export default function FYGScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Filter Options
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

  const defaultData = [
    { Name: 'Ri Hong', Level: 'Lv. 32', Program: 'CS', Picture: Goose1 },
    { Name: 'Ri Hong', Level: 'Lv. 32', Program: 'CS', Picture: Goose2 },
    { Name: 'Ri Hong', Level: 'Lv. 32', Program: 'CS', Picture: Goose3 },
    { Name: 'Ri Hong', Level: 'Lv. 32', Program: 'CS', Picture: Goose4 },
  ];
  const [filteredResults, setFilteredResults] = useState([]);

  useEffect(() => {
    setFilteredResults(defaultData);
  }, []);

  const handleSearch = () => {
    const filtered = defaultData.filter((goose) =>
      goose.Name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setFilteredResults(filtered);
  };

  return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.header}>Connect with Geeses</Text>
        <View style={styles.inputContainer}>
            <TextInput
            style={styles.inputSearch}
            placeholder="Find a goose"
            onChangeText={(text) => setSearchQuery(text)}
            onSubmitEditing={handleSearch}
            value={searchQuery}
            />
            <Pressable style={styles.inputFilter} onPress={() => setIsFilterOpen(!isFilterOpen)}>
            <Image style={styles.inputFilterIcon} source={filter} />
            </Pressable>
        </View>
        {isFilterOpen && (
            <View style={styles.filterContainerAll}>
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
            </View>
        )}
        <ScrollView>
            <View style={styles.resultsContainer}>
                <Text style={styles.resultsHeader}>Search Results</Text>
                {filteredResults.map((goose, index) => (
                <Goose
                    key={index}
                    Name={goose.Name}
                    Level={goose.Level}
                    Program={goose.Program}
                    Picture={goose.Picture}
                />
                ))}
            </View>
        </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  /* Your existing styles... */
  container: {
    backgroundColor: '#F6F5FC',
    width: '100%',
    height: '100%',
    paddingHorizontal: 30,
    paddingTop: 50,
    paddingBottom: 55,
    display: 'flex',
    flexDirection: 'column',
    gap: 24,
  },

  header: {
    color: '#1F1F1F',
    fontSize: 20,
  },

  inputContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    gap: 16,
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
    height: 48,
  },
  inputFilterIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },

  resultsContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
  },
  resultsHeader: {
    color: '#1F1F1F',
    fontSize: 16,
  },

  gooseContainer: {
    backgroundColor: '#F6E1A5',
    borderRadius: 15,
    padding: 16,
    display: 'flex',
    flexDirection: 'row',
    gap: 12,
    justifyContent: 'space-between',
  },

  gooseProfile: {
    width: 52,
    aspectRatio: 1,
    borderRadius: 100,
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
    borderRadius: 100,
  },

  filterContainerAll:{
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    padding: 12,
    gap: 12,
    borderWidth: 2,
    borderRadius: 15,
    borderColor: '#235F53'
  },
  filterContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 6,
  },
  filterHeader: {
    color: '#1F1F1F',
    fontSize: 20,
  },
  filterSelections: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
  },

  selectionButton: {
    padding: 8,
    paddingHorizontal: 12,
    borderRadius: 15,
    backgroundColor: '#F6E1A5',
  },
  selectionButtonPressed: {
    padding: 8,
    paddingHorizontal: 12,
    borderRadius: 15,
    backgroundColor: '#EACB76',
  },
  selectionText: {
    fontSize: 16,
    color: '#1F1F1F',
    opacity: 0.75,
  },
  selectionTextPressed: {
    fontSize: 16,
    color: '#1F1F1F',
  },
});
