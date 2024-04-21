export const normalizeStr = (str: string) => {
  const mapHex: Record<string, RegExp> = {
    a: /[\xE0-\xE6]/g,
    e: /[\xE8-\xEB]/g,
    i: /[\xEC-\xEF]/g,
    o: /[\xF2-\xF6]/g,
    u: /[\xF9-\xFC]/g,
    c: /\xE7/g,
    n: /\xF1/g,
  };

  str = str.toLowerCase();

  for (let key in mapHex) {
    const regexp = mapHex[key];
    str = str.replace(regexp, key);
  }

  return str.replace(/\s/g, '');
};
