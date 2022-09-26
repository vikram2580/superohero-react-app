import React, { useEffect, useState, useMemo } from "react";
import { APIS } from "../../api/endpoints";
import { getData } from "../../api/getData";
import Header from "../../components/header";
import debounce from "lodash.debounce";
import DataCard from "../../components/card";
import ComparsionModal from "../../components/modal";
import styles from "./styles.module.scss";
import Select from "react-select"
const Home = () => {
  const [data, setData] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [selectedItem, setSelectedItem] = useState([]);
  const [modalShow, setModalShow] = useState(false);

  /**
   *Search items
   * @param {*} name
   */
  const search = (event) => {
    getData(`${APIS.SEARCH_NAME}/${event.target.value}`).then((response) => {
      setData(response?.results);
      setShowResult(true);
    });
  };

  /**
   * Debounce
   */
  const debounceSerach = useMemo(() => {
    return debounce(search, 300);
  });

  /**
   * Select the search items
   * @param {*} item
   */
  const selectItem = (item, e) => {
    if (e?.target?.checked) {
      setSelectedItem((prev) => [...prev, item]);
    } else {
      let filterData = selectedItem.filter((i) => {
        return i.id !== item.id;
      });
      setSelectedItem(filterData);
    }
  };

  const colseModal = () => {
    setSelectedItem([]);
    setModalShow(false);
  };

  return (
    <>
      <div>
        <Header
          onChange={debounceSerach}
          data={data}
          showResult={showResult}
          selectItem={selectItem}
          selectedItem={selectedItem}
          setShowResult={setShowResult}
        />

        <div className={styles.dataContainer}>
          <div className="container">
            <div className="row">
              {selectedItem?.map((item, index) => {
                return (
                  <div className="col-lg-4">
                    <DataCard item={item} key={index} isNotModal={true} />
                  </div>
                );
              })}
            </div>
          </div>
          <div className={styles.buttonContainer}>
            {selectedItem?.length >= 2 && (
              <button
                className={styles.comparisionButton}
                onClick={() => setModalShow(true)}
              >
                Comparsion
              </button>
            )}
          </div>
        </div>
      </div>
      <ComparsionModal
        show={modalShow}
        onHide={colseModal}
        data={selectedItem}
        setSelectedItem={setSelectedItem}
      />
     
    
    </>
  );
};
export default Home;
