import React, { ReactNode, CSSProperties } from "react";
import { Link } from "react-router-dom";

type RoundedButtonTransType = "internal" | "external" | "other";
type SquareButtonColorType =
  | "primary"
  | "blue"
  | "dark"
  | "gray"
  | "outline"
  | "red"
  | "green";
type SquareButtonWidthType = "default" | "full" | number;
type SquareButtonHeightType = "default" | "full" | number;
type SquareButtonFontSizeType = "default" | number;
type SquareButtonTypeSubmit = "submit";

export type SquareButtonType = {
  trans?: RoundedButtonTransType;
  color?: SquareButtonColorType;
  width?: SquareButtonWidthType;
  height?: SquareButtonHeightType;
  fontSize?: SquareButtonFontSizeType;
  url?: string;
  onClick?: () => void;
  children: string | ReactNode;
  disabled?: boolean | undefined;
  gtmData?: string;
  type?: SquareButtonTypeSubmit;
};

export const SquareButton = (props: SquareButtonType) => {
  const {
    trans = "internal",
    color = "primary",
    width = "full",
    height = "default",
    fontSize = "default",
    url,
    onClick,
    children,
    disabled = undefined,
    gtmData,
    type,
  } = props;

  const SQUAREBUTTON_STYLE = {
    "--width": `${width}px`,
    "--height": `${height}px`,
    "--lineHeight": `${height}px`,
    "--fontSize": `${fontSize}px`,
  } as CSSProperties;

  const SQUAREBUTTON_CLASS = `rounded-[15px] h-[40px] relative block flex items-center justify-center transition-opacity 
    ${width === "full" ? "w-full" : `w-[var(--width)]`}
    ${
      height === "full"
        ? "h-full"
        : height === "default"
        ? "h-[45px]"
        : "h-[var(--height)]"
    }
    ${color === "primary" && "bg-[#4FD1C5] text-white"}
    ${height === "default" ? "leading-[40px]" : "leading-[var(--height)]"}
    ${color === "blue" && "bg-[#00A8FF] text-white"}
    ${color === "dark" && "bg-[#242424] text-white"}
    ${color === "gray" && "bg-[#8E8E8E] text-white"}
    ${color === "outline" && "border border-[#57585B] text-[#A0A0A0]"}
    ${color === "red" && "bg-[#DF4238] text-white"}
    ${color === "green" && "bg-[#00FFC280] text-white"}
    ${fontSize === "default" ? "text-base" : `text-[${fontSize}px]`}
    ${disabled ? "" : "fine:opacity-50 hover:fine:opacity-50 cursor-pointer"}`;
  return (
    <>
      {trans === "internal" && url ? (
        <Link
          style={SQUAREBUTTON_STYLE}
          className={SQUAREBUTTON_CLASS}
          to={url}
          onClick={onClick}
        >
          {children}
        </Link>
      ) : trans === "external" && url ? (
        <a
          style={SQUAREBUTTON_STYLE}
          className={SQUAREBUTTON_CLASS}
          href={url}
          onClick={onClick}
          target="_blank"
          data-gtm-click={gtmData}
        >
          {children}
        </a>
      ) : (
        <button
          type={type}
          style={SQUAREBUTTON_STYLE}
          className={SQUAREBUTTON_CLASS}
          onClick={onClick}
          disabled={!!disabled}
          data-gtm-click={gtmData}
        >
          {children}
        </button>
      )}
    </>
  );
};
