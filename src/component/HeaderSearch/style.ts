import { Platform, StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    width: '100%',
    // backgroundColor: '#fff',
    paddingHorizontal: 8,
  },
  containerTitle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerInput: {
    flex: 1,
    justifyContent: 'center',
    marginVertical: 4,
    backgroundColor: '#fff',
    height: 52,
  },
  containerLeftIcon: {
    flex: 1 / 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtTitle: {
    fontWeight: 'bold',
    color: '#FFFF',
  },
  input: {
    flex: 1,
    height: 40,
  },
  rootInput: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: Platform.OS === 'ios' ? 12 : 16,
    borderBottomWidth: 0,
    color: '#000',
  },
});

export default styles;
