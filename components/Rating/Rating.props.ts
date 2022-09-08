import { DetailedHTMLProps, HtmlHTMLAttributes } from "react";
import { FieldError } from "react-hook-form";

export interface RatingProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLParagraphElement>,HTMLParagraphElement> {
    isEditable?: boolean;
    rating: number;
    setRating?: (rating: number) => void;
    error?: FieldError;
}