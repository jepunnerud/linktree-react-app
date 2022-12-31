import Header from "./components/Header";
import Links from "./components/Links";

function App() {
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
            link: "https://open.spotify.com/user/jepunnerud?si=fa67f763040044ff",
        }
    ]

    return (
        <div className="App">
            <Header header="Jakob Eilertsen Punnerud - Linktree" />
            <Links links={links} />
        </div>
    );
}

export default App;
