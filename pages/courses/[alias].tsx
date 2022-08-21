import type { GetStaticPaths, GetStaticPathsContext, GetStaticPropsContext, NextPage } from 'next';
import { useState } from 'react';
import { withLayout } from '../../layout/Layout';
import axios from "axios";
import { MenuItem } from '../../interfaces/menu.interface';
import { PageModel } from '../../interfaces/page.interface';
import { ParsedUrlQuery } from 'querystring';
import { CourseModel } from '../../interfaces/course.interface';

const firstCategory = 0;


function Course({menu , page , courses }:CourseProps):JSX.Element {

    return (
        <>
            {courses.length}
        </>
    );
}

export default withLayout(Course);

export const getStaticPaths: GetStaticPaths = async () => {
    const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
        firstCategory
    });
    return {
        paths: menu.flatMap(m => m.pages.map(p => '/courses/' + p.alias)),
        fallback: true
    };
};

export const getStaticProps = async ({params}: GetStaticPropsContext<ParsedUrlQuery>) => {
    if(!params) {
        return {
            notFound:true
        };
    }
    const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
        firstCategory
    });
    const { data: page } = await axios.get<PageModel>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/byAlias/' + params.alias);
    const { data: courses } = await axios.post<CourseProps[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/product/find/', {
        category: page.category,
        limit: 10
    });

    return {
        props: {
        menu,
        firstCategory,
        page,
        courses
        }
    };
};

interface CourseProps extends Record<string, unknown> {
    menu: MenuItem[];
    firstCategory: number;
    page: PageModel;
    courses: CourseModel[];
}