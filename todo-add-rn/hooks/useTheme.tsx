import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

export interface ColorScheme {
  bg: string;
  text: string;
  surface: string;
  primary: string;
  secondary: string;
  textMuted: string;
  border: string;
  error: string;
  success: string;
  warning: string;
  info: string;
  danger: string;
  shadow: string;
  gradients: Record<string, string[]>;
  backgrounds: Record<string, string>;
  statusBarStyle: "light-content" | "dark-content";
}

const lightColors: ColorScheme = {
  bg: "#E6F4FE",
  text: "#1E293B",
  surface: "#F1F5F9",
  primary: "#3B82F6",
  secondary: "#F3F4F6",
  textMuted: "#6B7280",
  border: "#E5E7EB",
  error: "#EF4444",
  success: "#22C55E",
  warning: "#F59E0B",
  info: "#118AB2",
  danger: "#EF4444",
  shadow: "rgba(0, 0, 0, 0.1)",
  gradients: {
    background: ["#E6F4FE", "#E6F4FE"],
    surface: ["#F1F5F9", "#F1F5F9"],
    primary: ["#3B82F6", "#3B82F6"],
    secondary: ["#F3F4F6", "#F3F4F6"],
    success: ["#22C55E", "#22C55E"],
    warning: ["#F59E0B", "#F59E0B"],
    danger: ["#EF4444", "#EF4444"],
    muted: ["#6B7280", "#6B7280"],
    empty: ["#F1F5F9", "#F1F5F9"],
  },
  backgrounds: {
    default: "#E6F4FE",
    paper: "#F1F5F9",
    card: "#F1F5F9",
    modal: "#F1F5F9",
    bottomSheet: "#F1F5F9",
    appBar: "#F1F5F9",
    statusBar: "#E6F4FE",
    input: "#F1F5F9",
    editInput: "#F1F5F9",
  },
  statusBarStyle: "dark-content",
};

const darkColors: ColorScheme = {
  ...lightColors,
  bg: "#1E293B",
  text: "#E6F4FE",
  surface: "#1E293B",
  border: "#374151",
  backgrounds: Object.fromEntries(
    Object.entries(lightColors.backgrounds).map(([k]) => [k, "#1E293B"])
  ),
  statusBarStyle: "light-content",
};

interface ThemeContextType {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  colors: ColorScheme;
}

const ThemeContext = createContext<ThemeContextType | null>(null);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem("darkMode").then((value) => {
      if (value) setIsDarkMode(JSON.parse(value));
      setHydrated(true);
    });
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => {
      const newMode = !prev;
      AsyncStorage.setItem("darkMode", JSON.stringify(newMode));
      return newMode;
    });
  };

  if (!hydrated) return null; // optional loading fallback

  const colors = isDarkMode ? darkColors : lightColors;

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode, colors }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within a ThemeProvider");
  return context;
};
