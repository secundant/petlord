import { createEvent, createStore } from 'effector';
import { User } from 'root/entities/user/interfaces/user.interface';

export const currentUserChanged = createEvent<User | null>();
export const $currentUser = createStore<User | null>(null).on(
  currentUserChanged,
  (_, user) => user
);
