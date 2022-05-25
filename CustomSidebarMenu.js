
import React from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  Text,
  Linking,
} from 'react-native';

import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

const CustomSidebarMenu = (props) => {
  const BASE_PATH =
    'https://mail.google.com/mail/u/0?ui=2&ik=606bdbf4c8&attid=0.1&permmsgid=msg-f:1733164125349477130&th=180d6f96dce7fb0a&view=fimg&fur=ip&sz=s0-l75-ft&attbid=ANGjdJ_J2B22g8aRrNJUQe3miwNX9RnP8tRaMQrpm9x_6F1mwSmu59k3CaEybzPbwBRkAqq2az_5hZYwHTo8tQOUwKEecEfzfC16Zgin06GM_rhgqGYyLNpKOWUYrtI&disp=emb&realattid=ii_l3bikrrn0';
  const proileImage = 'react_logo.png';

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {}
      <Image
        source={{ uri: BASE_PATH + proileImage }}
        style={styles.sideMenuProfileIcon}
      />
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
       
        <View style={styles.customItem}>
          
        </View>
      </DrawerContentScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sideMenuProfileIcon: {
    resizeMode: 'center',
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    alignSelf: 'center',
  },
  iconStyle: {
    width: 15,
    height: 15,
    marginHorizontal: 5,
  },
  customItem: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default CustomSidebarMenu;
