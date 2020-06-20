import React, { useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';

const listData = [
  { key: 'props in routes' },
  { key: 'passing data between screens (props)' },
  { key: 'Redux state management' },
  { key: 'https calls using fetch' },
  { key: 'Axios' },
]

export default function AboutUsScreen(props) {
  useEffect(() => {
    console.log('props here', props);
  }, [])
  return (
    <View style={styles.container}>
      <Text style={styles.mainTitle}>This is a tutorial about:</Text>
      <FlatList 
        data={listData}
        renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
      />
      <Button style={styles.cta} title="Find out more!" onPress={ () => props.navigation.navigate('More') }/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingVertical: 40,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  mainTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingVertical: 20,
  },
  cta: {
    width: 100,
    paddingBottom: 50,
  },
});