import { createEffect } from 'effector';
import Router from 'next/router';

export const logoutFx = createEffect(() => Router.push('/'));
