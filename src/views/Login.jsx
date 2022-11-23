import FormLogin from "../components/forms/FormLogin";
import Styles from "./Login.module.css";

const User = () => {
  return (
    <section className={Styles["login-section"]}>
      <FormLogin />
    </section>
  )
}

export default User;
