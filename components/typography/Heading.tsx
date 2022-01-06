import React, { ReactNode, useMemo } from "react";
import {
  HeaderScaleKey,
  headerStyleClasses,
} from "../../styles/typography.css";

type HeadingProps = {
  align?: "center" | "left" | "right";
  sizeKey?: HeaderScaleKey;
  children: ReactNode | string;
};

const sizeToElement = (sizeKey: HeaderScaleKey): React.ElementType => {
  if (
    sizeKey === "h1" ||
    sizeKey === "h2" ||
    sizeKey === "h3" ||
    sizeKey === "h4"
  ) {
    return sizeKey;
  } else if (sizeKey === "hero") {
    return "h1";
  } else {
    return "h2";
  }
};

const Heading = (props: HeadingProps) => {
  const { align: textAlign = "left", sizeKey = "h2", children } = props;
  const className = headerStyleClasses[sizeKey];
  const Heading = sizeToElement(sizeKey);

  const textStyle = useMemo(
    () =>
      ({
        textAlign,
      } as const),
    [textAlign]
  );

  return (
    <Heading className={className} style={textStyle}>
      {children}
    </Heading>
  );
};

export default Heading;
