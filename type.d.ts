export interface ProductProps {
  brand: string;
  image: string;
  category: string;
  description: string;
  price: number;
  id: number;
  title: string;
  isNew: boolean;
  oldProce: number;
}
export interface StoreProduct {
  brand: string;
  image: string;
  category: string;
  description: string;
  price: number;
  id: number;
  title: string;
  isNew: boolean;
  oldProce: number;
  quantity: number;
}
