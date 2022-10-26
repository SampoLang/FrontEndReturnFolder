import { Link } from "react-router-dom"
export default function navbar() {
    return <nav className="nav">
        <ul>
            <li>
                <Link to="/">home</Link>
            </li>
            <li>
                <Link to="/about">about</Link>
            </li>
            <li>
                <Link to="/contact">contact</Link>
            </li>

        </ul>
    </nav>
}