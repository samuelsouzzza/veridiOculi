import { IAnalysis, IFeedback } from '@/@types/@types';
import { HistoricView } from './HistoricView';
import { getToken } from '@/app/actions/getToken';

export default async function FetchHistoric() {
  const TOKEN = await getToken();

  const response = await fetch(`http://localhost:3333/analysis/${TOKEN}`);
  const json = (await response.json()) as IFeedback;

  return <HistoricView data={json.data.reverse()} />;
}
