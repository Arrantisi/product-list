"use client";

import { useCallback, useEffect, useState } from "react";
import TableProducts from "./table-products";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Link from "next/link";
import { ProductType, SearchParams } from "@/types";
import axios, { AxiosError } from "axios";
import { useAtom } from "jotai";
import { deleteButtonR } from "@/lib/jotai";
import DeleteCard from "./delete-contact";
import { PaginationWithLinks } from "../ui/pagination-with-link";
import { useDebouncedCallback } from "use-debounce";
import { toast } from "sonner";
import { TableSkeleton } from "./skeleton-table";

const ContentProduct = ({ searchParams }: SearchParams) => {
  const [products, setProduct] = useState<ProductType[]>([]);
  const [totalPage, setTotalPage] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isSearch, setIsSearch] = useState("");

  const [isDelete] = useAtom(deleteButtonR);

  const page = parseInt((searchParams.page as string) || "1");
  const postPerPage = parseInt((searchParams.pageSize as string) || "5");

  const handleSearch = useDebouncedCallback((value: string) => {
    setIsSearch(value);
  }, 500);

  const fetchData = useCallback(async () => {
    try {
      const response = await axios.get(
        `/api/products?page=${page}&limit=${postPerPage}&query=${isSearch}`
      );
      setProduct(response.data.products);
      setTotalPage(response.data.pages);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError;
        if (axiosError.request) {
          toast.error("message error for you", {
            description: "tidak dapat tersambung dengan database",
          });
        } else {
          toast.error("message error for you", {
            description: axiosError.message,
          });
        }
      } else {
        toast.error("message error for you", {
          description: "terjadi kesalaha yang tak terduga",
        });
      }
    } finally {
      setIsLoading(false);
    }
  }, [isSearch, page, postPerPage]);

  useEffect(() => {
    fetchData();
  }, [fetchData, isDelete]);

  return (
    <div className={`z-10 ${isLoading && "cursor-progress"}`}>
      <div className={`flex justify-center items-center gap-3 mb-8 `}>
        <Input
          placeholder="search..."
          onChange={(e) => handleSearch(e.target.value)}
          defaultValue={isSearch}
        />

        <Button className="w-1/6">
          <Link href={"/products/create"}>Add Product</Link>
        </Button>
      </div>
      {isLoading ? <TableSkeleton /> : <TableProducts products={products} />}
      <PaginationWithLinks
        page={page}
        pageSize={postPerPage}
        totalCount={totalPage}
        pageSizeSelectOptions={{
          pageSizeOptions: [5, 10, 15, 20],
        }}
      />
      {isDelete && <DeleteCard />}
    </div>
  );
};

export default ContentProduct;
