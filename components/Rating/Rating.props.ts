import { DetailedHTMLProps, HtmlHTMLAttributes } from "react";

export interface RatingProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLParagraphElement>,HTMLParagraphElement> {
    isEditable?: boolean;
    rating: number;
    setRating?: (rating: number) => void
}