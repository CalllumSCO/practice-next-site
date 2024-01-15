import styles from "./footer.module.css"

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}></div>
      <div className={styles.text}>
        Callum's Sick New Next.js Website, please do not copy me thanks.
      </div>
    </div>
  )
}

export default Footer;