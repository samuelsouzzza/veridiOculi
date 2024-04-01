import { IImgsForAnalysis } from '@/@types/@types';

export const getTotalSizeImgs = (files: IImgsForAnalysis[]) => {
  if (files)
    return (
      files.reduce((acc, value, i) => {
        return acc + Number(files[i]?.raw?.size);
      }, 0) /
      1024 /
      1024
    ).toFixed(2);
};


