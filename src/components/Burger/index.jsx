import "./burger.scss"
import { ReactComponent as LogoSVG } from "@/assets/icons/logo.svg";
import { ReactComponent as CloseSVG } from "@/assets/icons/icon-close.svg"

export default () => {
    return (
        <section className="burgerComp" data-js-burgerMenu>
            <div className="burgerComp__firstDiv">
                <LogoSVG />
                <button className="burgerComp__buttonClose" data-js-burger-close><CloseSVG /></button>
            </div>
            <nav>
                <ul className="burgerComp__nav">
                    <li><a href="" className="burgerComp__nav__item">About</a></li>
                    <li><a href="" className="burgerComp__nav__item">Careers</a></li>
                    <li><a href="" className="burgerComp__nav__item">Events</a></li>
                    <li><a href="" className="burgerComp__nav__item">Products</a></li>
                    <li><a href="" className="burgerComp__nav__item">Support</a></li>
                </ul>
            </nav>
        </section>
    )
}