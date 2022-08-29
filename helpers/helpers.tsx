import CoursesIcon from "./icons/courses.svg";
import ProductsIcon from "./icons/products.svg";
import BooksIcon from "./icons/books.svg";
import ServicesIcon from "./icons/services.svg";
import { PageLevelCategory } from "../interfaces/page.interface";
import { FirstLevelMenuItem } from "../interfaces/menu.interface";



export const firstLevelMenu: FirstLevelMenuItem[] = [
    {route: 'courses' , name: 'Курсы', icon: <CoursesIcon/> , id: PageLevelCategory.Courses},
    {route: 'services' , name: 'Сервисы', icon: <ServicesIcon/> , id: PageLevelCategory.Services},
    {route: 'books' , name: 'Книги', icon: <BooksIcon/> , id: PageLevelCategory.Books},
    {route: 'products' , name: 'Товары', icon: <ProductsIcon/> , id: PageLevelCategory.Products}

];


export const priceRu = (price: number): string=>  price.toString().replace(/\B(?=(\d{3})+(?!\d))/g , "" ).concat("₽");

export const delOfNum = (number:number , titles: [string, string, string]):string => {
    const cases = [2, 0, 1, 1, 1, 2]
    return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5 ) ? number % 10 : 5]];
};

