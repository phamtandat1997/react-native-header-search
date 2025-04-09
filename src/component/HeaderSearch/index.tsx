/* eslint-disable react-native/no-inline-styles */
import React, { type FC, useState } from 'react';
import {
  View,
  TouchableOpacity,
  Animated,
  Text,
  TextInput,
  type ViewStyle,
  type TextStyle,
  type LayoutChangeEvent,
  Dimensions,
} from 'react-native';
import styles from './style';
// import { CloseCircle, EmojiHappy } from 'iconsax-react-native';

// const TouchableOpacityAnimated =
//   Animated.createAnimatedComponent(TouchableOpacity);
export interface HeaderProps {
  leftIcon?: any;
  IconClose?: any;
  IconSearch?: any;
  styleInput?: ViewStyle;
  styleHeader?: Animated.AnimatedProps<ViewStyle>;
  inputStyle?: TextStyle;
  onpressLeft?: Function;
  placeHolder?: string;
  placeholderTextColor?: string;
  title?: string;
  value?: string;
  onLayout?: (event: LayoutChangeEvent) => void;
  onChangeText?: (text: string) => void;
  onCloseSearch?: () => void;
}

const openSearch = new Animated.Value(0);
const HeaderSearch: FC<HeaderProps> = ({
  leftIcon,
  IconClose,
  IconSearch,
  styleHeader,
  onpressLeft,
  onLayout,
  title,
  placeHolder,
  placeholderTextColor,
  onChangeText,
  inputStyle,
  value,
  onCloseSearch,
}) => {
  const [isSearch, setIsSearch] = useState<boolean>(false);
  const handleOpenSearch = (): void => {
    setIsSearch(true);
    openSearch.setValue(0);
    Animated.timing(openSearch, {
      toValue: 1,
      duration: 400,
      useNativeDriver: false,
    }).start();
  };
  const { width: w, height: h } = Dimensions.get('window');
  const width = w < h ? w : h;
  const scaleX = openSearch.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  return (
    <React.Fragment>
      <Animated.View onLayout={onLayout} style={[styles.root, styleHeader]}>
        <View style={styles.containerLeftIcon}>
          {leftIcon && (
            <TouchableOpacity
              style={{ alignItems: 'center' }}
              onPress={() => onpressLeft?.()}
            >
              {leftIcon}
            </TouchableOpacity>
          )}
        </View>

        {!isSearch && title && (
          <View style={styles.containerTitle}>
            <Text style={styles.txtTitle}>{title}</Text>
          </View>
        )}
        {isSearch && (
          <Animated.View
            style={[
              styles.containerInput,
              {
                transform: [
                  { translateX: width / 5 },
                  { scaleX },
                  { translateX: -width / 5 },
                ],
              },
            ]}
          >
            <TextInput
              style={[styles.rootInput, inputStyle]}
              placeholderTextColor={
                placeholderTextColor || 'rgba(97,97,97,0.8)'
              }
              value={value}
              onChangeText={onChangeText}
              placeholder={placeHolder || 'Search...'}
            />
          </Animated.View>
        )}
        <View
          style={{
            flex: 1 / 8,
            justifyContent: 'center',
            paddingVertical: 12,
          }}
        >
          {!isSearch && (
            <TouchableOpacity
              style={{ alignItems: 'center' }}
              onPress={handleOpenSearch}
            >
              {IconSearch ? (
                <TouchableOpacity
                  style={{ alignItems: 'center' }}
                  onPress={handleOpenSearch}
                >
                  {IconSearch}
                </TouchableOpacity>
              ) : (
                <Text>Search</Text>
              )}
            </TouchableOpacity>
          )}

          {isSearch && (
            <TouchableOpacity
              style={{ alignItems: 'center' }} // If icon X  transform: [{ rotate }]
              onPress={() => {
                setIsSearch(false);
                onCloseSearch?.();
              }}
            >
              {IconClose ? (
                <TouchableOpacity
                  style={{ alignItems: 'center' }}
                  onPress={() => {
                    setIsSearch(false);
                    onCloseSearch?.();
                  }}
                >
                  {IconClose}
                </TouchableOpacity>
              ) : (
                <Text>X</Text>
              )}
            </TouchableOpacity>
          )}
        </View>
      </Animated.View>
    </React.Fragment>
  );
};
export default HeaderSearch;
