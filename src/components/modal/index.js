import Button from "react-bootstrap/Button";
import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import DataCard from "../card";
import styles from "./styles.module.scss";

const ComparsionModal = ({ onHide, show, data }) => {
  const [id, setId] = useState({});
  let powerstats = [];
  if (data?.length) {
    powerstats = Object.keys(data[0]?.powerstats);
  }

  const mouseEnter = (value) => {
    let highest = data[0];
    for (let i = 1; i < data.length; i++) {
      if (highest.powerstats[value] < data[i].powerstats[value]) {
        highest = data[i];
      }
    }
    setId({ id: highest.id });
  };

  return (
    <Modal
      show={show}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">Comparsion</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className={styles.dataContainer}>
          <div className={styles.powerstateContainer}>
            <h5 className="title">Powersats</h5>
            {powerstats.map((i, key) => {
              return (
                <h6
                  className={styles.powerstateText}
                  key={key}
                  onMouseEnter={() => mouseEnter(i)}
                  onMouseLeave={() => setId()}
                >
                  {i}
                </h6>
              );
            })}
          </div>
          <div className={styles.modalCard}>
            {data?.map((item, index) => {
              return <DataCard item={item} key={index} id={id} />;
            })}
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};
export default ComparsionModal;
