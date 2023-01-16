import styles from './styles.module.scss';
export const Navbar = () => {
  return <>
    <a class={styles.link} href="/todo">todo</a>
    <a class={styles.link} href="/about">about</a>
  </>;
};
