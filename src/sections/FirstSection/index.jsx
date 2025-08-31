import "./firstSection.scss"
import { Image } from "minista"


export default () => {
    return (
        <section className="firstSection">
            <Image src="/src/assets/images/desktop/image-interactive.jpg" className="imageDesktop"/>
            <Image src="/src/assets/images/mobile/image-interactive.jpg" className="imageMobile" />
            <article className="firstSection__article">
                <h1 className="firstSection__article__title">THE LEADER IN<br className="firstSection__br"/>INTERACTIVE VR</h1>
                <p className="firstSection__article__text">Founded in 2011, Loopstudios has been producing world-class<br className="firstSection__br"/>
                virtual reality projects for some of the best companies around the<br className="firstSection__br"/>
                globe. Our award-winning creations have transformed<br className="firstSection__br"/>
                businesses through digital experiences that bind to their brand.</p>
            </article>
        </section>
    )
}