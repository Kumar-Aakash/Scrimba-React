import globeImg from "../assets/globe.svg";

function Header() {
    return (
        <>
            <img src={globeImg} alt="Globe" width="25" /> <span className="headerText">My Travel Journal</span>
        </>
    )
}

export default Header;