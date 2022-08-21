
import { LayoutProps } from "./Layout.props";
import styles from "./Layout.module.css";
import cn from "classnames";
import { Header } from "./Header/Header";
import { SideBar } from "./SideBar/SideBar";
import { Footer } from "./Footer/Footer";


export const Layout = ({ children}: LayoutProps):JSX.Element => {
    return(
        <>
        <Header/>
        <div>
            <SideBar/>
            <div>
                {children}
            </div>
        </div>
        <Footer/>
        </>
    );
};