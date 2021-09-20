import { createEffect } from 'effector';
import Router from 'next/router';
import { userModel } from 'root/entities/user';
import { AuthLoginFormFieldsData } from 'root/features/auth-login-form/interfaces/auth-login-form.fields-data.interface';

export const loginFx = createEffect(async ({ login }: AuthLoginFormFieldsData) => {
  await new Promise(r => setTimeout(r, 750));
  userModel.currentUserChanged({
    id: login,
    firstName: login,
    lastName: login.split(' ').slice(1)[0] ?? void 0,
    username: login
  });
  await Router.push('/cards');
});
