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


const firstLevelMenu: FirstLevelMenuItem[] = [
    {route: 'courses' , name: 'Курсы', icon: <CoursesIcon/> , id: PageLevelCategory.Courses},
    {route: 'services' , name: 'Сервисы', icon: <ServicesIcon/> , id: PageLevelCategory.Services},
    {route: 'books' , name: 'Книги', icon: <BooksIcon/> , id: PageLevelCategory.Books},
    {route: 'products' , name: 'Товары', icon: <ProductsIcon/> , id: PageLevelCategory.Products}

];

export const Menu = ():JSX.Element => {

    const {menu, setMenu, firstCategory} = useContext(AppContext);
    
    const buildFirstLevel = () => {
        return (
            <>
                {firstLevelMenu.map(m => (
                    <div key={m.route}>
                        <a href={`/${m.route}`}>
                            <div className={cn(styles.firstLevel, {
                                [styles.firstLevelActive]: m.id === firstCategory
                            })}>
                                {m.icon}
                                <span>{m.name}</span>
                            </div>
                        </a>
                        {m.id === firstCategory && buildSecondLevel(m)}
                    </div>
                ))}
            </>
        );
    };

    const buildSecondLevel = (MenuItem: FirstLevelMenuItem) => {
        return(
            <div className={styles.secondBlock}>
                {menu.map(menu=> (
                    <div key={menu._id.secondCategory}>
                        <div className={styles.secondLevel}>
                            {menu._id.secondCategory}
                        </div>   
                            <div className={cn(styles.secondLevelBlock, {
                                [styles.secondLevelBlockOpened]: menu.isOpened
                            })}>
                                {buildThirdLevel(menu.pages, MenuItem.route)}
                            </div>
                    </div>
                ))};
            </div>
        );
    };

    const buildThirdLevel = (pages: PageItem[], route: string) => {
        return (
            pages.map(pages => (
                <a href={`/${route}/${pages.alias}`} className={cn(styles.thirdLevel, {
                    [styles.thirdLevelActive]: false
                })}>
                    {pages.category}
                </a>
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