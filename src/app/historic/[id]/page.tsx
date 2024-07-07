import { IDetailsAnalysis } from '@/@types/@types';
import HistoricIdView from '@/components/HistoricIdView/HistoricIdView';

type PageParams = {
  params: {
    id: number;
  };
};

export default async function historicIdPage({ params }: PageParams) {
  const response = await fetch(`http://localhost:3333/images/${params.id}`);
  const json = (await response.json()) as IDetailsAnalysis;

  return <HistoricIdView data={json} />;
}
