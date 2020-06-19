import React, { FC } from "react";
import { Body, Left, ListItem, Right, View } from "native-base";
import { StyleSheet, Text } from "react-native";
import ArrowRightIcon from "../icons/ArrowRightIcon";

interface Props {
  /**
   * Define circle color
   */
  color: string;

  /**
   * Define list item icon
   */
  icon: object | string;

  /**
   * Title
   */
  name?: string;

  /**
   * Description
   */
  desc?: string;

  /**
   * Register callback for click event
   */
  onPress?: () => void;
}

const CustomListItem: FC<Props> = ({ color, icon, name, desc, onPress }) => {
  const styles = StyleSheet.create({
    placeName: {
      fontFamily: "SF Pro Display Medium",
      fontSize: 16,
      color: "#333945",
      paddingBottom: 5,
    },
    placeAddress: {
      fontFamily: "SF Pro Text",
      fontSize: 14,
      color: "#A5A8B1",
    },
    circle: {
      justifyContent: "center",
      alignItems: "center",
      width: 42,
      height: 42,
      backgroundColor: color,
      borderRadius: 42 / 2,
    },
    textIcon: {
      color: "#fff",
      fontFamily: "SF Pro Rounded Bold",
      fontSize: 18,
    },
  });

  return (
    <ListItem
      thumbnail
      noBorder
      style={{ marginLeft: 0, paddingLeft: 20, paddingRight: 5 }}
      onPress={onPress}
      underlayColor="transparent"
    >
      <Left>
        {typeof icon === "object" ? (
          <View style={styles.circle}>{icon}</View>
        ) : (
          <View style={styles.circle}>
            <Text style={styles.textIcon}>{icon}</Text>
          </View>
        )}
      </Left>
      <Body>
        {name && <Text style={styles.placeName}>{name}</Text>}
        {desc && (
          <Text style={styles.placeAddress} numberOfLines={1}>
            {desc}
          </Text>
        )}
      </Body>
      <Right>{<ArrowRightIcon />}</Right>
    </ListItem>
  );
};

export default CustomListItem;
