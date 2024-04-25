import { applyMask } from './applyMask';
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
    // 6 dígitos e caractere especial,
    regex: /^(?=.*[!@#$%^&*()_+}{|":?><,./;'[\]\\=-])\S{6,}$/,
    message: 'Inválido',
  },
  confirmPassword: {
    message: 'Senhas não são iguais',
  },
};

export const validationInputs = (
  type: 'name' | 'cpf' | 'email' | 'password' | 'confirmPassword',
  value: string,
  confirmValue?: string
): string | null => {
  if (type === 'name') {
    const minLength = validationFields[type]?.minLength;
    if (minLength !== undefined && minLength !== null) {
      return value.length >= minLength ? null : validationFields[type].message;
    }
  }

  if (type === 'confirmPassword') {
    if (value?.length >= 3)
      return value === confirmValue ? null : validationFields[type]?.message;

    return ' ';
  }

  const rule = new RegExp(validationFields[type]?.regex as RegExp);
  return rule.test(value) ? null : validationFields[type]?.message;
};
