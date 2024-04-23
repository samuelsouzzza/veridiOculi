function maskCpf(str: string) {
  if (str.length === 11) {
    return (
      str.substring(0, 3) +
      '.' +
      str.substring(3, 6) +
      '.' +
      str.substring(6, 9) +
      '-' +
      str.substring(9)
    );
  }
  return str;
}

export const applyMask = (type: string, value: string) => {
  if (type === 'cpf') {
    return maskCpf(value);
  }
  return '';
};
