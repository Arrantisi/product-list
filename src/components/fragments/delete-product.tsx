import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { useAtom } from "jotai";
import { deleteButton, productId } from "@/lib/jotai";
import axios, { AxiosError } from "axios";
import { useState } from "react";
import { toast } from "sonner";
import { ErrorResponse } from "@/types";

const DeleteCard = () => {
  const [isLoading, setIsLoading] = useState(false);

  const [isDelete, setIsdelete] = useAtom(deleteButton);
  const [isProductId] = useAtom(productId);

  const handleButton = async () => {
    try {
      setIsLoading(true);
      const response = await axios.delete(`/api/products/${isProductId}`);
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
            description: "tidak dapat tersambung dengan database",
          });
        } else {
          toast.error("messagae for you", {
            description: axiosError.message,
          });
        }
      } else {
        toast.error("message for you", {
          description: "terjadi kesalahan yang tak terduga",
        });
      }
    } finally {
      setIsLoading(false);
      setIsdelete(false);
    }
  };

  return (
    <div
      className={`fixed bottom-0 top-0 left-0 right-0 flex justify-center items-center backdrop-blur-sm ${
        !isDelete && "hidden"
      }`}
    >
      <div
        className="fixed bottom-0 left-0 right-0 top-0 -z-10"
        onClick={() => setIsdelete(false)}
      ></div>
      <Card className="w-[600px]">
        <CardHeader>
          <CardTitle>Delete Product</CardTitle>
          <CardDescription>
            Lorem ipsum dolor sit amet consectetur.
          </CardDescription>
        </CardHeader>
        <CardFooter>
          <div className="flex justify-end w-full gap-4">
            <Button disabled={isLoading} onClick={() => setIsdelete(false)}>
              Close
            </Button>
            <Button
              disabled={isLoading}
              variant={"destructive"}
              onClick={handleButton}
            >
              Delete Product
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default DeleteCard;
