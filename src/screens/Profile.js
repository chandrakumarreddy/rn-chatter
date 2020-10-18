import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';

const URL = `https://api.github.com/users`;

export default function Profile() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const res = await (await fetch(URL)).json();
      setData(res);
    };
    getData();
  }, []);
  console.log(data);
  return (
    <View>
      <Text>Profile</Text>
    </View>
  );
}
