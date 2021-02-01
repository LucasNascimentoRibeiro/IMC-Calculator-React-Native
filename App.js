import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';

export default function App() {

  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');

  function HandleSubmit() {

    const hgt = height / 100;
    const imc = weight / (hgt * hgt);
    
    if(imc < 18.6){
      alert('Under weight: ' + imc.toFixed(2));
    }else if(imc >= 18.6 && imc <24.9){
      alert('Average weight: ' + imc.toFixed(2))
    }else if(imc >= 24.9 && imc < 34.9){
      alert('Slightly overweight: ' + imc.toFixed(2));
    }else {
      alert('Overweight: ' + imc.toFixed(2));
    }

  }

  return(

    <View style={styles.container}>
      <Text style={styles.title}>IMC Calculator</Text>

      <TextInput
        style={styles.input}
        value={weight}
        onChangeText={(weight) => setWeight(weight)}
        placeholder='Weight (kg)'
        placeholderTextColor={'#fff'}
        keyboardType='numeric'
      />

      <TextInput
        style={styles.input}
        value={height}
        onChangeText={(height) => setHeight(height)}
        placeholder='height (cm)'
        placeholderTextColor={'#fff'}
        keyboardType='numeric'
      />

      <TouchableOpacity 
        style={styles.button}
        onPress={HandleSubmit}
      >
        <Text style={styles.buttonText}>Calculate</Text>
      </TouchableOpacity>

    </View>

  );

}

const styles = StyleSheet.create({

  container: {
    flex: 1,
  },

  title: {
    fontSize: 30,
    color: '#000',
    textAlign: 'center',
    marginTop: 30
  },

  input: {
    backgroundColor: '#121212',
    margin: 15,
    borderRadius: 10,
    padding: 10,
    color: '#fff',
    fontSize: 20
  },

  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#121212',
    marginHorizontal: 15,
    padding: 10,
    borderRadius: 15
  },

  buttonText: {
    color: '#fff',
    fontSize: 20
  }


});