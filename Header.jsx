import chefLogo from "./public/images/chefNime2.png"

export default function Header() {
    return (
        <header className="nav-container">
            <nav className="nav-wrapper">
                <img className="nav-logo" src={chefLogo} alt="chef" />
                <h1 className="nav-text">Chef Nime</h1>
            </nav>
            </header>
    )
}