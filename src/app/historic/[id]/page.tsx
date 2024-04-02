type PageParams = {
  params: {
    id: number;
  };
};

export default function historicIdPage({ params }: PageParams) {
  return <h1>{params.id}</h1>;
}
