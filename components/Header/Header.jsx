import Link from "next/link";
import styles from "../../styles/Header.module.css";

const Header = () => {
  return (
    <>
      <div className={styles.headerWrapper}>
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <div className={styles.logo}>
              {/* <Image
                src={"/images/header-logo.webp"}
                alt="logo of the site"
                layout="responsive"
                width={"100%"}
                height={"100%"}
                objectFit="cover"
              /> */}
              <h3>ReachReporting</h3>
            </div>
            <nav>
              <ul className={styles.navContainer}>
                <li>
                  <Link href={"/features"}>
                    <a>Features</a>
                  </Link>
                </li>
                <li>
                  <Link href={"/pricing"}>
                    <a>Pricing</a>
                  </Link>
                </li>
                <li>
                  <Link href={"/tutorials"}>
                    <a>Tutorials</a>
                  </Link>
                </li>
                <li>
                  <Link href={"/login"}>
                    <a>Login</a>
                  </Link>
                </li>
                <li>
                  <Link href={"/registration"}>
                    <button className={`${styles.btnPrimary}`}>
                      Start Trail
                    </button>
                  </Link>
                </li>
                <li>
                  <Link href={"/demo"}>
                    <button className={`${styles.btnSecondary}`}>
                      Get A Demo
                    </button>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
