import styles from "@/app/styles/navbar.module.css"
import Link from "next/link";
import Image from "next/image";
import Nav from "./Nav";

const Header = () => {
  return (
    <header className={styles.main_header}>
    <div className={styles.navbar_brand}>
    <Link href="/" >
    <Image src="/logo3.png" alt="mi logo image" width={130} height={30}/>
    </Link>
    </div>
<Nav />
    </header>
  )
}

export default Header;
