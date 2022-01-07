import { palette } from "./palette";
import { darken, lighten, rgba, saturate } from "polished";

const brand = palette.orange["400"];
const brandAccent = palette.teal["600"];
const brandAccentSoft = palette.green["100"];
const brandAccentLight = palette.green["300"];

const brandAccentActive = darken(0.05, brandAccent);
const brandAccentHover = lighten(0.05, brandAccent);
const brandAccentSoftActive = darken(0.05, brandAccentSoft);
const brandAccentSoftHover = darken(0.025, brandAccentSoft);

const formAccent = palette.blue["400"];
const critical = palette.red["600"];
const focus = rgba(palette.blue["200"], 0.7);

export const typographyTokens = {
  fontWeight: {
    regular: 400,
    strong: 700,
  },
  heading: {
    weight: {
      weak: "strong",
      regular: "strong",
    },
    level: {
      "1": {
        mobile: {
          fontSize: 33,
          rows: 10,
        },
        tablet: {
          fontSize: 40,
          rows: 11,
        },
      },
      "2": {
        mobile: {
          fontSize: 28,
          rows: 9,
        },
        tablet: {
          fontSize: 33,
          rows: 10,
        },
      },
      "3": {
        mobile: {
          fontSize: 23,
          rows: 9,
        },
        tablet: {
          fontSize: 23,
          rows: 9,
        },
      },
      "4": {
        mobile: {
          fontSize: 19,
          rows: 7,
        },
        tablet: {
          fontSize: 19,
          rows: 7,
        },
      },
    },
  },
  text: {
    xsmall: {
      mobile: {
        fontSize: 12,
        rows: 5,
      },
      tablet: {
        fontSize: 12,
        rows: 5,
      },
    },
    small: {
      mobile: {
        fontSize: 14,
        rows: 5,
      },
      tablet: {
        fontSize: 14,
        rows: 5,
      },
    },
    standard: {
      mobile: {
        fontSize: 16,
        rows: 6,
      },
      tablet: {
        fontSize: 16,
        rows: 6,
      },
    },
    large: {
      mobile: {
        fontSize: 18,
        rows: 7,
      },
      tablet: {
        fontSize: 18,
        rows: 7,
      },
    },
  },
  contentWidth: {
    xsmall: 400,
    small: 660,
    medium: 940,
    large: 1280,
  },
  grid: 4,
  touchableSize: 11,
  space: {
    gutter: 6,
    xxsmall: 1,
    xsmall: 2,
    small: 4,
    large: 8,
    xlarge: 12,
    xxlarge: 24,
  },
  transforms: {
    touchable: "scale(0.95)",
  },
  transitions: {
    fast: "transform .125s ease, opacity .125s ease",
    touchable: "transform 0.2s cubic-bezier(0.02, 1.505, 0.745, 1.235)",
  },
  border: {
    radius: {
      standard: "4px",
      large: "8px",
      xlarge: "12px",
    },
    width: {
      standard: 1,
      large: 2,
    },
    color: {
      brandAccent,
      brandAccentLight,
      caution: palette.yellow["300"],
      cautionLight: palette.yellow["200"],
      critical,
      criticalLight: palette.red["300"],
      field: palette.grey["400"],
      focus,
      formAccent,
      formAccentLight: palette.blue["200"],
      info: palette.aqua["200"],
      infoLight: palette.aqua["700"],
      neutral: palette.grey["700"],
      neutralLight: palette.grey["200"],
      neutralInverted: palette.white,
      positive: palette.green["700"],
      positiveLight: palette.green["300"],
      promote: palette.purple["800"],
      promoteLight: palette.purple["300"],
    },
    focusRingSize: 3,
    shadows: {
      small: [
        `0 2px 4px 0px ${rgba(palette.grey["800"], 0.1)}`,
        `0 2px 2px -2px ${rgba(palette.grey["800"], 0.1)}`,
        `0 4px 4px -4px ${rgba(palette.grey["800"], 0.2)}`,
      ].join(", "),
      medium: [
        `0 2px 4px 0px ${rgba(palette.grey["800"], 0.1)}`,
        `0 8px 8px -4px ${rgba(palette.grey["800"], 0.1)}`,
        `0 12px 12px -8px ${rgba(palette.grey["800"], 0.2)}`,
      ].join(", "),
      large: [
        `0 2px 4px 0px ${rgba(palette.grey["800"], 0.1)}`,
        `0 12px 12px -4px ${rgba(palette.grey["800"], 0.1)}`,
        `0 20px 20px -12px ${rgba(palette.grey["800"], 0.2)}`,
      ].join(", "),
    },
  },
  color: {
    foreground: {
      brandAccent,
      brandAccentLight,
      caution: palette.orange["700"],
      cautionLight: palette.yellow["200"],
      critical,
      criticalLight: palette.red["300"],
      formAccent,
      formAccentLight: palette.blue["200"],
      info: palette.aqua["700"],
      infoLight: palette.aqua["200"],
      link: formAccent,
      linkLight: palette.blue["200"],
      linkHover: formAccent,
      linkVisited: palette.purple["800"],
      linkLightVisited: palette.purple["300"],
      neutral: palette.grey["700"],
      neutralInverted: palette.white,
      positive: palette.green["700"],
      positiveLight: palette.green["300"],
      promote: palette.purple["800"],
      promoteLight: palette.purple["300"],
      rating: "#f57c00",
      secondary: palette.grey["500"],
      secondaryInverted: rgba("#fff", 0.65),
    },
    background: {
      body: palette.white,
      bodyDark: palette.black,
      brand,
      brandAccent,
      brandAccentActive,
      brandAccentHover,
      brandAccentSoft,
      brandAccentSoftActive,
      brandAccentSoftHover,
      caution: palette.yellow["300"],
      cautionLight: palette.yellow["100"],
      critical,
      criticalActive: darken(0.05, critical),
      criticalHover: saturate(0.1, lighten(0.05, critical)),
      criticalLight: palette.red["100"],
      criticalSoft: palette.red["100"],
      criticalSoftActive: darken(0.05, palette.red["100"]),
      criticalSoftHover: darken(0.025, palette.red["100"]),
      formAccent,
      formAccentActive: darken(0.05, formAccent),
      formAccentHover: saturate(0.5, lighten(0.075, formAccent)),
      formAccentSoft: palette.blue["50"],
      formAccentSoftActive: darken(0.05, palette.blue["50"]),
      formAccentSoftHover: darken(0.025, palette.blue["50"]),
      info: palette.aqua["700"],
      infoLight: palette.aqua["100"],
      neutral: palette.grey["700"],
      neutralActive: darken(0.05, palette.grey["700"]),
      neutralHover: lighten(0.05, palette.grey["700"]),
      neutralLight: palette.grey["100"],
      neutralSoft: palette.white,
      neutralSoftActive: darken(0.05, palette.white),
      neutralSoftHover: darken(0.025, palette.white),
      positive: palette.green["700"],
      positiveLight: palette.green["100"],
      promote: palette.purple["800"],
      promoteLight: palette.purple["100"],
      surface: palette.white,
      surfaceDark: palette.grey["800"],
    },
  },
};
