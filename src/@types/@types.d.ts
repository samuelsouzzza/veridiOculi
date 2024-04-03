export interface Member {
  id: number;
  profile: string;
  name: string;
  office: string;
  links: { github: string; linkedin: string };
}
export interface IImgsForAnalysis {
  id: number;
  preview: string;
  raw: File | null;
}
export interface IReports {
  id: number;
  id_user: number;
  dt_report: string;
  status: string;
  data: {
    path: string;
    species_name: string;
    accuracy: number;
    coordenates: {
      start_X: number;
      end_X: number;
      start_Y: number;
      end_Y: number;
    };
  }[];
}
