const SocialIcons = () => {
  const styles = {
    icon: {
      textDecoration: "none",
      fontSize: "22px",
      padding: "10px",
      transition: "0.2s ease-in",
    },
  };

  return (
    <div className="socialIcons" style={styles.socialIcons}>
      <a className="icon" style={styles.icon} href="https://github.com/ravinduh">
        <i className="fa-brands fa-github" aria-hidden="true" title="Ravindu's GitHub Profile"></i>
      </a>
      <a className="icon" style={styles.icon} href="https://www.linkedin.com/in/ravinduhasantha/">
        <i className="fa-brands fa-linkedin" aria-hidden="true" title="Ravindu's LinkedIn Profile"></i>
      </a>
    </div>
  );
};

export default SocialIcons;
