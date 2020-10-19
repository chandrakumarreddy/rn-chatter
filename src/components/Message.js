import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';

function randomTime() {
  const hrs = Math.round(Math.random() * 24);
  const mins = Math.round(Math.random() * 60);
  const hrsFormat = hrs < 10 ? '0' : '';
  const minFormat = mins < 10 ? '0' : '';
  const amPm = hrs < 12 ? 'AM' : 'PM';
  return String(hrsFormat + hrs + ':' + minFormat + mins + ' ' + amPm);
}

export default function Message({username, uri, count}) {
  const navigator = useNavigation();
  return (
    <TouchableWithoutFeedback
      onPress={() => navigator.navigate('Discussion', {username})}>
      <View style={styles.container}>
        {count > 0 ? (
          <LinearGradient
            colors={['#ccc', '#ccc', '#ccc']}
            style={styles.gradientStyle}>
            <Text style={styles.count}>{count}</Text>
          </LinearGradient>
        ) : null}
        <View style={styles.cover}>
          <Image source={{uri}} style={styles.avatar} />
          <View style={styles.content}>
            <Text style={styles.username}>{username}</Text>
            <Text style={styles.text}>Hello, How are u </Text>
          </View>
        </View>
        <Text style={styles.duration}>{randomTime()}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 16,
    justifyContent: 'space-between',
  },
  gradientStyle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: 16,
    bottom: 8,
  },
  cover: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  content: {
    marginLeft: 16,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  username: {
    color: '#000119',
    fontWeight: '500',
    fontSize: 16,
  },
  text: {
    color: '#b6b6b6',
    fontSize: 11,
    marginTop: 4,
  },
  duration: {
    color: '#000119',
    fontSize: 12,
  },
});
