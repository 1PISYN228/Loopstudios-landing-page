import "./thirdSection.scss"
import Card from "@/components/Card"
import img1 from "@/assets/images/desktop/image-deep-earth.jpg"
import img2 from "@/assets/images/desktop/image-night-arcade.jpg"
import img3 from "@/assets/images/desktop/image-soccer-team.jpg"
import img4 from "@/assets/images/desktop/image-grid.jpg"
import img5 from "@/assets/images/desktop/image-from-above.jpg"
import img6 from "@/assets/images/desktop/image-pocket-borealis.jpg"
import img7 from "@/assets/images/desktop/image-curiosity.jpg"
import img8 from "@/assets/images/desktop/image-fisheye.jpg"

import imgMob1 from "@/assets/images/mobile/image-deep-earth.jpg"
import imgMob2 from "@/assets/images/mobile/image-night-arcade.jpg"
import imgMob3 from "@/assets/images/mobile/image-soccer-team.jpg"
import imgMob4 from "@/assets/images/mobile/image-grid.jpg"
import imgMob5 from "@/assets/images/mobile/image-from-above.jpg"
import imgMob6 from "@/assets/images/mobile/image-pocket-borealis.jpg"
import imgMob7 from "@/assets/images/mobile/image-curiosity.jpg"
import imgMob8 from "@/assets/images/mobile/image-fisheye.jpg"






const cards = [
  { title: "DEEP<br/>EARTH", desktop: img1, mobile: imgMob1 },
  { title: "NIGHT<br/>ARCADE", desktop: img2, mobile: imgMob2 },
  { title: "SOCCER<br/>TEAM VR", desktop: img3, mobile: imgMob3 },
  { title: "THE<br/>GRID", desktop: img4, mobile: imgMob4 },
  { title: "FROM UP<br/>ABOVE VR", desktop: img5, mobile: imgMob5 },
  { title: "POCKET<br/>BOREALIS", desktop: img6, mobile: imgMob6 },
  { title: "THE<br/>CURIOSITY", desktop: img7, mobile: imgMob7 },
  { title: "MAKE IT<br/>FISHEYE", desktop: img8, mobile: imgMob8 },
]

export default () => {
  return (
    <section className="thirdSection">
      {cards.map(({ title, desktop, mobile }, i) => (
        <div key={i}>
          <Card image={desktop} className="cardDesktop">
            <span dangerouslySetInnerHTML={{ __html: title }} className="cardDesktop__text"/>
          </Card>
          <Card image={mobile} className="cardMobile">
            <span dangerouslySetInnerHTML={{ __html: title }} className="cardMobile__text"/>
          </Card>
        </div>
      ))}

      <button className="thirdSection__buttonMobile">SEE ALL</button>
    </section>
  )
}