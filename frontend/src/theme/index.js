export const theme = {
  colors: {
    primary: {
      DEFAULT: "rgb(147, 51, 234)", // purple-600
      light: "rgb(168, 85, 247)", // purple-500
      dark: "rgb(126, 34, 206)", // purple-700
      bg: "rgba(147, 51, 234, 0.2)", // purple-600/20
    },
    background: {
      DEFAULT: "rgb(15, 23, 42)", // slate-900
      light: "rgb(30, 41, 59)", // slate-800
      dark: "rgb(2, 6, 23)", // slate-950
      overlay: "rgba(15, 23, 42, 0.95)", // slate-900/95
    },
    border: {
      DEFAULT: "rgb(51, 65, 85)", // slate-700
      light: "rgb(71, 85, 105)", // slate-600
      dark: "rgb(30, 41, 59)", // slate-800
    },
    text: {
      primary: "rgb(255, 255, 255)", // white
      secondary: "rgb(148, 163, 184)", // slate-400
      tertiary: "rgb(100, 116, 139)", // slate-500
    },
    status: {
      success: {
        text: "rgb(134, 239, 172)", // emerald-300
        bg: "rgba(16, 185, 129, 0.2)", // emerald-500/20
      },
      warning: {
        text: "rgb(253, 224, 71)", // yellow-300
        bg: "rgba(234, 179, 8, 0.2)", // yellow-500/20
      },
      error: {
        text: "rgb(252, 165, 165)", // red-300
        bg: "rgba(239, 68, 68, 0.2)", // red-500/20
      },
    },
  },
  spacing: {
    page: {
      x: "1.5rem", // px-6
      y: "2rem", // py-8
    },
    section: {
      x: "1rem", // px-4
      y: "1.5rem", // py-6
    },
  },
  rounded: {
    sm: "0.375rem", // rounded
    md: "0.5rem", // rounded-lg
    lg: "0.75rem", // rounded-xl
    full: "9999px", // rounded-full
  },
  shadows: {
    sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
    md: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
    lg: "0 10px 15px -3px rgb(0 0 0 / 0.1)",
  },
  animation: {
    transition: {
      fast: "150ms",
      normal: "300ms",
      slow: "500ms",
    },
  },
};
