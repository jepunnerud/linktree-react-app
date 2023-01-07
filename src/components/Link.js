import { isMobile } from "react-device-detect"

const Link = ({ link }) => {
    return (
        <div onClick={() => window.open(link.link, "_blank")}
            className={`clickable link ${!isMobile && "hvr-shrink hvr-icon-pulse-grow"}`}>
            {link.name}
            <img src={require(`./icons/${link.name.toLowerCase()}.png`)} className={`icon ${!isMobile && "hvr-icon"}`} alt="" />
        </div>
    )
}

export default Link