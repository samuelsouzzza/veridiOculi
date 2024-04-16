interface IValidationRule {
  regex?: RegExp;
  message: string;
}

interface ValidationType {
  [key: string]: IValidationRule;
}

const validationFields: ValidationType = {
  email: {
    regex:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: 'Email inválido pelo Regex',
  },
  password: {
    regex:
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{7,}$/,
    message: 'Senha inválida pelo Regex',
  },
};

export const validationInputs = (type: string, value: string) => {
//   const rule = new RegExp(validationFields[type]?.regex);

//   rule.test();

  return;
};
