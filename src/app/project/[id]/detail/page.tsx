import DetailProject from "./DetailProject";

const page = ({ params }: { params: { id: string } }) => {
  return <DetailProject params={params} />;
};

export default page;
