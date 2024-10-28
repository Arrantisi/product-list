export interface ProductType {
  id: string;
  name: string;
  brand: string;
  catagory: string;
  description: string;
  price: number;
  createdAt: Date;
}

export interface FormState {
  errors?: string;
  success?: boolean;
  data?: ProductType[] | undefined;
}

export interface ErrorResponse {
  msg: string;
}

export interface SearchParams {
  searchParams: { [key: string]: string };
}
