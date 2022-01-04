import { globalStyle } from "@vanilla-extract/css";

globalStyle("*, *::before, *::after", {
  boxSizing: "border-box",
  margin: 0,
  padding: 0,
});

globalStyle("p, strong, h1, h2, h3, h4, .hero", {
  overflowWrap: `break-word`,
});

// TODO set base font to open sans 16px
