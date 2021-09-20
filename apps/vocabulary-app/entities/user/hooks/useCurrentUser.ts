import { useStore } from 'effector-react';
import { $currentUser } from 'root/entities/user/models';

export function useCurrentUser() {
  return useStore($currentUser);
}
