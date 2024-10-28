import UpdateProduct from "@/components/fragments/update-product";

const Page = ({ params }: { params: { id: string } }) => {
  return (
    <div>
      <UpdateProduct params={params.id} />
    </div>
  );
};

export default Page;
