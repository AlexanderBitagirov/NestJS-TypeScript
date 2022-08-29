import { Advantages, HhData, Htag, Ptag, Sort, Tag } from "../../components";
import { TopPageComponentProps } from "./TopPageComponent.props";
import styles from "./TopPageComponents.module.css";
import { PageLevelCategory } from "../../interfaces/page.interface";
import { SortEnum } from "../../components/Sort/Sort.props";
import { useReducer } from "react";
import { sortReducer } from "./sort.reducer";

export const TopPageComponent = ({page, courses, firstCategory}: TopPageComponentProps):JSX.Element => {
    
    const [{courses: sortedCourses , sort} , dispatchSort] = useReducer(sortReducer, {courses , sort: SortEnum.Rating});

    const setSort = (sort: SortEnum) => {
        dispatchSort({type: sort})
    }


    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>
                <Htag tag="h1">{page.title}</Htag>
                {courses && <Tag color="grey" size="m">{courses.length}</Tag>}
                <Sort sort={sort} setSort={setSort}/>
            </div>
            <div>
                {sortedCourses && sortedCourses.map(c => (<div key={c._id}>{c.title}</div>))}
            </div>
            <div className={styles.hhTitle}>
                <Htag tag="h2">Вакансии -{page.category}</Htag>
                <Tag color="red" size="m">hh.ru</Tag>
            </div>
            {firstCategory === PageLevelCategory.Courses && page.hh && <HhData {...page.hh}/>}
            {page.advantages && page.advantages.length > 0 && <>
                <Htag tag="h2"> Приемущества</Htag>
                <Advantages advantages={page.advantages}/>
            </>}
            
            {page.seoText && <div className={styles.seo} dangerouslySetInnerHTML={{__html: page.seoText}}/>}
            <Htag tag="h2"> Получаемые навыки</Htag>
            {page.tags.map(t => <Tag key={t} color="primary">{t}</Tag>)}        
        </div>
    );
};

//dangerouslySetInnerHTML использовал, потому знаю какие данные возвращаются, и данные приходят по https