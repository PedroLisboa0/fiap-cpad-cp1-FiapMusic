import { StyleSheet, Platform } from 'react-native';

export const COLORS = {
  primary: '#E83D84',
  background: '#FFFFFF',
  text: '#000000',
  tabBarBg: '#FFFFFF',
  inactive: '#8E8E93',
};

export const tabOptions = {
  tabBarActiveTintColor: COLORS.primary,
  tabBarInactiveTintColor: COLORS.inactive,
  headerStyle: {
    backgroundColor: COLORS.background,
    elevation: 0, // Android: Remove sombra
    shadowOpacity: 0, // iOS: Remove sombra
  },
  headerTitleStyle: {
    fontWeight: '900',
    fontSize: 22,
    letterSpacing: -0.5,
    textTransform: 'uppercase',
  },
  headerShadowVisible: false,
  tabBarStyle: {
    backgroundColor: COLORS.tabBarBg,
    borderTopWidth: 0,
    height: 65,
    paddingBottom: 10,
    paddingTop: 5,
    // Sombra customizada radical
    ...Platform.select({
      ios: {
        shadowColor: COLORS.primary,
        shadowOffset: { width: 0, height: -4 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
      },
      android: {
        elevation: 8,
      },
    }),
  },
};

export const styles = StyleSheet.create({
  headerIcon: {
    marginRight: 20,
    // Efeito de destaque no ícone
    transform: [{ scale: 1.1 }],
  },
  tabIconFocused: {
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
  }
});