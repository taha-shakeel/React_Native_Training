import React, {useEffect} from 'react';
import { View, Text, StyleSheet, Button, FlatList } from 'react-native';

export default function FindMoreScreen(props) {
  // useEffect(() => {
  //   console.log('props todo here', props);
  // }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>We can go on and on...! Lets look at redux</Text>
    
      { props.todos && props.todos.length > 0 && (
        <FlatList 
        data={props.todos.slice(0, 20)}
        renderItem={({item}) => <Text style={styles.item}>{item.title}</Text>}
        keyExtractor = { (item, index) => index.toString() }
      />
      )}

      <Button title="Go back Home" onPress={ () => props.navigation.popToTop() }/>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#000000',
    fontSize: 20,
  },
  item: {
    padding: 10,
    fontSize: 18,
    color: '#000000',
  },
});