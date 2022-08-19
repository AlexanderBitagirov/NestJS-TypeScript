import { DetailedHTMLProps, HtmlHTMLAttributes, ReactNode } from "react";

export interface RaitingProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLParagraphElement>,HTMLParagraphElement> {
    isEditable?: boolean;
    raiting: number;
    setRating?: (rainig: number) => void
}