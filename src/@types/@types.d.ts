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
