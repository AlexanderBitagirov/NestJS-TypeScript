import styles from "./Sidebar.module.css";
import cn from "classnames";
import { SideBarProps } from "./SideBar.props";
import { Menu } from "../Menu/Menu";
import Logo from "../logo.svg";
import { Search } from "../../components";

export const SideBar = ({className,...props}: SideBarProps):JSX.Element => {
    return(
        <div  className={cn(className, styles.sidebar)} {...props}>
            <div className={styles.logo}>
                <Logo/>
                <span >Courses</span>
            </div>
            <Search/>
            <Menu/>
        </div>
    );
};