import { Ref } from 'react';

/**
 * Merge
 * @param refs
 */
export default function mergeRefs<T>(
  ...refs: (Ref<T> | undefined | null)[]
): Ref<T> {
  return (value) => {
    for (const ref of refs) {
      if (typeof ref === 'function') {
        ref(value);
      } else if (ref !== null && ref !== undefined) {
        ref.current = value;
      }
    }
  };
}
