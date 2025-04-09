
# react-native-header-search ![TypeScript](https://img.shields.io/badge/language-TypeScript-blue.svg)


A customizable and responsive header search bar UI component for React Native apps, featuring advanced styling, easy integration, and dynamic event handling.


[video.webm](https://github.com/user-attachments/assets/8b6deb0e-2559-4349-b1af-8efda8f1c456)

[video.webm](https://github.com/user-attachments/assets/17afb888-2629-49c7-9c90-67649255695a)



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
## **Props**

| Prop                | Type                                              | Description                                                                                           | Default Value              |
| ------------------- | ------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | -------------------------- |
| **leftIcon**        | any                                               | Icon displayed on the left side of the header.                                                      |                 |
| **IconClose**       | any                                               | Icon used to close the search mode. If provided, it replaces the default "X" text.                   |                |
| **styleInput**      | ViewStyle                                         | Style for the container wrapping the TextInput.                                                      |                 |
| **styleHeader**     | Animated.AnimatedProps<ViewStyle>                 | Style for the header container.                                                                      |                 |
| **inputStyle**      | TextStyle                                         | Style for the TextInput component.                                                                   |                 |
| **onpressLeft**     | Function                                          | Callback function called when the left icon is pressed.                                              |                 |
| **placeHolder**     | string                                            | Placeholder text for the TextInput. Defaults to "Search...".                                          | "Search..."              |
| **placeholderTextColor** | string                                      | Color of the placeholder text in the TextInput.                                                      | "rgba(97,97,97,0.8)"       |
| **title**           | string                                            | Title displayed on the header when not in search mode.                                               |                 |
| **value**           | string                                            | Value of the TextInput (i.e., the search query).                                                     |                 |
| **onLayout**        | (event: LayoutChangeEvent) => void                | Callback function triggered when the header's layout changes (useful for layout calculations).         |                 |
| **onChangeText**    | (text: string) => void                            | Callback function called when the TextInput value changes.                                           |                 |
| **onCloseSearch**   | () => void                                        | Callback function called when the user closes the search mode.                                       |                 |


[![Caffe](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/tandatne)