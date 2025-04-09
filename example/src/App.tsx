import { View, Text, SafeAreaView } from 'react-native';
import { HeaderSearch } from 'react-native-header-search';

const App = () => {
  return (
    <SafeAreaView>
      <HeaderSearch
        placeholderTextColor="#999"
        placeHolder="Search..."
        styleHeader={{ backgroundColor: '#6c0af5' }}
        title="Home Screen"
        IconClose={
          <View>
            <Text>Close</Text>
          </View>
        }
        onChangeText={(text: string) => {
          console.log(text);
        }}
        leftIcon={
          <View>
            <Text>left Icon</Text>
          </View>
        }
        onpressLeft={() => {
          console.log('left icon pressed');
        }}
      />
    </SafeAreaView>
  );
};

export default App;
