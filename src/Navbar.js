export default function Navbar() {
    return <nav className= "nav">
        <a href= "/" className="site-title">FTSN</a>
        <a href= "/" className="site-title"><i class="bi bi-thermometer-half"></i></a>
    

        <ul>
            <li>
                <a href = "/about">About Us </a>
                </li>

                <li>
                <a href = "/github">Github</a>

            </li>
        </ul>

    </nav>
}