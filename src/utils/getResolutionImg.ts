export const getResolutionImg = (w: number, h: number): string | undefined => {
  if (w >= 1280 && w < 2560 && h >= 720 && h < 1440) return 'HD';
  else if (w >= 2560 && w < 3840 && h >= 1440 && h < 2160) return '2K';
  else if (w >= 3840 && w < 5120 && h >= 2160 && h < 2880) return '4K';
  else if (w >= 5120 && w < 7680 && h >= 2880 && h < 4320) return '5K';
  else if (w >= 7680 && w < 15360 && h >= 4320 && h < 8640) return '8K';
  else return;
};
