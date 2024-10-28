"use client";

import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "../ui/dropdown-menu";
import { Ellipsis } from "lucide-react";
import { useAtom } from "jotai";
import { deleteButtonW, productIdW } from "@/lib/jotai";

const Dropdownmenu = ({ productId }: { productId: string }) => {
  const [, setCloseDelete] = useAtom(deleteButtonW);
  const [, setProductId] = useAtom(productIdW);

  return (
    <div id={productId}>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <div className="flex justify-center items-center h-10 w-10 rounded-md hover:bg-accent hover:text-accent-foreground duration-150">
            <Ellipsis size={20} absoluteStrokeWidth />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Action</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Show</DropdownMenuItem>
          <DropdownMenuItem>
            <Link href={`/products/update/${productId}`}>Update</Link>
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => {
              setCloseDelete(true);
              setProductId(productId);
            }}
          >
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default Dropdownmenu;
