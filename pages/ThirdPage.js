

import * as React from 'react';
import { Button, View, Text, SafeAreaView } from 'react-native';

const ThirdPage = ({ navigation }) => {
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
            Terceira página
          </Text>
          <Button
            onPress={() => navigation.navigate('FirstPage')}
            title="Ir para a primeira página"
          />
          <Button
            onPress={() => navigation.navigate('SecondPage')}
            title="Ir para a segunda página"
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

export default ThirdPage;
