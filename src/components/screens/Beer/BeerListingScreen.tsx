import React, { FC, useEffect, useState } from "react";
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getBeers } from "../../../store/beer/actions";
import { beersSelector, loadingSelector } from "../../../store/beer/selectors";
import { Container, Thumbnail } from "native-base";
import CustomListItem from "../../Core/ListItem";
import BeerObj from '../../../types/Beer';
import {StackNavigationProp} from "@react-navigation/stack";
import RootStackParamList from "../../../types/BeerNavigation";

type Props = {
  navigation: StackNavigationProp<
    RootStackParamList,
    'BeerSingleScreen'
    >;
};

const BeerListingScreen: FC<Props> = ({ navigation }) => {
  const [beers, setBeers] = useState<Array<BeerObj>>([]);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const beerList = useSelector(beersSelector);
  const beersLoading = useSelector(loadingSelector);

  useEffect(() => {
    dispatch(getBeers());
  }, []);

  useEffect(() => {
    setBeers(beerList);
  }, [beerList]);

  useEffect(() => {
    setLoading(beersLoading);
  }, [beersLoading]);

  return (
    <Container style={{ backgroundColor: "#EBF1FA" }}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Beer List</Text>
      </View>
      <ScrollView style={styles.jobTypesList}>
        {loading ? (
          <ActivityIndicator size="large" color="#0087FF" />
        ) : (
          beers.length > 0 &&
          beers.map((beer, key) => (
            <CustomListItem
              key={key.toString()}
              color="#FFCC00"
              icon={
                beer.labels && beer.labels.icon ? (
                  <Thumbnail source={{ uri: beer.labels.icon }} />
                ) : (
                  beer.nameDisplay.charAt(0)
                )
              }
              name={beer.nameDisplay}
              desc={beer.style && beer.style.name}
              onPress={() =>
                navigation.navigate("BeerSingleScreen", {
                  params: { beer },
                })
              }
            />
          ))
        )}
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
  },
  jobTypesList: {
    backgroundColor: "#FFFFFF",
    paddingTop: 5,
  },
});

export default BeerListingScreen;
