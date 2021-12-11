import React, { useState } from 'react'
import { View, StyleSheet, FlatList, Alert } from 'react-native'
import Header from './components/Header'
import uuid from 'uuid'
import ListItem from './components/ListItem'
import AddItem from './components/AddItem'

const App = () => {
  const [items, setItems] = useState([
    { id: uuid(), text: 'Milk' },
    { id: uuid(), text: 'Eggs' },
    { id: uuid(), text: 'Bread' },
    { id: uuid(), text: 'Juice' },
  ])

  const handleDeleteItem = id => {
    setItems(prevItems => prevItems.filter(item => item.id !== id))
  }

  const addItem = text => {
    if (!text) {
      Alert.alert('Error', 'Please enter an item', [{ text: 'OK' }], { cancelable: true })
    } else {
      setItems(prevItems => {
        return [{ id: uuid(), text }, ...prevItems]
      })
    }
  }

  return (
    <View style={styles.container}>
      <Header />
      <FlatList data={items} renderItem={({ item }) => <ListItem item={item} deleteItem={handleDeleteItem} />} />
      <AddItem addItem={addItem} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default App
