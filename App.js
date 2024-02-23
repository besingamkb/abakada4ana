import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, Dimensions } from 'react-native';

const consonants = [
  "Ba", "Be", "Bi", "Bo", "Bu",
  "Da", "De", "Di", "Do", "Du",
  "Ga", "Ge", "Gi", "Go", "Gu",
  "Ha", "He", "Hi", "Ho", "Hu",
  "Ka", "Ke", "Ki", "Ko", "Ku",
  "La", "Le", "Li", "Lo", "Lu",
  "Ma", "Me", "Mi", "Mo", "Mu",
  "Na", "Ne", "Ni", "No", "Nu",
  "Nga", "Nge", "Ngi", "Ngo", "Ngu",
  "Pa", "Pe", "Pi", "Po", "Pu",
  "Ra", "Re", "Ri", "Ro", "Ru",
  "Sa", "Se", "Si", "So", "Su",
  "Ta", "Te", "Ti", "To", "Tu",
  "Wa", "We", "Wi", "Wo", "Wu",
  "Ya", "Ye", "Yi", "Yo", "Yu"
];

export default function App() {
  const getRandomLetter = (letterGroup) => {
    const randomIndex = Math.floor(Math.random() * letterGroup.length);
    return letterGroup[randomIndex];
  };

  const [currentLetter, setCurrentLetter] = useState(
    getRandomLetter(consonants)
  );

  const changeLetter = () => {
    const randomConsonant = getRandomLetter(consonants);
    setCurrentLetter(randomConsonant);
  };

  useEffect(() => {
    if (!currentLetter) {
      setCurrentLetter(getRandomLetter(consonants));
    }
  }, []);

  const deviceWidth = Dimensions.get('window').width;
  const deviceHeight = Dimensions.get('window').height;

  const adjustFontSize = (numChars, baseFontSize = 200) => {
    // Set a base font size and a threshold for adjustment
    const charsPerLine = 2; // Adjust based on your desired width
  
    // Calculate a new font size based on the number of characters and threshold
    return Math.min(baseFontSize, numChars / charsPerLine * baseFontSize);
  };

  return (
    <TouchableOpacity style={styles.container} onPress={changeLetter}>
      <Text style={[styles.textStyle, {
        // fontSize: Math.min(deviceWidth, deviceHeight) * 0.8, // Adjust based on content size
        fontSize: adjustFontSize(currentLetter.length),
        lineHeight: Math.min(deviceWidth, deviceHeight) * 0.5 * 1.2, // Optional line height adjustment
      }]}>{currentLetter.toUpperCase()}</Text>
      <Text style={[styles.textStyle, {
        // fontSize: Math.min(deviceWidth, deviceHeight) * 0.8, // Adjust based on content size
        fontSize: adjustFontSize(currentLetter.length, 100),
        lineHeight: Math.min(deviceWidth, deviceHeight) * 0.3 * 1.2, // Optional line height adjustment
        color: 'lavenderblush'
      }]}>{currentLetter.toLowerCase()}</Text>
      <StatusBar style="auto" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    // fontFamily: ' sans-serif', // Add a common sans-serif font for wider compatibility
    fontWeight: 'bold', // Use bold weight for impact
    textAlign: 'center', // Center the text
    color: 'black', // Use black for better legibility
  },
});
