import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { View } from 'react-native';
import { tabOptions, styles, COLORS } from './Css/layoutCss';

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        ...tabOptions,
        headerRight: () => (
          <Ionicons
            name="settings-outline"
            size={24}
            style={styles.headerIcon}
            color={COLORS.text}
          />
        ),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <View style={focused ? styles.tabIconFocused : null}>
              <Ionicons
                name={focused ? "home" : "home-outline"}
                size={focused ? 28 : 24}
                color={color}
              />
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="perfil"
        options={{
          title: 'Loja',
          tabBarIcon: ({ color, focused }) => (
            <View style={focused ? styles.tabIconFocused : null}>
              <Ionicons
                name={focused ? "person" : "person-outline"}
                size={focused ? 28 : 24}
                color={color}
              />
            </View>
          ),
        }}
      />
    </Tabs>
  );
}