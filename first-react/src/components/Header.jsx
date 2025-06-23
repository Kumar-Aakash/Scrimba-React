import globeImg from "../assets/globe.svg";

function Header() {
    return (
        <header className="header">
            <img src={globeImg} alt="Globe" width="25" />
            <h1 className="headerText">My Travel Journal</h1>
        </header>
    )
}

export default Header;