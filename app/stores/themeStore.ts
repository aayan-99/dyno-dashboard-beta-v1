// darkModeStore.ts
import { create } from 'zustand';

interface DarkModeState {
  isDarkMode: boolean;
  setDarkMode: () => void;
  setLightMode: () => void;
}

const useDarkModeStore = create<DarkModeState>((set) => ({
  isDarkMode: true,
  setDarkMode: () => set(() => ({ isDarkMode: true })),
  setLightMode: () => set(() => ({ isDarkMode: false})),
}));

export default useDarkModeStore;
