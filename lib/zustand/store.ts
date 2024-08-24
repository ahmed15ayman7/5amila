import { create } from 'zustand';
import { get, set as set2 } from 'idb-keyval';

// Language Store with IndexedDB
interface LanguageState {
  language: string;
  setLanguage: (lang: string) => void;
  initLanguage: () => void;
}

const useStore = create<LanguageState>((set) => ({
  language: 'ar',
  setLanguage: async (lang: string) => {
    await set2('language', lang);
    set({ language: lang });
  },
  // Initialize the state from IndexedDB
  initLanguage: async () => {
    const savedLanguage = await get('language');
    if (savedLanguage) {
      set({ language: savedLanguage });
    }
  },
}));

// Initialize language from IndexedDB on store creation
useStore.getState().initLanguage();

export default useStore;

// Dark Mode Store with IndexedDB
interface DarkModeState {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  initDarkMode: () => void;
}

export const useDarkModeStore = create<DarkModeState>((set) => ({
  isDarkMode: false,
  toggleDarkMode: async () => {
    const currentMode = (await get('isDarkMode')) || false;
    const newMode = !currentMode;
    await set2('isDarkMode', newMode);
    set({ isDarkMode: newMode });
  },
  // Initialize the state from IndexedDB
  initDarkMode: async () => {
    const savedMode = await get('isDarkMode');
    if (savedMode !== undefined) {
      set({ isDarkMode: savedMode });
    }
  },
}));

// Initialize dark mode from IndexedDB on store creation
useDarkModeStore.getState().initDarkMode();
