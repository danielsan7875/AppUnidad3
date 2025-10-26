import { useCallback } from 'react';

export default function Status() {
  return useCallback((current) => !current, []);
}

