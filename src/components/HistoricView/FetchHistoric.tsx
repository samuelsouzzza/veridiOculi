import { IReports } from '@/@types/@types';
import { HistoricView } from './HistoricView';

export default async function FetchHistoric() {
  const response = await fetch('http://localhost:3000/api/historic', {
    next: {
      revalidate: 10,
    },
    cache: 'no-cache',
  });
  const json = (await response.json()) as IReports[];

  return <HistoricView data={json} />;
}
