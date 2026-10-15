/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./cv.html"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "on-primary": "#003640",
        "on-primary-container": "#00424f",
        "surface-container-highest": "#303638",
        "outline-variant": "#3d494c",
        "on-primary-fixed-variant": "#004e5c",
        "on-error-container": "#ffdad6",
        "tertiary-fixed": "#ffdcbf",
        "inverse-primary": "#00687a",
        "tertiary-container": "#e89337",
        "on-surface": "#dee3e6",
        "on-tertiary-container": "#5b3200",
        error: "#ffb4ab",
        "surface-container-lowest": "#090f11",
        surface: "#0e1416",
        "secondary-fixed": "#d8e2ff",
        outline: "#869397",
        "on-surface-variant": "#bcc9cd",
        "error-container": "#93000a",
        "secondary-container": "#0566d9",
        "inverse-on-surface": "#2b3133",
        "on-secondary-container": "#e6ecff",
        "surface-container-high": "#252b2d",
        "on-background": "#dee3e6",
        "inverse-surface": "#dee3e6",
        "surface-container-low": "#171d1e",
        tertiary: "#ffb873",
        "surface-tint": "#4cd7f6",
        "on-secondary-fixed": "#001a42",
        "tertiary-fixed-dim": "#ffb873",
        "on-tertiary": "#4b2800",
        "primary-fixed-dim": "#4cd7f6",
        "on-error": "#690005",
        background: "#0e1416",
        "on-secondary-fixed-variant": "#004395",
        "surface-bright": "#343a3c",
        "surface-dim": "#0e1416",
        "on-tertiary-fixed": "#2d1600",
        primary: "#4cd7f6",
        "surface-variant": "#303638",
        "on-tertiary-fixed-variant": "#6a3b00",
        "primary-container": "#06b6d4",
        "on-primary-fixed": "#001f26",
        "secondary-fixed-dim": "#adc6ff",
        "primary-fixed": "#acedff",
        secondary: "#adc6ff",
        "on-secondary": "#002e6a",
        "surface-container": "#1b2122"
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px"
      },
      spacing: {
        "margin-desktop": "64px",
        "stack-lg": "48px",
        "stack-sm": "8px",
        gutter: "24px",
        "margin-mobile": "20px",
        "stack-md": "24px",
        "container-max": "1280px",
        unit: "4px"
      },
      fontFamily: {
        "body-md": ["Inter", "sans-serif"],
        "body-lg": ["Inter", "sans-serif"],
        "display-xl-mobile": ["Montserrat", "sans-serif"],
        "display-xl": ["Montserrat", "sans-serif"],
        code: ["Geist", "monospace"],
        "headline-lg": ["Montserrat", "sans-serif"],
        "headline-md": ["Montserrat", "sans-serif"],
        "label-md": ["Geist", "sans-serif"]
      },
      fontSize: {
        "body-md": ["16px", { lineHeight: "1.6", fontWeight: "400" }],
        "body-lg": ["18px", { lineHeight: "1.6", fontWeight: "400" }],
        "display-xl-mobile": ["38px", { lineHeight: "1.2", fontWeight: "800" }],
        "display-xl": ["56px", { lineHeight: "1.15", letterSpacing: "-0.02em", fontWeight: "800" }],
        code: ["14px", { lineHeight: "1.5", fontWeight: "400" }],
        "headline-lg": ["32px", { lineHeight: "1.3", fontWeight: "700" }],
        "headline-md": ["22px", { lineHeight: "1.4", fontWeight: "600" }],
        "label-md": ["14px", { lineHeight: "1", letterSpacing: "0.05em", fontWeight: "500" }]
      }
    }
  }
}
