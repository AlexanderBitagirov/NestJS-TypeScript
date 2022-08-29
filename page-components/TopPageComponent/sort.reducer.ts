import { SortEnum } from "../../components/Sort/Sort.props";
import { CourseModel } from "../../interfaces/course.interface";

export type SortActions = { type: SortEnum.Price } | { type: SortEnum.Rating };

export interface SortReducerState {
    sort: SortEnum;
    courses: CourseModel[];
}

export const  sortReducer = (state: SortReducerState, action: SortActions): SortReducerState => {
    switch(action.type) {
        case SortEnum.Rating:
            return {
                sort: SortEnum.Rating,
                courses: state.courses.sort((a, b) => a.initialRating > b.initialRating ? -1 : 1)
            };
        case SortEnum.Price:
            return {
                sort: SortEnum.Price,
                courses: state.courses.sort((a, b) => a.price > b.price ? 1 : -1)
                };
        default:
            throw new Error("Неправильный тип сортировки");
    }
};