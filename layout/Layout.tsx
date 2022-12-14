import { LayoutProps } from "./Layout.props";
import styles from "./Layout.module.css";
import { Header } from "./Header/Header";
import { SideBar } from "./SideBar/SideBar";
import { Footer } from "./Footer/Footer";
import { FunctionComponent, PropsWithChildren } from "react";
import { AppContextProvider, IAppContext } from "../context/app.context";
import { Up } from "../components";


const Layout = ({ children}: LayoutProps):JSX.Element => {
    return(
        <div className={styles.wrapper}>
            <Header className={styles.header}/>
            <SideBar className={styles.sidebar}/>
                <div className={styles.body}>
                    {children}
                </div>
            <Footer className={styles.footer}/>
            <Up/>
        </div>
    );
};

export const withLayout= <T extends Record<string, unknown> & PropsWithChildren<IAppContext>>(Component: FunctionComponent<T>) => {
    return function withLayoutComponent(props: T) {
        return (
            <AppContextProvider menu={props.menu} firstCategory={props.firstCategory}>
                <Layout>
                    <Component {...props}/>
                </Layout>
            </AppContextProvider>
        );
    };
};