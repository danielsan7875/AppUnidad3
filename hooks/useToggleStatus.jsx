import { useCallback } from 'react';

export default function useToggleStatus() {
  return useCallback((current) => !current, []);
}

