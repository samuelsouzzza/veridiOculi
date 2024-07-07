import { IconDefinition, IconProp } from '@fortawesome/fontawesome-svg-core';

export interface IUser {
  id_user?: number;
  complete_name_user: string;
  email_user: string;
  cpf_user: string;
  password_user: string;
  confirm_password_user?: string;
  premium_user: boolean;
}

export interface IAnalysis {
  id_analysis: number;
  target_species_name_analysis: string;
  date_analysis: string;
  status_analysis: string;
  id_user: number;
  data_analysis: IImages[];
}

export interface IImages {
  id_image: number;
  original_path_image: string;
  ia_path_image: string;
  species_name_image: string;
  accuracy_image: number;
  id_analysis: number;
}

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
export interface IModalActions {
  icon: IconDefinition;
  type: 'yes-no' | 'ok';
  message: string;
  onOk: () => void | null;
}
export interface IUserLogged {
  id_user: number;
  complete_name_user: string;
}
export interface IFeedback {
  ok: boolean;
  message: string;
  userLogged?: IUserLogged;
  token?: string;
  data: IAnalysis[] | IImages[];
}
export interface IDetailsAnalysis {
  analysis: IAnalysis[];
  images: IImages[];
}
