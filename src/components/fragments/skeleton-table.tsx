import { Skeleton } from "../ui/skeleton";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

export const TableSkeleton = () => {
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
        <TableRow>
          <TableCell>
            <Skeleton className="w-full h-7" />
          </TableCell>
          <TableCell>
            <Skeleton className="w-full h-7" />
          </TableCell>
          <TableCell>
            <Skeleton className="w-full h-7" />
          </TableCell>
          <TableCell>
            <Skeleton className="w-full h-7" />
          </TableCell>
          <TableCell>
            <Skeleton className="w-full h-7" />
          </TableCell>
          <TableCell>
            <Skeleton className="w-full h-7" />
          </TableCell>
          <TableCell>
            <Skeleton className="w-full h-7" />
          </TableCell>
          <TableCell>
            <Skeleton className="w-full h-7" />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <Skeleton className="w-full h-7" />
          </TableCell>
          <TableCell>
            <Skeleton className="w-full h-7" />
          </TableCell>
          <TableCell>
            <Skeleton className="w-full h-7" />
          </TableCell>
          <TableCell>
            <Skeleton className="w-full h-7" />
          </TableCell>
          <TableCell>
            <Skeleton className="w-full h-7" />
          </TableCell>
          <TableCell>
            <Skeleton className="w-full h-7" />
          </TableCell>
          <TableCell>
            <Skeleton className="w-full h-7" />
          </TableCell>
          <TableCell>
            <Skeleton className="w-full h-7" />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <Skeleton className="w-full h-7" />
          </TableCell>
          <TableCell>
            <Skeleton className="w-full h-7" />
          </TableCell>
          <TableCell>
            <Skeleton className="w-full h-7" />
          </TableCell>
          <TableCell>
            <Skeleton className="w-full h-7" />
          </TableCell>
          <TableCell>
            <Skeleton className="w-full h-7" />
          </TableCell>
          <TableCell>
            <Skeleton className="w-full h-7" />
          </TableCell>
          <TableCell>
            <Skeleton className="w-full h-7" />
          </TableCell>
          <TableCell>
            <Skeleton className="w-full h-7" />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <Skeleton className="w-full h-7" />
          </TableCell>
          <TableCell>
            <Skeleton className="w-full h-7" />
          </TableCell>
          <TableCell>
            <Skeleton className="w-full h-7" />
          </TableCell>
          <TableCell>
            <Skeleton className="w-full h-7" />
          </TableCell>
          <TableCell>
            <Skeleton className="w-full h-7" />
          </TableCell>
          <TableCell>
            <Skeleton className="w-full h-7" />
          </TableCell>
          <TableCell>
            <Skeleton className="w-full h-7" />
          </TableCell>
          <TableCell>
            <Skeleton className="w-full h-7" />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <Skeleton className="w-full h-7" />
          </TableCell>
          <TableCell>
            <Skeleton className="w-full h-7" />
          </TableCell>
          <TableCell>
            <Skeleton className="w-full h-7" />
          </TableCell>
          <TableCell>
            <Skeleton className="w-full h-7" />
          </TableCell>
          <TableCell>
            <Skeleton className="w-full h-7" />
          </TableCell>
          <TableCell>
            <Skeleton className="w-full h-7" />
          </TableCell>
          <TableCell>
            <Skeleton className="w-full h-7" />
          </TableCell>
          <TableCell>
            <Skeleton className="w-full h-7" />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <Skeleton className="w-full h-7" />
          </TableCell>
          <TableCell>
            <Skeleton className="w-full h-7" />
          </TableCell>
          <TableCell>
            <Skeleton className="w-full h-7" />
          </TableCell>
          <TableCell>
            <Skeleton className="w-full h-7" />
          </TableCell>
          <TableCell>
            <Skeleton className="w-full h-7" />
          </TableCell>
          <TableCell>
            <Skeleton className="w-full h-7" />
          </TableCell>
          <TableCell>
            <Skeleton className="w-full h-7" />
          </TableCell>
          <TableCell>
            <Skeleton className="w-full h-7" />
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};
