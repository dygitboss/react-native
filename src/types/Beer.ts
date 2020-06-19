type BeerObj = {
  nameDisplay: string,
  description?: string,
  abv?: string,
  ibu?: string,
  labels?: {
    icon?: string,
    medium?: string,
  },
  style: {
    name: string,
  }
};

export default BeerObj;
