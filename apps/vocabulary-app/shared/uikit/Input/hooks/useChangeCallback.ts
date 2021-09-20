import { ChangeEvent, DependencyList, useCallback } from 'react';

export function useChangeCallback(fn: (value: string) => void, deps: DependencyList) {
  return useCallback((event: ChangeEvent<HTMLInputElement>) => fn(event.target.value), deps);
}
