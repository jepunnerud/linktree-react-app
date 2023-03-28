import Header from "./Header"
import TextArea from "./TextArea"
import Btn from "./Btn"

const About = () => {
    return (
        <div>
            <Header text="About" />
            <TextArea text="I created this linktree web app to practice using ReactJS, HTML and CSS." />
            <Btn text="Home page" route="/linktree-react-app/" />
        </div>
    )
}

export default About