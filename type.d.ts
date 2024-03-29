export interface ProductProps {
  brand: string;
  image: string;
  category: string;
  description: string;
  price: number;
  _id: number;
  title: string;
  isNew: boolean;
  oldPrice: number;
}
export interface StoreProduct {
  brand: string;
  image: string;
  category: string;
  description: string;
  price: number;
  _id: number;
  title: string;
  isNew: boolean;
  oldPrice: number;
  quantity: number;
}

export interface NextState {
  productData: StoreProduct[];
  favoriteData: StoreProduct[];
  allProducts: StoreProduct[];
  userInfo: null | String;
}

export interface StateProps {
  productData: [];
  favoriteData: [];
  userInfo: null | string;
  cart: any;
}
