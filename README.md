
# react-native-header-search ![TypeScript](https://img.shields.io/badge/language-TypeScript-blue.svg)


A customizable and responsive header search bar UI component for React Native apps, featuring advanced styling, easy integration, and dynamic event handling.


[video.webm](https://github.com/user-attachments/assets/8b6deb0e-2559-4349-b1af-8efda8f1c456)

## Installation

```sh
npm install react-native-header-search
```
```sh
yarn add react-native-header-search
```
## Usage


```js
 return (
    <View>
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
    </View>
  );
```


[![Caffe](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/tandatne)