import styles from "./Menu.module.css";
import cn from "classnames";
import { useContext } from "react";
import { AppContext } from "../../context/app.context";
import { FirstLevelMenuItem, PageItem } from "../../interfaces/menu.interface";
import CoursesIcon from "./icons/courses.svg";
import ProductsIcon from "./icons/products.svg";
import BooksIcon from "./icons/books.svg";
import ServicesIcon from "./icons/services.svg";
import { PageLevelCategory } from "../../interfaces/page.interface";
import Link from "next/link";
import { useRouter } from "next/router";


const firstLevelMenu: FirstLevelMenuItem[] = [
    {route: 'courses' , name: 'Курсы', icon: <CoursesIcon/> , id: PageLevelCategory.Courses},
    {route: 'services' , name: 'Сервисы', icon: <ServicesIcon/> , id: PageLevelCategory.Services},
    {route: 'books' , name: 'Книги', icon: <BooksIcon/> , id: PageLevelCategory.Books},
    {route: 'products' , name: 'Товары', icon: <ProductsIcon/> , id: PageLevelCategory.Products}

];

export const Menu = ():JSX.Element => {

    const {menu, setMenu, firstCategory} = useContext(AppContext);
    const router = useRouter();
    
    const openSecondLevel = (secondCategory: string) => {
        setMenu && setMenu(menu.map(m => {
            if(m._id.secondCategory === secondCategory) {
                m.isOpened = !m.isOpened;
            }
            return m;
        }));
    };

    const buildFirstLevel = () => {
        return (
            <>
                {firstLevelMenu.map(m => (
                    <div key={m.route}>
                         <Link href={`/${m.route}`}>
                            <a>
                                <div className={cn(styles.firstLevel, {
                                        [styles.firstLevelActive]: m.id === firstCategory
                                    })}>
                                    {m.icon}
                                    <span>{m.name}</span>
                                </div>
                            </a>
                         </Link>
                        {m.id === firstCategory && buildSecondLevel(m)}
                    </div>
                ))}
            </>
        );
    };

    const buildSecondLevel = (MenuItem: FirstLevelMenuItem) => {

        return(
            <div className={styles.secondBlock}>
                {menu.map(m=> {
                    if(m.pages.map(p=>p.alias).includes(router.asPath.split("/")[2])) {
                        m.isOpened = true;
                    }
                    return (
                    <div key={m._id.secondCategory}>
                        <div className={styles.secondLevel} onClick={()=>openSecondLevel(m._id.secondCategory)}>{m._id.secondCategory}</div>   
                        <div className={cn(styles.secondLevelBlock, {
                            [styles.secondLevelBlockOpened]: m.isOpened
                            })}>
                            {buildThirdLevel(m.pages, MenuItem.route)}
                        </div>
                    </div>
                    );
                })};
            </div>
        );
    };

    const buildThirdLevel = (pages: PageItem[], route: string) => {
        return (
            pages.map(pages => (
                <Link href={`/${route}/${pages.alias}`} key= {pages._id}>
                    <a  className={cn(styles.thirdLevel, {
                        [styles.thirdLevelActive]: `/${route}/${pages.alias}` === router.asPath
                    })}>
                        {pages.category}
                    </a>
                </Link>
            ))
        );
    };
    
    
    
    return (
        <div className={styles.menu}>
            <ul>
                {buildFirstLevel()}
            </ul>
        </div>
    );
};