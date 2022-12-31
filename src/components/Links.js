import Link from "./Link"

const Links = ({ links }) => {
    return (
        <>
            {links.map((link) => (
                <Link
                    key={link.name}
                    link={link} />
            ))}
        </>
    )
}

export default Links