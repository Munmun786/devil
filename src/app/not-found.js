import styles from "@/app/styles/common.module.css"
import Link from "next/link"
const NOtFound = () => {
  return (
    <section className={styles.container}>
        <div className={styles.error_page}>
            <h1>404</h1>
            <h2>NOt Found</h2>
            <p>Could not find request resource</p>
               <Link href="/">
                <button>
                    got to Home page
                </button>
               </Link>

        </div>
    </section>
      
    
  )
}

export default NOtFound
