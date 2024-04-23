interface IValidationRule {
  regex?: RegExp;
  minLength?: number;
  message: string;
}

interface IValidationType {
  [key: string]: IValidationRule;
}

const validationFields: IValidationType = {
  name: {
    minLength: 10,
    message: 'Mínimo 10 dígitos',
  },
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
    // 6 dígitos e aractere espcial,
    regex: /^(?=.*[!@#$%^&*()_+}{|":?><,./;'[\]\\=-])\S{6,}$/,
    message: 'Inválido',
  },
  confirmPassword: {
    message: 'Senhas não estão iguais',
  },
};

export const validationInputs = (
  type: string,
  value: string,
  confirmValue?: string
): string => {
  if (type === 'name') {
    const minLength = validationFields[type]?.minLength;
    if (minLength !== undefined && minLength !== null) {
      return !(value.length >= minLength) ? validationFields[type].message : '';
    }
  }

  if (type === 'confirmPassword')
    return value !== confirmValue && value.length >= 1
      ? validationFields[type].message
      : '';

  const rule = new RegExp(validationFields[type]?.regex as RegExp);

  return !rule.test(value) ? validationFields[type]?.message : '';
};
