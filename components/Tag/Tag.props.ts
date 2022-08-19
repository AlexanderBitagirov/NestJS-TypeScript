import { DetailedHTMLProps, HtmlHTMLAttributes, ReactNode } from "react";

export interface TagProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLParagraphElement>,HTMLParagraphElement> {
    size?: 's' | 'm' | 'l';
    children: ReactNode;
    color?: 'ghost' | 'red' | 'grey' | 'green' | 'primary';
    href?: string
}