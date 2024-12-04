import { useState } from "react";
import styles from "./NewsSubscribe.module.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
const NewsSubscribe = () => {
  const [phone, setPhone] = useState("");
  return (
    <section className={styles.newsSubscribe}>
      <form className={styles.form}>
        <h2 className={styles.formTitle}>Don't Miss The News!</h2>
        <p className={styles.formDescription}>
          Sign up below to receive updates on new listings, as well as curated
          picks based on your preferences!
        </p>
        <div className={styles.inputDiv}>
          <input placeholder="Name*" type="text" />
        </div>
        <div className={styles.inputDiv}>
          <input placeholder="Email*" type="email" />
        </div>
        <div className={styles.inputDiv}>
          <PhoneInput
            country={"ae"} // Default country (UAE)
            value={phone}
            onChange={(value) => setPhone(value)}
            inputClass={styles.phoneInput}
            dropdownClass={styles.phoneDropdown}
            className={styles.input}
          />
        </div>
        <div className={styles.inputDiv}>
          <textarea rows="4" placeholder="How can we help you?" />
        </div>
        <div className={styles.submitContent}>
          <div className={styles.checkbox}>
            <input type="checkbox" />
            <p>Email me recommended properties!</p>
          </div>
          <p className={styles.asterisk}>
            Fields marked with an asterisk * must be filled.
          </p>
          <button type="submit">Submit Info</button>
        </div>
      </form>
    </section>
  );
};

export default NewsSubscribe;
