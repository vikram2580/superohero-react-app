import React, { useRef, useEffect } from "react";
import styles from "./styles.module.scss";


/**
 * function for window click outside
 * @param {*} ref
 * @param {*} setShowResult
 */
const useOutsideAlerter = (ref, setShowResult) => {
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setShowResult(false);
      }
    };
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
};

const Header = ({
  selectedItem,
  data,
  showResult,
  onChange,
  selectItem,
  setShowResult,
}) => {
  const divRef = useRef(null);
  useOutsideAlerter(divRef, setShowResult);
  return (
    <div className={styles.topnav}>
      <div className="search-container">
        <input
          className={styles.searchBar}
          type="text"
          placeholder="Search Superheros.."
          name="search"
          onChange={onChange}
        />
        {showResult && (
          <div ref={divRef} className={styles.searchDropdown}>
            {data?.map((item, key) => {
              const isSelected = selectedItem.find((it) => it.id === item.id);
              const isDisable = !isSelected && selectedItem.length === 5;
              return (
                <div className={styles.dropdownMenu} key={key}>
                  <label>
                    <input
                      type="checkbox"
                      onChange={(e) => {
                        selectItem(item, e);
                      }}
                      value={item.id}
                      disabled={isDisable ? true : false}
                    />
                    {item.name}
                  </label>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
export default Header;
