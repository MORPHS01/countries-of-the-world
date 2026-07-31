function Footer(props) {
  const theme = props.theme;
  return (
    <div id={theme}>
      <footer>
        <div className="container">
          <p>
            Developed by{" "}
            <a
              href="https://ayonimofe-portfolio-website.vercel.app/"
              style={{ color: "cyan" }}
            >
              Ayonimofe Atoyebi
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
