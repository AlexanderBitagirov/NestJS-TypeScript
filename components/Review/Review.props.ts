import { DetailedHTMLProps, HtmlHTMLAttributes } from "react";
import { ReviewModel } from "../../interfaces/course.interface";

export interface ReviewProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>,HTMLDivElement> {
    review: ReviewModel
}