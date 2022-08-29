import type { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { withLayout } from '../../layout/Layout';
import axios from "axios";
import { MenuItem } from '../../interfaces/menu.interface';
import { PageLevelCategory, PageModel } from '../../interfaces/page.interface';
import { ParsedUrlQuery } from 'querystring';
import { CourseModel } from '../../interfaces/course.interface';
import { firstLevelMenu } from '../../helpers/helpers';
import { TopPageComponent } from '../../page-components';


function TopPage({firstCategory , page , courses }:TopPageProps):JSX.Element {

    return (
        <>
            <TopPageComponent firstCategory ={firstCategory} page={page} courses={courses}/>
        </>    
        );
}

export default withLayout(TopPage);

export const getStaticPaths: GetStaticPaths = async () => {
    
    let paths: string[] = [];

    for(const m of firstLevelMenu) {
        const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
            firstCategory: m.id
        });
        paths = paths.concat(menu.flatMap(el => el.pages.map(p => `/${m.route}/${p.alias}`)));
    }

    return {
        paths,
        fallback: true
    };
};

export const getStaticProps: GetStaticProps<TopPageProps> = async ({params}: GetStaticPropsContext<ParsedUrlQuery>) => {
    
    if(!params) {
        return {
            notFound:true
        };
    }

    const firstCategoryItem = firstLevelMenu.find(m => m.route === params.type);

    if(!firstCategoryItem) {
        return {
            notFound:true
        };
    }

    try {
        const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
            firstCategory: firstCategoryItem.id
        });

        if(menu.length === 0) {
            return {
                notFound: true
            };
        }

        const { data: page } = await axios.get<PageModel>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/byAlias/' + params.alias);
        const { data: courses } = await axios.post<CourseModel[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/product/find/', {
            category: page.category,
            limit: 10
        });
    
        return {
            props: {
            menu,
            firstCategory: firstCategoryItem.id,
            page,
            courses
            }
        };
    } catch {
        return {
            notFound: true
        };
    }


};

interface TopPageProps extends Record<string, unknown> {
    menu: MenuItem[];
    firstCategory: PageLevelCategory;
    page: PageModel;
    courses: CourseModel[];
}