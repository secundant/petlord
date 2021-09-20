import { createEffect } from 'effector';
import Router from 'next/router';

export const loginFx = createEffect(async (_data: any) => {
  await new Promise(r => setTimeout(r, 750));
  await Router.push('/cards');
});
