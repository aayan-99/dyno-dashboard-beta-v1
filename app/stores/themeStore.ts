// darkModeStore.ts
import { create } from 'zustand';

interface DarkModeState {
  isDarkMode: boolean;
  setDarkMode: () => void;
  setLightMode: () => void;
}

// const useDarkModeStore = create<DarkModeState>((set) => ({
//   isDarkMode: true,
//   setDarkMode: () => set(() => ({ isDarkMode: true })),
//   setLightMode: () => set(() => ({ isDarkMode: false})),
// }));

const useDarkModeStore = create<DarkModeState>((set) => {
  // Retrieve initial dark mode state from localStorage or default to true
  const initialIsDarkMode = localStorage?.getItem('isDarkMode') === 'true';

  return {
    isDarkMode: initialIsDarkMode,
    setDarkMode: () => {
      localStorage?.setItem('isDarkMode', 'true');
      set(() => ({ isDarkMode: true }));
    },
    setLightMode: () => {
      localStorage?.setItem('isDarkMode', 'false');
      set(() => ({ isDarkMode: false }));
    },
  };
});

export default useDarkModeStore;
