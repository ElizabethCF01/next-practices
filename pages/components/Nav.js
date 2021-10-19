import Link from 'next/link'
import Image from 'next/image'

const Nav = () => {
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top shadow-sm">
            <div className="container-fluid">
                <Link href="/">
                    <a className="navbar-brand">
                    RICK & MORTY
                    </a>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link href="/">
                                <a className="nav-link active" aria-current="page">Home</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/character">
                                <a className="nav-link active" >Characters</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/episodes">
                                <a className="nav-link active">Episodes</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default Nav