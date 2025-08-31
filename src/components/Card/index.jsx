import "./card.scss"

export default (props) => {
    return (
        <article 
            className={props.className} 
            style={{ backgroundImage: `url(${props.image})` }}
        >
            <p className={props.className}>{props.children}</p>
        </article>
    )
}