import React, { ReactNode, useMemo } from "react";
import {
  fonts,
  TextScaleKey,
  textStyleClasses,
  TextWeight,
} from "../../styles/typography.css";

type TextProps = {
  align?: "center" | "left" | "right";
  sizeKey?: TextScaleKey;
  children: ReactNode | string;
  fontWeightKey?: keyof TextWeight;
};

const sizeToElement = (sizeKey: TextScaleKey): React.ElementType => {
  if (sizeKey === "p" || sizeKey === "small") {
    return sizeKey;
  } else {
    return "p";
  }
};

const Text = (props: TextProps) => {
  const {
    align: textAlign = "left",
    sizeKey = "p",
    fontWeightKey = "normal",
    children,
  } = props;
  const className = textStyleClasses[sizeKey];
  const Text = sizeToElement(sizeKey);

  const weights: TextWeight = fonts["open-sans"].weights as TextWeight;

  const textStyle = useMemo(
    () =>
      ({
        textAlign,
        fontWeight: weights[fontWeightKey],
      } as const),
    [textAlign]
  );

  return (
    <Text className={className} style={textStyle}>
      {children}
    </Text>
  );
};

export default Text;
