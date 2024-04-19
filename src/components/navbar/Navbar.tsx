import { Link } from "react-router-dom";

const Navbar = () => {
    const links = [
        {
            text: "Home",
            to: "/"
        },
        {
            text: "About",
            to: "/about"
        },
        {
            text: "Products",
            to: "/products"
        }
    ]
    return <div >
        {
            links.map((link, index) => {
                return <Link key={index} to={link.to}>{link.text}</Link>
            })
        }
    </div>
}

export default Navbar;