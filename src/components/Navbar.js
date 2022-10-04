function Navbar(props) {
    return (
        <div>
            <ul>
                <li>Home</li>
                <li>{props.navText}</li>
            </ul>
        </div>
    )
}

export default Navbar;