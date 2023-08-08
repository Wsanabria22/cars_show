import { MouseEventHandler } from "react";

export interface CustomBottomProps {
  title: string;
  continerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
}

export interface SearchManufacturerProps {
  manufacturer: string;
  setManufacturer: (manufacturer:string) => void;
}