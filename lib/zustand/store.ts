import { create } from 'zustand';

// Language Store with localStorage
interface LanguageState {
  language: string;
  setLanguage: (lang: string) => void;
  initLanguage: () => void;
}

const useStore = create<LanguageState>((set) => ({
  language: 'ar',
  setLanguage: (lang: string) => {
    if (typeof window !== 'undefined') { // تحقق من البيئة
      localStorage.setItem('language', lang); // حفظ اللغة في localStorage
    }
    set({ language: lang });
  },
  // Initialize the state from localStorage
  initLanguage: () => {
    if (typeof window !== 'undefined') { // تحقق من البيئة
      const savedLanguage = localStorage.getItem('language');
      if (savedLanguage) {
        set({ language: savedLanguage });
      }
    }
  },
}));

// Initialize language from localStorage on store creation
useStore.getState().initLanguage();

export default useStore;

// Dark Mode Store with localStorage
interface DarkModeState {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  initDarkMode: () => void;
}

export const useDarkModeStore = create<DarkModeState>((set) => ({
  isDarkMode: false,
  toggleDarkMode: () => {
    if (typeof window !== 'undefined') { // تحقق من البيئة
      const currentMode = JSON.parse(localStorage.getItem('isDarkMode') || 'false'); // قراءة وضعية الظلام الحالية
      const newMode = !currentMode;
      localStorage.setItem('isDarkMode', JSON.stringify(newMode)); // حفظ وضعية الظلام الجديدة في localStorage
      set({ isDarkMode: newMode });
    }
  },
  // Initialize the state from localStorage
  initDarkMode: () => {
    if (typeof window !== 'undefined') { // تحقق من البيئة
      const savedMode = localStorage.getItem('isDarkMode');
      if (savedMode !== null) {
        set({ isDarkMode: JSON.parse(savedMode) }); // تحويل القيمة إلى Boolean
      }
    }
  },
}));

// Initialize dark mode from localStorage on store creation
useDarkModeStore.getState().initDarkMode();
