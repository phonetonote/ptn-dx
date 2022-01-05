import { globalStyle, style } from "@vanilla-extract/css";

export type FontWeight = "normal" | "bold";
type FontId = "open-sans" | "open-sans-condensed";

type FontMeta = {
  fallback: string;
  name: string;
  weights: {
    [weight in FontWeight]?: number;
  };
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
  },
  ["open-sans-condensed"]: {
    name: `Open Sans Condensed`,
    fallback: `sans-serif`,
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

// TODO vertical rhythm using leading

const normalStyle = {
  fontFamily: fonts["open-sans"].name,
  fontWeight: 400,
};

const headerStyle = {
  fontFamily: fonts["open-sans-condensed"].name,
  fontWeight: 700,
};

globalStyle("html", { ...normalStyle, fontSize: `${typeScale.p}px` });
globalStyle("h1", { ...headerStyle, fontSize: `${typeScale.h1}px` });
globalStyle("h2", { ...headerStyle, fontSize: `${typeScale.h2}px` });
globalStyle("h3", { ...headerStyle, fontSize: `${typeScale.h3}px` });
globalStyle("h4", { ...headerStyle, fontSize: `${typeScale.h4}px` });
globalStyle("small", { ...normalStyle, fontSize: `${typeScale.small}px` });
globalStyle("strong", { fontWeight: fonts["open-sans"].weights.bold });

export const hero = style([
  { ...headerStyle, fontSize: `${typeScale.hero}px` },
]);
