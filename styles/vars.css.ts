import {
  createGlobalTheme,
  createTheme,
  createThemeContract,
} from "@vanilla-extract/css";

const global = createGlobalTheme("html", {
  space: {
    none: "0",
    small: "4px",
    medium: "8px",
    large: "12px",
    xl: "16px",
  },
});

const baseColors = {
  background: null,
  text: null,
};

const marks = {
  highlight: null,
  accent: null,
};

const colors = createThemeContract({
  ...baseColors,
  primary: {
    ...baseColors,
    ...marks,
  },
  secondary: {
    ...baseColors,
    ...marks,
  },
  neutral: {
    ...baseColors,
    ...marks,
  },
});

export const lightTheme = createTheme(colors, {
  background: "#EBF7F4",
  text: "#171F1D",
  primary: {
    background: "#417668",
    text: "#EBF7F4",
    highlight: "#8BABA2",
    accent: "#174E3F",
  },
  secondary: {
    background: "#AF5F41",
    text: "#F2EBD0",
    highlight: "#F59F77",
    accent: "#AF5F41",
  },
  neutral: {
    background: "#D8ECE6",
    text: "#A8B9B4",
    highlight: "#A8B9B4",
    accent: "#A8B9B4",
  },
});

export const darkTheme = createTheme(colors, {
  background: "#171F1D",
  text: "#EBF7F4",
  primary: {
    background: "#97EB91",
    text: "#095605",
    highlight: "#4CC746",
    accent: "#EAFEE9",
  },
  secondary: {
    background: "#F59F77",
    text: "#55322A",
    highlight: "#AF5F41",
    accent: "#F5DCBF",
  },
  neutral: {
    background: "#303937",
    text: "#606D69",
    highlight: "#485350",
    accent: "#485350",
  },
});

export const vars = { ...global, colors };
