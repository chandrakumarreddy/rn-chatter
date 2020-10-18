import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

import Profile from '../components/Profile';
import Message from '../components/Message';
import {weeks} from '../utils/dates';

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
  const renderProfiles = () =>
    data.length > 0 ? (
      data.map(({id, login, avatar_url}) => (
        <Profile key={id} username={login} uri={avatar_url} />
      ))
    ) : (
      <SkeletonPlaceholder>
        {[...Array(7).keys()].map((_key) => (
          <SkeletonPlaceholder.Item
            key={String(_key)}
            width={60}
            height={60}
            borderRadius={50}
            marginRight={16}
            marginBottom={8}
          />
        ))}
      </SkeletonPlaceholder>
    );
  return (
    <LinearGradient
      colors={['#f26a50', '#f20042', '#f20045']}
      style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Chat</Text>
        <MaterialIcons name="add" color="#FFF" size={30} />
      </View>
      <View style={styles.profileContainer}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          bounces={false}
          style={styles.profiles}>
          {renderProfiles()}
        </ScrollView>
      </View>
      <View style={styles.messagesContainer}>
        <View style={styles.todayMessages}>
          <Text style={styles.today}>{weeks[new Date().getDay()]}</Text>
          <Entypo name="dots-three-horizontal" color="#000119" size={30} />
        </View>
        <View style={styles.messages}>
          <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
            {data.length > 0
              ? data.map((item) => (
                  <Message
                    key={item.id}
                    username={item.login}
                    uri={item.avatar_url}
                    count={Math.ceil(Math.random() * 3)}
                  />
                ))
              : [...Array(10).keys()].map((_key) => (
                  <View key={String(_key)} style={styles.skeletonMessages}>
                    <SkeletonPlaceholder>
                      <SkeletonPlaceholder.Item
                        flexDirection="row"
                        justifyContent="space-between"
                        alignItems="center">
                        <SkeletonPlaceholder.Item
                          flexDirection="row"
                          alignItems="center">
                          <SkeletonPlaceholder.Item
                            width={60}
                            height={60}
                            borderRadius={50}
                          />
                          <SkeletonPlaceholder.Item marginLeft={20}>
                            <SkeletonPlaceholder.Item
                              width={200}
                              height={16}
                              borderRadius={4}
                            />
                            <SkeletonPlaceholder.Item
                              marginTop={8}
                              width={160}
                              height={12}
                              borderRadius={4}
                            />
                          </SkeletonPlaceholder.Item>
                        </SkeletonPlaceholder.Item>
                        <SkeletonPlaceholder.Item width={60} height={10} />
                      </SkeletonPlaceholder.Item>
                    </SkeletonPlaceholder>
                  </View>
                ))}
          </ScrollView>
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
  },
  header: {
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    flex: 1,
    color: '#fff',
    fontSize: 24,
  },
  profileContainer: {
    paddingHorizontal: 16,
  },
  profiles: {
    marginTop: 18,
    marginRight: -16,
  },
  messagesContainer: {
    backgroundColor: '#FFF',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    marginTop: 25,
    paddingVertical: 16,
    flex: 1,
  },
  todayMessages: {
    paddingHorizontal: 16,
    paddingBottom: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  today: {
    color: '#000119',
    flex: 1,
    fontSize: 20,
  },
  messages: {
    paddingHorizontal: 16,
  },
  skeletonMessages: {
    marginTop: 16,
  },
});
