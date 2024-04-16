interface IValidationRule {
  regex?: RegExp;
  message: string;
}

interface IValidationType {
  [key: string]: IValidationRule;
}

const validationFields: IValidationType = {
  email: {
    regex:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: 'Inválido',
  },
  cpf: {
    regex: /^(?!000\.?0?0?0\.?0?0?0-?0?0?$)(\d{3}\.?){2}\d{3}-?\d{2}$/,
    message: 'Inválido',
  },
  password: {
    regex: /^(?=.*[!@#$%^&*()_+{}|:"<>?[\]\;',./]).*$/,
    message: 'Caractere especial ausente',
  },
};

export const validationInputs = (type: string, value: string): string => {
  const rule = new RegExp(validationFields[type]?.regex as RegExp);

  return !rule.test(value) ? validationFields[type]?.message : '';
};
