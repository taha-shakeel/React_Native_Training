import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const MyCustomComponent = (props) => {
  return (
    props.isNavigatorFound && <Text style={styles.greenText}>We have navigator present</Text>
  )
}

export default function HomeScreen(props) {
  useEffect(() => {
    console.log('props here', props);

    // static data action
    // props.getTodoList();

    // fetch API async action
      // props.fetchApiTodo();

    // axios async action
      props.fetchAxiosTodo();
  }, []);

  useEffect(() => {
    console.log('list of fetched todos', props.todos);
  }, [props.todos.length]);

  return (
    <View style={styles.container}>
      <Text style={styles.mainTitle}>Welcome to React Native Training Session!</Text>
      <MyCustomComponent isNavigatorFound={props.navigation} />
      <Button
        title="Find out more!"
        onPress={() =>props.navigation.navigate('About-us', { message: 'I am route param!' })}
      />
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
  mainTitle: {
    fontSize: 34,
    paddingBottom: 20,
    textAlign: 'center',
  },
  greenText: {
    fontSize: 24,
    color: 'green',
    paddingBottom: 20,
  }
});