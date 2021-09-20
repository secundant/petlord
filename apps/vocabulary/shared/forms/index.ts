import { Rule } from 'effector-forms';

export const FormRules = {
  required: (): Rule<any> => ({
    name: 'required',
    validator: value => !!value
  }),
  minLength: (minLength: number): Rule<any> => ({
    name: 'minLength',
    validator: value => value.toString().length > minLength
  })
};
