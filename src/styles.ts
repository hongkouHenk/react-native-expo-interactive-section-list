import { StyleSheet, ViewStyle, TextStyle, ImageStyle } from 'react-native';

interface TabbarViewStyles {
  container: ViewStyle;
  contentContainer: ViewStyle;
  iconView: ViewStyle;
  icon: ImageStyle;
}

interface TabbarItemStyles {
  container: ViewStyle;
  innerContainer: ViewStyle;
  itemTitle: TextStyle;
}

interface ContentStyles {
  contentContainer: ViewStyle;
  sectionHeader: TextStyle;
  border: ViewStyle;
}

export const tabbarViewStyles = StyleSheet.create<TabbarViewStyles>({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {},
  iconView: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    height: 40,
  },
  icon: {
    width: 26,
    height: 26,
  },
});

export const tabbarItemStyles = StyleSheet.create<TabbarItemStyles>({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
    borderRadius: 8,
  },
  itemTitle: {
    fontSize: 18,
  },
});

export const contentViewStyles = StyleSheet.create<ContentStyles>({
  contentContainer: {
    backgroundColor: 'white',
  },
  sectionHeader: {
    flex: 1,
    height: 40,
    backgroundColor: 'white',
    padding: 8,
    fontSize: 20,
    fontWeight: '500',
  },
  border: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: 'gray',
  },
});
