import { setTimeout } from 'next/dist/compiled/@edge-runtime/primitives';

export default function debounce(callback: any, delay: number) {
  let timeout: ReturnType<typeof setTimeout>;

  return (args: any) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => callback(...args), delay);
  };
}
