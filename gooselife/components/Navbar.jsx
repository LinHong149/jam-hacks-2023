import React from 'react';
import { StyleSheet, View, Image, Text, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import home from '../assets/home.png';
import connect from '../assets/connect.png';
import goose from '../assets/goose.png';
import profile from '../assets/profile.png';

export default function Navbar() {
  const navigation = useNavigation();

  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <View style={styles.navContainer}>
      <Pressable style={styles.navButton} onPress={() => navigateToScreen('Home')}>
        <Image style={styles.navIcon} source={home} />
        <Text style={styles.navText}>Home</Text>
      </Pressable>
      <Pressable style={styles.navButton} onPress={() => navigateToScreen('FYG')}>
        <Image style={styles.navIcon} source={connect} />
        <Text style={styles.navText}>Connect</Text>
      </Pressable>
      <Pressable style={styles.navButton} onPress={() => navigateToScreen('Goose')}>
        <Image style={styles.navIcon} source={goose} />
        <Text style={styles.navText}>Goose</Text>
      </Pressable>
      <Pressable style={styles.navButton} onPress={() => navigateToScreen('Profile')}>
        <Image style={styles.navIcon} source={profile} />
        <Text style={styles.navText}>Profile</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  navContainer: {
    fontFamily: 'MS',
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#235F53',
    paddingHorizontal: 30,
    paddingVertical: 20,
    borderTopStartRadius: 15,
    borderTopEndRadius: 15,
  },
  navButton: {
    fontFamily: 'MS',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 2,
  },
  navIcon: {
    fontFamily: 'MS',
    height: 25,
    resizeMode: 'contain',
  },
  navText: {
    fontFamily: 'MS',
    fontSize: 10,
    color: '#F6F5FC',
  },
});
