import styles from "./ErrorModal.module.css";
import Card from "./Card";
import Button from "./Button";

const ErrorModal = (props) => {
  //cu ajutoru la props acesam functia care schimba statusul la error in null cea ce face ca putem vedea dinou formularu ,putem folosi onClick si din buton si din afata divului
  return (
    <div>
      <div className={styles.backdrop} onClick={props.onConfirm}></div>
      {/* inchizand cardu in inca un div si creend un div separat la care ii trecem clasa bacdrop care atat timp cat modalu este deschis nu putem sa interactionam cu alte elemente din pagina */}
      <Card className={styles.modal}>
        <header className={styles.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={styles.content}>
          <p>{props.message}</p>
        </div>
        <footer className={styles.actions}>
          <Button onClick={props.onConfirm}>Okey</Button>
        </footer>
      </Card>
    </div>
  );
};
export default ErrorModal;
