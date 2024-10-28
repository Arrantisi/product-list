"use client";

import { productScema, ProductSchema } from "@/lib/schemas";
import { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import axios, { AxiosError } from "axios";
import { ErrorResponse } from "@/types";

const UpdateProduct = ({ params }: { params: string }) => {
  const [isLoading, setIsLoading] = useState(false);
  const { replace } = useRouter();

  const form = useForm<ProductSchema>({
    resolver: zodResolver(productScema),
    defaultValues: {
      name: "",
      brand: "",
      catagory: "",
      description: "",
      price: 0,
    },
  });

  const { control, handleSubmit, setValue } = form;

  const fetchData = useCallback(
    async (dataId: string) => {
      const response = await axios.get<ProductSchema>(
        `/api/products/${dataId}`
      );
      const { name, brand, catagory, description, price } = response.data;
      setValue("name", name);
      setValue("brand", brand);
      setValue("catagory", catagory);
      setValue("description", description);
      setValue("price", price);
    },
    [setValue]
  );

  useEffect(() => {
    fetchData(params);
  }, [fetchData, params]);

  const onSubmit = async (values: ProductSchema) => {
    const { name, brand, catagory, description, price } = values;
    setIsLoading(true);
    try {
      const response = await axios.patch(`/api/products/${params}`, {
        name,
        brand,
        catagory,
        description,
        price,
      });
      toast.success("message for you", {
        description: response.data.msg,
      });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError;
        if (axiosError.response) {
          const errorMessage = axiosError.response.data as ErrorResponse;
          toast.error("message for you", {
            description: errorMessage.msg,
          });
        } else if (axiosError.request) {
          toast.error("message for you", {
            description: "tidak dapat terhubung dengan database",
          });
        } else {
          toast.error("message for you", {
            description: `${axiosError.message}`,
          });
        }
      } else {
        toast.error("message for you", {
          description: "terjadi kesalahan yang tak terduga",
        });
      }
    } finally {
      setIsLoading(false);
      replace("/products");
    }
  };
  return (
    <Form {...form}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={`grid grid-cols-2 gap-3 ${isLoading && "cursor-progress"}`}
      >
        <FormField
          control={control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Product Name</FormLabel>
              <FormControl>
                <Input
                  disabled={isLoading}
                  placeholder="Product Name"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="brand"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Product Brand</FormLabel>
              <FormControl>
                <Input
                  disabled={isLoading}
                  placeholder="Product Brand"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="catagory"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Product Category</FormLabel>
              <FormControl>
                <Input
                  disabled={isLoading}
                  placeholder="Product Category"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="price"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Product price</FormLabel>
              <FormControl>
                <Input
                  disabled={isLoading}
                  placeholder="Product price"
                  type="number"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="description"
          render={({ field }) => (
            <FormItem className="col-span-2">
              <FormLabel>Product Caragory</FormLabel>
              <FormControl>
                <Textarea
                  rows={5}
                  placeholder="Product Catagory"
                  {...field}
                  className="custom-scrollbar"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          disabled={isLoading}
          className={`mt-6 col-span-2 ${isLoading && "cursor-progress"}`}
        >
          Add Product
        </Button>
      </form>
    </Form>
  );
};

export default UpdateProduct;
