import { StyleSheet, ViewStyle, TextStyle, ImageStyle } from 'react-native';

interface Styles {
  container: ViewStyle;
  infoView: ViewStyle;
  image: ImageStyle;
  title: TextStyle;
  description: TextStyle;
  footerView: ViewStyle;
  footerLabel: TextStyle;
}

const styles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    height: 100,
    backgroundColor: '#00000010',
  },
  infoView: {
    flex: 1,
    paddingRight: 8,
    // justifyContent: 'space-between',
    height: 84,
  },
  image: {
    width: 92,
    height: 92,
  },
  title: {
    flex: 2,
    fontSize: 18,
    fontWeight: '500',
  },
  description: {
    flex: 4,
    fontSize: 13,
  },
  footerView: {
    flex: 1,
    flexDirection: 'row',
    width: '50%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  footerLabel: {
    fontSize: 12,
  },
});

export default styles;
