import { useEffect, useState } from 'react';

const removeLeadingSlash = (value: string) => value.replace(/^\/+/g, '');

const getCurrentPath = () => removeLeadingSlash(window.location.pathname);

type UseRouterHook = () => [string, (route: string) => void];
export const useRouter: UseRouterHook = () => {
  const [path, setPath] = useState(getCurrentPath());

  useEffect(() => {
    window.history.pushState({ path }, `Path ${path}`, `/${removeLeadingSlash(path)}`);
  }, [path]);

  return [path, setPath];
};
