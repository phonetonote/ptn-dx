import { globalStyle, style } from "@vanilla-extract/css";

// this is temp until we have layout and box components
export const layout = style({
  padding: `16px`,
  display: `flex`,
  flexDirection: `column`,
  alignItems: `flex-start`,
  gap: `16px`,
});

globalStyle("*, *::before, *::after", {
  boxSizing: "border-box",
  margin: 0,
  padding: 0,
});

globalStyle("p, strong, h1, h2, h3, h4, .hero", {
  overflowWrap: `break-word`,
});
