import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/dist/FontAwesome'

const AddItem = ({ addItem }) => {
  const [text, setText] = useState('')

  const onChange = textValue => setText(textValue)

  return (
    <View>
      <View style={styles.inputwrapper}>
        <TextInput placeholder='Add Item...' style={styles.input} onChangeText={onChange} value={text} />
      </View>
      <TouchableOpacity style={styles.btn} onPress={() => { addItem(text); setText('') }}>
        <Text style={styles.btnText}><Icon name='plus' size={20} /> Add Item</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  inputwrapper: {
    backgroundColor: 'white',
    borderColor: 'lightgray',
    borderWidth: 1,
    margin: 5,
  },
  input: {
    height: 60,
    padding: 8,
    fontSize: 16,
  },
  btn: {
    backgroundColor: 'mediumturquoise',
    padding: 9,
    margin: 5,
  },
  btnText: {
    color: 'teal',
    fontSize: 20,
    textAlign: 'center',
  }
})

export default AddItem
