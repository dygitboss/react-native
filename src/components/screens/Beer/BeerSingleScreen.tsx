import React, { FC } from "react";
import { ScrollView, StyleSheet, Text, View, Image } from "react-native";
import {
  Container,
  Item,
  Left,
  Button,
  Col, Grid,
} from "native-base";
import ArrowLeftIcon from "../../icons/ArrowLeftIcon";
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from "@react-navigation/native";
import RootStackParamList from "../../../types/BeerNavigation";

type ProfileScreenRouteProp = RouteProp<RootStackParamList, 'BeerSingleScreen'>;

type Props = {
  route: ProfileScreenRouteProp;
  navigation: StackNavigationProp<
    RootStackParamList,
    'BeerSingleScreen'
  >;
};

const BeerSingleScreen: FC<Props> = ({ navigation, route: { params: props } }) => {
  const { beer } = props.params;

  return (
    <Container style={{ backgroundColor: "#EBF1FA" }}>
      <View style={styles.header}>
        <Item>
          <Left>
            <Button transparent style={styles.headerNav} onPress={() => navigation.goBack()}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <ArrowLeftIcon color='#0087ff' />
                <Text style={styles.backButtonText}>Go Back</Text>
              </View>
            </Button>
          </Left>
        </Item>
      </View>
      <ScrollView style={styles.jobTypesList}>
        <Text style={styles.headerTitle}>{beer.nameDisplay}</Text>
        <View style={{ flex: 0 }}>
          <View style={{ paddingVertical: 10 }}>
            <Text style={{ textAlign: 'center' }}>{beer.style && beer.style.name}</Text>
          </View>
          <View style={{ paddingTop: 0, justifyContent: 'center' }}>
            <View style={{ justifyContent: 'center' }}>
              {beer.labels && beer.labels.medium && (
                <Image
                  source={{ uri: beer.labels.medium }}
                  style={{ height: undefined, width: '100%', aspectRatio: 1 }}
                />
              )}
            </View>
            <Text style={{ paddingTop: 10, paddingBottom: 20 }}>{beer.description}</Text>
            <View>
              <Grid>
                {
                  beer.abv && (
                    <Col style={{ height: 40 }}>
                      <Text>{`ABV: ${beer.abv}`}</Text>
                    </Col>
                  )
                }
                {
                  beer.ibu && (
                    <Col style={{ height: 40 }}>
                      <Text>{`ABV: ${beer.ibu}`}</Text>
                    </Col>
                  )
                }
              </Grid>
            </View>
          </View>
        </View>
      </ScrollView>
    </Container>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  headerTitle: {
    fontFamily: "SF Pro Display Bold",
    fontSize: 32,
    color: "#313946",
    textAlign: 'center',
  },
  jobTypesList: {
    backgroundColor: "#FFFFFF",
    paddingTop: 5,
    paddingHorizontal: 20,
  },
  headerNav: {
    paddingBottom: 10,
  },
  backButtonText: {
    color: '#0087ff',
    fontFamily: 'SF Pro Display Medium',
    fontSize: 16,
    paddingLeft: 5,
  }
});

export default BeerSingleScreen;
