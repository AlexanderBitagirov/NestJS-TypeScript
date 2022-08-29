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

