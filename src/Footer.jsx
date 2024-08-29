

function Footer(props) {
    const theme = props.theme
    return(
        <div id={theme}>
            <footer>
                <div className="container">
                    <p>Developed by Ayonimofe Atoyebi</p>
                </div>
            </footer>
        </div>
    );
}

export default Footer;