import { CourseModel } from "../../interfaces/course.interface";
import { PageLevelCategory, PageModel } from "../../interfaces/page.interface";

export interface TopPageComponentProps {
    firstCategory: PageLevelCategory;
    page: PageModel;
    courses: CourseModel[];
}