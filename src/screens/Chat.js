import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const URL = 'https://api.github.com/users';

export default function Chat() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const res = await (await fetch(URL)).json();
      setData(res);
    };
    getData();
  }, []);
  return (
    <LinearGradient
      colors={['#f26a50', '#f20042', '#f20045']}
      style={styles.container}>
      <Text>Chat</Text>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
});
