import { ProductType } from "@/types";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { formatDate, formatTukiLira } from "@/utils";
import Dropdownmenu from "./dropdown-menu";

const TableProducts = ({ products }: { products: ProductType[] }) => {
  return (
    <Table>
      <TableCaption>
        Lorem ipsum, dolor sit amet consectetur adipisicing.
      </TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>No</TableHead>
          <TableHead className="w-[200px]">Name</TableHead>
          <TableHead className="w-[150px]">Brand</TableHead>
          <TableHead className="w-[150px]">Catagory</TableHead>
          <TableHead className="w-80">Description</TableHead>
          <TableHead className="w-[150px]">Price</TableHead>
          <TableHead className="w-[180px]">Create At</TableHead>
          <TableHead>Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {products.map((item, index) => {
          return (
            <TableRow key={item.id}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.brand}</TableCell>
              <TableCell>{item.catagory}</TableCell>
              <TableCell className="max-w-80 truncate">
                {item.description}
              </TableCell>
              <TableCell>{formatTukiLira(item.price)}</TableCell>
              <TableCell>{formatDate(item.createdAt.toString())}</TableCell>
              <TableCell>
                <Dropdownmenu productId={item.id} />
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

export default TableProducts;
