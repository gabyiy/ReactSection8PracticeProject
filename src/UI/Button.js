import styles from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      className={styles.button}
      type={props.type || "button"}
      onClick={props.onClick}
      //aici   cu on click acesam ce avem la onlick din componentu unde il chemam
    >
      {props.children}
    </button>
  );
  //asa specificam ca type buton vrem sa fie definit dinafara de unde s utilizeaza sau daca nu e definfint per
  //defact sa indeplineasca functia de button,asa primim si  handleru si numele butonului
};
export default Button;
