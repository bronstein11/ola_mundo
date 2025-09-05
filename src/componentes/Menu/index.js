import { useLocation } from "react-router-dom";
import styles from "./Menu.module.css";
import MenuLink from "../MenuLink";

export default function Menu() {

    const localizacao = useLocation();
    console.log(localizacao);

    return (
        <header>
            <nav className={styles.navegacao}>
                <MenuLink to="/">
                    Início
                </MenuLink>
                <MenuLink to="/sobremim">
                    Sobre mim
                </MenuLink>
            </nav>
        </header>
    )
};