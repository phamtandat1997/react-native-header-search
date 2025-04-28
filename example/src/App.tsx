import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import { HeaderSearch } from 'react-native-header-search';

const App = () => {
  return (
    <SafeAreaView>
      <HeaderSearch
        placeholderTextColor="#999"
        placeHolder="Search..."
        styleHeader={styles.header}
        title="Home Screen"
        IconClose={
          <View>
            <Text>Icon Close</Text>
          </View>
        }
        IconSearch={
          <View>
            <Text>Icon Search</Text>
          </View>
        }
        onChangeText={(text: string) => {
          console.log(text);
        }}
        leftIcon={
          <View>
            <Text>Icon Left </Text>
          </View>
        }
        onpressLeft={() => {
          console.log('left icon pressed');
        }}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: '#6c0af5',
  },
});
export default App;
