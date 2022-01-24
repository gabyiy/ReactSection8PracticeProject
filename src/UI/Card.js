import styles from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={`${styles.card} ${props.className}`}>{props.children}</div>

    //asa adaugam de forma dinamica ce avem in card.module.css si cu props className spunem ca putem sa
    // folosim className unde  dorim sa adaugam card  (adica Card className)si acepta props pe care le avem la css din componentu respecti ,daca am avea (Card clssNameSkimbat) ar trebuie sa folosim  acest alias cand dorim sa selection o clasa  adiacenta componentului respectiv
  );
};
export default Card;
