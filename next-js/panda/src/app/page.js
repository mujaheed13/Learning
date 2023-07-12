import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <nav className={styles.mainnav}>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
      </nav>
      <main className={styles.main}>
        <h1 className={styles.title}>Hunting Coder</h1>
        <p>A blog for hunting coders by a hunting coder</p>
        <div className="blogs">
          <h2>Popular Blogs</h2>
          <div className="blogItem">
            <h3>How to learn JavaScript 2023?</h3>
            <p>JavaScript is the used to design logic for the web</p>
          </div>
          <div className="blogItem">
            <h3>How to learn JavaScript 2023?</h3>
            <p>JavaScript is the used to design logic for the web</p>
          </div>
          <div className="blogItem">
            <h3>How to learn JavaScript 2023?</h3>
            <p>JavaScript is the used to design logic for the web</p>
          </div>
        </div>
      </main>
    </>
  );
}
