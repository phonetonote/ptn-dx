import { globalStyle, style } from "@vanilla-extract/css";
import { FontMetrics } from "@capsizecss/core";
import openSansMetrics from "@capsizecss/metrics/openSans";
import openSansCondensedMetrics from "@capsizecss/metrics/openSansCondensedLight";
import { createTextStyle, precomputeValues } from "@capsizecss/vanilla-extract";
import { createStyleObject } from "@capsizecss/core";

export type FontWeight = "normal" | "bold";

export type HeaderWeight = { bold: number };
export type TextWeight = { bold: number; normal: number };

type FontId = "open-sans" | "open-sans-condensed";

type FontMeta = {
  fallback: string;
  name: string;
  weights: HeaderWeight | TextWeight;
  metrics: FontMetrics;
};

type Fonts = Record<FontId, FontMeta>;

export const fonts: Fonts = {
  ["open-sans"]: {
    name: `Open Sans`,
    fallback: `sans-serif`,
    weights: {
      normal: 400,
      bold: 800,
    },
    metrics: openSansMetrics,
  },
  ["open-sans-condensed"]: {
    name: `Open Sans Condensed`,
    fallback: `sans-serif`,
    weights: {
      bold: 700,
    },
    metrics: openSansCondensedMetrics,
  },
};

// https://type-scale.com
// Minor Third
// base: 16

export type HeaderScaleKey = "hero" | "h1" | "h2" | "h3" | "h4";
export type TextScaleKey = "small" | "p";
export type TypeScaleKey = TextScaleKey | HeaderScaleKey;

export const typeScale: Record<TypeScaleKey, number> = {
  small: 13,
  p: 16,
  h4: 19,
  h3: 23,
  h2: 28,
  h1: 33,
  hero: 40,
};

// TODO vertical rhythm using leading

export const normalStyle = {
  fontFamily: `"${fonts["open-sans"].name}", ${fonts["open-sans"].fallback}`,
  fontWeight: 400,
};

export const headerStyle = {
  fontFamily: `"${fonts["open-sans-condensed"].name}", ${fonts["open-sans-condensed"].fallback}`,
  fontWeight: 700,
};

const calcCappedCss = (sizeKey: TypeScaleKey) => {
  const fontSize = typeScale[sizeKey];
  return createTextStyle({
    fontSize,
    leading: fontSize * 1.3,
    fontMetrics: fonts["open-sans-condensed"].metrics,
  });
};

export const headerStyleClasses: Record<HeaderScaleKey, string> = {
  ["hero"]: style([headerStyle, calcCappedCss("hero")]),
  ["h1"]: style([headerStyle, calcCappedCss("h1")]),
  ["h2"]: style([headerStyle, calcCappedCss("h2")]),
  ["h3"]: style([headerStyle, calcCappedCss("h3")]),
  ["h4"]: style([headerStyle, calcCappedCss("h4")]),
};

export const textStyleClasses: Record<TextScaleKey, string> = {
  ["small"]: style([normalStyle, calcCappedCss("small")]),
  ["p"]: style([normalStyle, calcCappedCss("p")]),
};

globalStyle("html", { ...normalStyle });
