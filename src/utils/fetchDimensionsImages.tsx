import { getImageSize } from 'react-image-size';

type fetchDimensionsImagesProps = {
  src: string;
};

export const fetchDimensionsImages = async ({
  src,
}: fetchDimensionsImagesProps) => {
  try {
    const dimensions = await getImageSize(src);
    return dimensions;
  } catch (error) {
    console.error(error);
    return null;
  }
};
