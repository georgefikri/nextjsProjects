import Link from 'next/link';
import Image from 'next/image';
import MainHeaderBackground from '@/components/main-header/main-header-background';
import logoImg from '@/assets/logo.png';
import styles from './main-header.module.css';
import NavLink from './nav-link';

export default function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
      <header className={styles.header}>
        <Link href="/" className={styles.logo}>
          <Image
            src={logoImg}
            alt="a plate with food"
            width={200}
            height={200}
            priority
          />
          Next Level Food
        </Link>
        <nav className={styles.nav}>
          <ul>
            <li>
              <NavLink href="/meals">Browse Meals</NavLink>
            </li>
            <li>
              <NavLink href="/community">foodies community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
