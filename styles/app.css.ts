import { globalFontFace, globalStyle } from "@vanilla-extract/css";
import { fonts } from "./typography.css";

globalFontFace(`"${fonts["open-sans"].name}"`, {
  fontDisplay: `optional`,
  fontStyle: `normal`,
  fontWeight: fonts["open-sans"].weights.normal,
  src: `url("${fonts["open-sans"].file}") format("${fonts["open-sans"].format}")`,
});

globalStyle("*, *::before, *::after", {
  boxSizing: "border-box",
  margin: 0,
  padding: 0,
});

globalStyle("p, strong", {
  overflowWrap: `break-word`,
  fontWeight: 400,
});

globalStyle("h1, h2, h3, h4, .hero", {
  overflowWrap: `break-word`,
  fontWeight: 700,
});
