import { FontMetrics } from "@capsizecss/core";
import openSansFontMetrics from "@capsizecss/metrics/openSans";
import openSansCondensedFontMetrics from "@capsizecss/metrics/openSansCondensedLight";
import { createTextStyle } from "@capsizecss/vanilla-extract";
import { style } from "@vanilla-extract/css";

export type FontWeight = "normal" | "bold";
type FontId = "open-sans" | "open-sans-condensed";

type FontMeta = {
  fallback: string;
  format: string;
  metrics: FontMetrics;
  name: string;
  file: string;
  weights: {
    [weight in FontWeight]?: number;
  };
};

type Fonts = Record<FontId, FontMeta>;

const FONT_DIR = "/fonts";

export const fonts: Fonts = {
  ["open-sans"]: {
    name: `Open Sans`,
    fallback: `sans-serif`,
    file: `${FONT_DIR}/OpenSans-VariableFont_wdth,wght.ttf`,
    format: `truetype-variations`,
    metrics: openSansFontMetrics,
    weights: {
      normal: 400,
      bold: 700,
    },
  },
  ["open-sans-condensed"]: {
    name: `Open Sans Condensed`,
    fallback: `sans-serif`,
    file: `${FONT_DIR}/OpenSansCondensed-Bold.ttf`,
    format: `truetype-variations`,
    metrics: openSansCondensedFontMetrics,
    weights: {
      bold: 700,
    },
  },
};

// https://type-scale.com
// Minor Third
// base: 16

type TypeScaleKey = "small" | "p" | "hero" | "h1" | "h2" | "h3" | "h4";

const typeScale: Record<TypeScaleKey, number> = {
  small: 13,
  p: 16,
  h4: 19,
  h3: 23,
  h2: 28,
  h1: 33,
  hero: 40,
};

type FontCssProps = {
  fontId: FontId;
  leading: number;
  size: number;
};

function calcFontCss({ fontId, leading, size }: FontCssProps) {
  return style([
    createTextStyle({
      fontMetrics: fonts[fontId].metrics,
      fontSize: size,
      leading,
    }),
    {
      fontFamily: `"${fonts[fontId].name}", ${fonts[fontId].fallback}`,
    },
  ]);
}

export const fontStyles: Record<TypeScaleKey, string> = {
  ["small"]: calcFontCss({
    fontId: "open-sans",
    leading: 16.5,
    size: typeScale.small,
  }),
  ["p"]: calcFontCss({
    fontId: "open-sans",
    leading: 16.5,
    size: typeScale.p,
  }),
  ["h4"]: calcFontCss({
    fontId: "open-sans-condensed",
    leading: 21,
    size: typeScale.h4,
  }),
  ["h3"]: calcFontCss({
    fontId: "open-sans-condensed",
    leading: 21,
    size: typeScale.h3,
  }),
  ["h2"]: calcFontCss({
    fontId: "open-sans-condensed",
    leading: 21,
    size: typeScale.h2,
  }),
  ["h1"]: calcFontCss({
    fontId: "open-sans-condensed",
    leading: 21,
    size: typeScale.h1,
  }),
  ["hero"]: calcFontCss({
    fontId: "open-sans-condensed",
    leading: 21,
    size: typeScale.hero,
  }),
};

export const fontFiles = Object.values(fonts).flatMap((font) => font.file);
