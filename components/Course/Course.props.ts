import { DetailedHTMLProps, HtmlHTMLAttributes } from "react";
import { CourseModel } from "../../interfaces/course.interface";

export interface CourseProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>,HTMLDivElement> {
    course: CourseModel
}