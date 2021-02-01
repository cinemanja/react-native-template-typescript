import React from 'react';
import {StyleSheet, View, ViewStyle} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {IconProps} from 'react-native-vector-icons/Icon';

interface MaskedIconProps extends IconProps {
  light?: boolean | undefined;
  solid?: boolean | undefined;
  brand?: boolean | undefined;
}

export const MaskedIcon: React.FC<MaskedIconProps> = ({
  name,
  solid,
  size,
}: MaskedIconProps) => {
  return (
    <View style={styles.iconContainer}>
      <FontAwesome5 name={name} size={size ?? 24} solid={solid} color="white" />
    </View>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  } as ViewStyle,
  iconContainer: {
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  } as ViewStyle,
  maskedView: {
    justifyContent: 'center',
    flexDirection: 'row',
  } as ViewStyle,
});
