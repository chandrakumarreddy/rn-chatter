import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

export default function Profile({username, uri}) {
  return (
    <View style={styles.container}>
      <Image source={{uri: uri}} style={styles.avatar} />
      <Text style={styles.username}>{username}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginRight: 16,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  username: {
    marginTop: 8,
    color: '#fff',
    fontSize: 11,
  },
});
