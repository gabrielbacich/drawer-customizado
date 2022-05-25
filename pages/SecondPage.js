

import * as React from 'react';
import { Button, View, Text, SafeAreaView } from 'react-native';

const SecondPage = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: 16 }}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 25,
              textAlign: 'center',
              marginBottom: 16,
            }}>
            Segunda página
          </Text>
          <Button
            title="Ir para a primeira página"
            onPress={() => navigation.navigate('FirstPage')}
          />
          <Button
            title="Ir para a terceira página"
            onPress={() => navigation.navigate('ThirdPage')}
          />
        </View>
        <Text style={{ fontSize: 18, textAlign: 'center', color: 'grey' }}>

        </Text>
        <Text style={{ fontSize: 16, textAlign: 'center', color: 'grey' }}>

        </Text>
      </View>
    </SafeAreaView>
  );
};

export default SecondPage;
