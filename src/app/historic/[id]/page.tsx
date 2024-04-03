import { MenuNavHome } from '@/components/MenuNavHome/MenuNavHome';
import { IReports } from '@/@types/@types';
import HistoricIdView from '@/components/HistoricIdView/HistoricIdView';

type PageParams = {
  params: {
    id: number;
  };
};

export default async function historicIdPage({ params }: PageParams) {
  const response = await fetch(`http://localhost:5000/historic/${params.id}`);
  const json = (await response.json()) as IReports[];

  return (
    <>
      <MenuNavHome activeRoute='historic' />
      <HistoricIdView data={{ ...json[0], id: params.id }} />
    </>
  );
}
