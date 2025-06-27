import { create } from "zustand";

type Theme = {
  theme: "light" | "dark";
};

interface ThemeStore {
  theme: Theme;
  toggleTheme: () => void;
}

export const useThemeStore = create<ThemeStore>((set) => ({
  theme: { theme: "light" },
  toggleTheme: () => {
    set((state) => ({
      theme: {
        theme: state.theme.theme === "light" ? "dark" : "light",
      },
    }));
  },
}));
