import "./footer.scss"
import { ReactComponent as LogoSVG } from "@/assets/icons/logo.svg"
import { ReactComponent as Facebook } from "@/assets/icons/icon-facebook.svg"
import { ReactComponent as Twitter } from "@/assets/icons/icon-twitter.svg"
import { ReactComponent as Pinterest } from "@/assets/icons/icon-pinterest.svg"
import { ReactComponent as Instagram } from "@/assets/icons/icon-instagram.svg"

export default () => {
    return (
        <footer className="footer">
            <div className="footer__firstDiv">
                <LogoSVG />
                <nav>
                    <ul className="footer__firstDiv__nav">
                        <li>
                            <a href="" className="footer__nav-item">About</a>
                        </li>
                        <li>
                            <a href="" className="footer__nav-item">Careers</a>
                        </li>
                        <li>
                            <a href="" className="footer__nav-item">Events</a>
                        </li>
                        <li>
                            <a href="" className="footer__nav-item">Products</a>
                        </li>
                        <li>
                            <a href="" className="footer__nav-item">Support</a>
                        </li>
                    </ul>
                </nav>
            </div>

            <div className="footer__secondDiv">
                <div className="footer__secondDiv__socials">
                    <a href="" className="socialImage"><Facebook /></a>
                    <a href="" className="socialImage"><Twitter /></a>
                    <a href="" className="socialImage"><Pinterest /></a>
                    <a href="" className="socialImage"><Instagram /></a>
                </div>
                <p className="footer__secondDiv__text">© 2021 Loopstudios. All rights reserved.</p>
            </div>
        </footer>
    )
}