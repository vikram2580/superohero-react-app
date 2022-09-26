import Card from "react-bootstrap/Card";
import styles from "./styles.module.scss";

const Itemdetail = ({ item, isNotModal, id }) => {
  return (
    <Card
      className={`${styles.heroCard} ${
        id?.id === item?.id ? styles.highlight : ""
      } ${isNotModal ? "" : styles.modalcard}`}
    >
      <Card.Img src={item?.image?.url} className={styles.cardImage} />
      {isNotModal && (
        <Card.Body>
          <Card.Title className={styles.heroName}>{item?.name}</Card.Title>
          <Card.Text className={styles.heading}>Biography :-</Card.Text>
          <Card.Text>
            Full Name - {item?.biography?.["full-name"]} <br />
            Place of Birth- {item?.biography?.["place-of-birth"]} <br />
          </Card.Text>

          <Card.Text className={styles.heading}>Powerstats :-</Card.Text>
          <Card.Text>
            Combat - {item?.powerstats?.combat} <br />
            Durability- {item?.powerstats?.durability} <br />
            Intelligence- {item?.powerstats?.intelligence}
            <br />
            Power- {item?.powerstats?.power} <br />
            Speed- {item?.powerstats?.speed} <br />
            Strength-{item?.powerstats?.strength}
          </Card.Text>
        </Card.Body>
      )}
    </Card>
  );
};

export default Itemdetail;
