import React from "react";
import { BsCamera, BsCameraFill } from "react-icons/bs";
import Main from "../components/UI/Main/Main";
import classes from "../styles/CreateGroupStyles.module.css";
const CreateGroup = () => {
  return (
    <Main>
      <main className={classes.main}>
        <aside className={classes.aside}>
          <div className={classes.create_div_container}>
            <div>
              <i>
                <BsCameraFill />
              </i>
              <p>Click to change Image</p>
            </div>
          </div>
        </aside>
        <article className={classes.article}>
          <section className={classes.section}>
            <div className={classes.form_container}>
              <input type="text" placeholder="Group Name" />
              <br />
              <textarea
                name=""
                id=""
                placeholder="Describe Your Group..."
              ></textarea>
              <br />
              <input type="text" placeholder="Group Category" />
              <div className={classes.button_section_container}>
                <button>Free</button>
                <button>Paid</button>
              </div>
              <input type="text" placeholder="Amount" />
              <br />
              <button className={classes.submut_button}>Create Group</button>
            </div>
          </section>
        </article>
      </main>
    </Main>
  );
};

export default CreateGroup;
