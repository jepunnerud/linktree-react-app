import Header from "./Header"
import TextArea from "./TextArea"
import Btn from "./Btn"

const About = () => {
    const aboutText = "I created this linktree web app to practice using ReactJS, HTML and CSS.";
    return (
        <div>
            <Header text="About" />
            <TextArea text={aboutText} />
            <Btn text="Home page" route="/linktree-react-app/" />
        </div>
    )
}

export default About