import { SearchParams } from "@/types";
import ContentProduct from "../fragments/content-product";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

const ProductLayout = ({ searchParams }: SearchParams) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Table Products</CardTitle>
        <CardDescription>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel,
          architecto!
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ContentProduct searchParams={searchParams} />
      </CardContent>
    </Card>
  );
};

export default ProductLayout;
