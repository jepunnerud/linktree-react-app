import Header from "./Header"
import Btn from "./Btn"
import Links from "./Links"

const Home = () => {
    const links = [
        {
            name: "LinkedIn",
            link: "https://www.linkedin.com/in/jakobpunnerud-208771233/",
        },
        {
            name: "GitHub",
            link: "https://github.com/jepunnerud",
        },
        {
            name: "Email",
            link: "mailto:jepunnerud@gmail.com",
        },
        {
            name: "Phone",
            link: "tel: +4740465312",
        },
        {
            name: "Instagram",
            link: "https://www.instagram.com/jakobpunnerud/",
        },
        {
            name: "Facebook",
            link: "https://www.facebook.com/jakob.punnerud/",
        },
        {
            name: "Spotify",
            link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        }
    ]

    return (
        <div>
            <Header text="Jakob Eilertsen Punnerud - Linktree" />
            <Links links={links} />
            <Btn text="About" route="/linktree-react-app/about" />
        </div>
    )
}

export default Home