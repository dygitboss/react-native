import BeerObj from "./Beer";

type Beer = {
  beer: BeerObj
}

type RootStackParamList = {
  BeerListing: undefined;
  BeerSingleScreen: { params: Beer };
};

export default RootStackParamList;
