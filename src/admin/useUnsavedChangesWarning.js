import { useEffect } from 'react';

export default function useUnsavedChangesWarning(isDirty) {
  useEffect(() => {
    if (!isDirty) return undefined;
    function handleBeforeUnload(e) {
      e.preventDefault();
      e.returnValue = '';
    }
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [isDirty]);
}
