import { IReports } from '@/@types/@types';
import { HistoricView } from './HistoricView';

export default async function FetchHistoric() {
  const response = await fetch('http://localhost:5000/historic');
  const json = (await response.json()) as IReports[];

  return <HistoricView data={json} />;
}
