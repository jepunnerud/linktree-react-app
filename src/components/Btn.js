import { Link } from "react-router-dom"

const Btn = ({ text, route }) => {
    return (
        <Link to={route} className="clickable btn hvr-shrink">
            {text}
        </Link>
    )
}

export default Btn