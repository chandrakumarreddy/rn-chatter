import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

function randomTime() {
  const hrs = Math.round(Math.random() * 24);
  const mins = Math.round(Math.random() * 60);
  const hrsFormat = hrs < 10 ? '0' : '';
  const minFormat = hrs < 10 ? '0' : '';
  const amPm = hrs < 12 ? 'AM' : 'PM';
  return String(hrsFormat + hrs + ':' + minFormat + mins + ' ' + amPm);
}

export default function Message({username, uri, count}) {
  return (
    <View style={styles.container}>
      <Image source={{uri}} style={styles.avatar} />
      <View>
        <Text style={styles.userName}>{username}</Text>
        <Text style={styles.text}>Hello, How are u </Text>
      </View>
      <Text style={styles.duration}>{randomTime()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  username: {
    color: '#000119',
  },
});
