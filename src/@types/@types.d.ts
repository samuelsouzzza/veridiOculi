import { IconDefinition, IconProp } from '@fortawesome/fontawesome-svg-core';

export interface IMember {
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
    id: number;
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
export interface IModalActions {
  icon: IconDefinition;
  type: 'yes-no' | 'ok';
  message: string;
  onOk: () => void | null;
}
export interface IUser {
  id_user?: number;
  complete_name_user: string;
  email_user: string;
  cpf_user: string;
  password_user: string;
  confirm_password_user: string;
  premium_user: boolean;
}
export interface IFeedback {
  ok: boolean;
  message: string;
}
