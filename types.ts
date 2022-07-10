export type Painting = {
  title: string;
  image: {
    url: string;
    width: number;
    height: number;
  };
  isAvailable: boolean;
  size: string;
  year: string;
  place: string;
  type: string;
  collection: string;
};

export type Collection = {
  id: string;
  title: string;
  image: string;
  pinturas: {};
};
