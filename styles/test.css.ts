import { style } from "@vanilla-extract/css";
import { fontStyles, fonts } from "./typography.css";

export const layout = style({
  padding: `16px`,
  display: `flex`,
  flexDirection: `column`,
  alignItems: `flex-start`,
  gap: `16px`,
});

export const { small, p, h1, h2, h3, h4, hero } = fontStyles;

export const boldText = style([
  fontStyles["p"],
  {
    fontVariationSettings: `"wght" ${fonts["open-sans"].weights.bold}`,
  },
]);
