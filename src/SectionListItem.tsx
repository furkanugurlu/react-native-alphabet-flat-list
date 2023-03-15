/**
 * Created by JetBrains WebStorm.
 * Author: yoon
 * Date: 19-9-3
 * Time: 下午9:25
 * Desc:
 */
import * as React from "react";
import { FC } from "react";
// @ts-ignore
import { View, Text, ViewStyle, TextStyle } from "react-native";
import styles from "./styles";

interface IProps {
  title: string;
  height: number;
  active: boolean;
  alphabeContainerStyle?: ViewStyle;
  alphabeTextItemStyle?: ViewStyle;
  alphabeTextStyle?: TextStyle;
}

const SectionListItem: FC<IProps> = function (props) {
  return (
    <View
      style={[
        styles.sectionListItemContainer,
        { height: props.height },
        props.alphabeContainerStyle,
      ]}
    >
      <View
        style={[
          styles.sectionListItemWrapper,
          {
            backgroundColor: props.active ? "#0ea8ff" : "transparent",
          },
          props.alphabeTextItemStyle,
        ]}
      >
        <Text
          style={[
            styles.sectionListItemText,
            {
              color: props.active ? "white" : "#333",
            },
            props.alphabeTextStyle,
          ]}
        >
          {props.title}
        </Text>
      </View>
    </View>
  );
};

export default SectionListItem;
