import { DetailedHTMLProps, HtmlHTMLAttributes } from "react";

export interface ReviewFormProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>,HTMLDivElement> {
    courseId: string
}