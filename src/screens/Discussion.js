import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform,
  TouchableWithoutFeedback,
} from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function Discussion({route}) {
  const navigator = useNavigation();
  const {username} = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerCover}>
          <TouchableWithoutFeedback onPress={navigator.goBack}>
            <EvilIcons name="arrow-left" color="#000" size={30} />
          </TouchableWithoutFeedback>
          <Text style={styles.username}>
            {username[0].toUpperCase() + username.slice(1)}
          </Text>
        </View>
        <View style={styles.headerContent}>
          <FontAwesome name="phone" color="#030200" size={30} />
          <FontAwesome name="video-camera" color="#030200" size={30} />
          <MaterialCommunityIcons
            name="dots-vertical"
            color="#030200"
            size={30}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === 'android' ? 0 : 54,
    flex: 1,
  },
  header: {
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerCover: {
    flexDirection: 'row',
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 120,
  },
  username: {
    fontWeight: '700',
    fontSize: 20,
    marginLeft: 16,
    color: '#030200',
  },
});
