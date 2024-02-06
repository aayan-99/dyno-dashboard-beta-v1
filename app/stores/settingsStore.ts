import { create } from 'zustand';

interface SettingsToggleState {
    settingsOpen: boolean;
    toggleSettingsOpen: () => void;
}

const useSettingsToggle = create<SettingsToggleState>()((set) => ({
    settingsOpen: false,
    toggleSettingsOpen: () => set((state) => ({ settingsOpen: !state.settingsOpen })),
}));

export default useSettingsToggle;