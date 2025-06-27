// edit-task/index.jsx
import React from 'react';
import { View, Text } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

export default function EditTask() {
  const { id } = useLocalSearchParams();

  return (
    <View>
      <Text>Precisamos editar a tarefa com id {id}!</Text>
    </View>
  );
}