import { createEffect } from 'effector';
import Router from 'next/router';
import { userModel } from 'root/entities/user';

export const logoutFx = createEffect(async () => {
  userModel.currentUserChanged(null);
  await Router.push('/');
});
