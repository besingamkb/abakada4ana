import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

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
  const [backgroundColor, setBackgroundColor] = useState(['#FF90BC', '#FFC0D9', '#F9F9E0', '#8ACDD7']); // Initial gradient colors

  const colorArrays = [
    ['#FF90BC', '#FFC0D9', '#F9F9E0', '#8ACDD7'],
    ['#C4DFDF', '#D2E9E9', '#E3F4F4', '#F8F6F4'],
    ['#A1CCD1', '#F4F2DE', '#E9B384', '#7C9D96'],
    ['#C2DEDC', '#ECE5C7', '#CDC2AE', '#116A7B'],
    ['#FFB3B3', '#FFDBA4', '#FFE9AE', '#C1EFFF'],
    ['#A7D2CB', '#F2D388', '#C98474', '#874C62'],
    ['#FFBE98', '#FEECE2', '#F7DED0', '#E2BFB3'],
    ['#B5C0D0', '#CCD3CA', '#F5E8DD', '#EED3D9'],
    ['#8E7AB5', '#B784B7', '#E493B3', '#EEA5A6'],
    ['#D7E4C0', '#C6DCBA', '#BBC3A4', '#B3A398'],
    ['#B4B4B8', '#C7C8CC', '#E3E1D9', '#F2EFE5'],
    ['#E1F0DA', '#D4E7C5', '#BFD8AF', '#99BC85'],
    ['#F5EEE6', '#FFF8E3', '#F3D7CA', '#E6A4B4'],
    ['#F9EFDB', '#EBD9B4', '#9DBC98', '#638889'],
    // // Warm tones
    // ['#f09433', '#e32f26', '#c62828', '#ff9900', '#fc7f5f'],
    // ['#f77979', '#f08080', '#d7ccc8', '#ffcc99', '#ffebcd'],
    // ['#f2ca8a', '#f8ca64', '#fba746', '#f99738', '#f57c2a'],

    // // Cool tones
    // ['#22b24c', '#4285f4', '#007bff', '#53777a', '#37474f'],
    // ['#9fa8da', '#7386d5', '#4755ac', '#34495e', '#293742'],
    // ['#96a6a6', '#7d8b8b', '#637070', '#4a5454', '#313737'],

    // // Vibrant tones
    // ['#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#007fff'],
    // ['#f0f8ff', '#c0c0c0', '#808080', '#404040', '#000000'],
    // ['#c02942', '#e74c3c', '#ff7043', '#f39c12', '#f9c74f'],

    // Seasonal
    // ['#43a047', '#66b266', '#85c485', '#a7d6a7', '#c9e7ca'], // Spring
    // ['#f77979', '#f08080', '#d7ccc8', '#ffcc99', '#ffebcd'], // Summer
    // ['#f2ca8a', '#f8ca64', '#fba746', '#f99738', '#f57c2a'], // Autumn
    // ['#9fa8da', '#7386d5', '#4755ac', '#34495e', '#293742'], // Winter
  ];

  const randomColor = () => {
    const randomIndex = Math.floor(Math.random() * colorArrays.length);
    return colorArrays[randomIndex];
  };

  const handleTouch = () => {
    setBackgroundColor(randomColor());
  };

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
    setBackgroundColor(randomColor());
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
    <LinearGradient colors={backgroundColor} style={styles.container}>
      <TouchableOpacity onPress={changeLetter}>
        <Text style={[styles.textStyle, {
          // fontSize: Math.min(deviceWidth, deviceHeight) * 0.8, // Adjust based on content size
          fontSize: adjustFontSize(currentLetter.length),
          lineHeight: Math.min(deviceWidth, deviceHeight) * 0.5 * 1.2, // Optional line height adjustment
        }]}>{currentLetter.toUpperCase()}</Text>
        <Text style={[styles.textStyle, {
          // fontSize: Math.min(deviceWidth, deviceHeight) * 0.8, // Adjust based on content size
          fontSize: adjustFontSize(currentLetter.length, 100),
          lineHeight: Math.min(deviceWidth, deviceHeight) * 0.3 * 1.2, // Optional line height adjustment
          color: 'white'
        }]}>{currentLetter.toLowerCase()}</Text>
        <StatusBar style="auto" />
      </TouchableOpacity>
    </LinearGradient>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  touchableOpacity: {
    backgroundColor: 'transparent',
    padding: 20,
    borderRadius: 10,
  },
  textStyle: {
    // fontFamily: ' sans-serif', // Add a common sans-serif font for wider compatibility
    fontWeight: 'bold', // Use bold weight for impact
    textAlign: 'center', // Center the text
    color: 'black', // Use black for better legibility
  },
});
