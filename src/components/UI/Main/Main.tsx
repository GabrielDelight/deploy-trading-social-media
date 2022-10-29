import React from "react";
import Aside from "../Aside/Aside";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import classes from "./Main.module.css";
interface Props {
  children: JSX.Element | JSX.Element[];
}
const Main: React.FC<Props> = ({ children }) => {
  return (
    <>
      <main className={classes.main}>
        <Aside />
        <article className={classes.article}>
          <Header />
          <section className={classes.section}>{children}</section>
        </article>
      </main>
    </>
  );
};

export default Main;
