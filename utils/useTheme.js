import { useState, useEffect } from 'react';

const useTheme = () => {
  // lazy initialization
  const [theme, setTheme] = useState(null);

  // theme가 변경되면 로컬 스토리지에 저장한다.
  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  // theme 변경 핸들러
  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  return [theme, toggleTheme];
};

export default useTheme;
