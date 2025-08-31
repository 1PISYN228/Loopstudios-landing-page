import "./header.scss";
import { ReactComponent as LogoSVG } from "@/assets/icons/logo.svg";
import { ReactComponent as BurgerSVG } from "@/assets/icons/icon-hamburger.svg";
import Burger from "@/components/Burger";


export default () => {
    return (
        <header className="header">
            <Burger />
            <div className="header__div">
                <LogoSVG />
                <nav>
                    <ul className="header__div__nav">
                        <li><a href="" className="header__nav-item">About</a></li>
                        <li><a href="" className="header__nav-item">Careers</a></li>
                        <li><a href="" className="header__nav-item">Events</a></li>
                        <li><a href="" className="header__nav-item">Products</a></li>
                        <li><a href="" className="header__nav-item">Support</a></li>
                    </ul>
                    <button className="burger-menu" data-js-burger-open><BurgerSVG/></button>
                </nav>
            </div>
            <p className="header__text">IMMERSIVE<br/>EXPERIENCES<br/>THAT DELIVER</p>
        </header>
    )
}