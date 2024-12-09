"use client";
import { useEffect, useState } from "react";
import styles from "./Units.module.css";
import ArrowDown from ".././../../assets/arrow-down.svg";
import AreaIcon from ".././../../assets/area.svg";
import ArrowRight from ".././../../assets/arrowRight.svg";

const Units = ({ data }) => {
  const [activeTab, setActiveTab] = useState("Villa Compound");
  const [expandedAccordion, setExpandedAccordion] = useState(null);
  const [tabData, setTabData] = useState({});

  // Toggle accordion
  const toggleAccordion = (id) => {
    setExpandedAccordion((prev) => (prev === id ? null : id));
  };

  useEffect(() => {
    setTabData(data[activeTab]);
  }, [activeTab]);
  // const tabs = Object.keys(data);
  return (
    <section className={styles.units}>
      <div className={styles.inner}>
        <div className={styles.head}>
          <h2 className={styles.headTitle}>Units</h2>
          <p className={styles.headDescription}>
            We have a magnificent selection of upcoming and new projects that
            will open your eyes to the future potential.
          </p>
        </div>
        <div className={styles.unitsDiv}>
          <div className={styles.tabs}>
            {Object.keys(data)?.map((tab) => (
              <button
                key={tab}
                className={`${styles.tabButton} ${
                  activeTab === tab ? styles.active : ""
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className={styles.content}>
            {data && tabData ? (
              tabData?.properties?.map((item, index) => (
                <div key={index} className={styles.accordionItem}>
                  <div
                    className={styles.accordionHeader}
                    onClick={() => toggleAccordion(index)}
                  >
                    <h3>
                      {/* {tabData?.number_of_bedrooms?.length}  */}
                      Beds
                    </h3>

                    <span
                      className={`${styles.arrowUp} ${
                        expandedAccordion === index ? styles.active : ""
                      }`}
                    >
                      <ArrowDown />
                    </span>
                  </div>
                  {expandedAccordion === index && (
                    <div className={styles.accordionContent}>
                      <table className={styles.table}>
                        <thead>
                          <tr>
                            <th>Layout Type</th>
                            <th>Size</th>
                            <th>Price</th>
                            <th>Floor Plan</th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody>
                          {/* {item?.map((property, idx) => (
                          ))} */}
                          <tr>
                            <td>{item?.name_en}</td>
                            <td>{item.size_sqft} sqft</td>
                            <td>AED {item?.project?.starting_price}</td>
                            <td className={styles.floorPlan}>
                              <a href={item?.floor_plan_url} target="_blank">
                                <span className="flex">
                                  <AreaIcon />
                                </span>
                              </a>
                            </td>
                            <td>
                              <button
                                className={styles.submitBtn}
                                type="submit"
                              >
                                Submit Enquiry <ArrowRight />
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              ))
            ) : (
              <p className={styles.noData}>
                No data available for {activeTab}.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Units;
