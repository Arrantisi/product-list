import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ReactNode } from "react";

const CreateProductLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Card className="w-[724px]">
        <CardHeader>
          <CardTitle>Add Product</CardTitle>
          <CardDescription>Lorem ipsum dolor sit amet.</CardDescription>
        </CardHeader>
        <CardContent>{children}</CardContent>
        <CardFooter>
          <p className="text-center w-full text-sm text-muted-foreground mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default CreateProductLayout;
