import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import styles from '../../styles/input.module.scss';

const InputField = () => {
  return (
    <div className={styles.inputGroup}>
      <div className={styles.iconWrapper}>
        <FaSearch />
      </div>
      <input required type="text" name="text" autoComplete="off" className={styles.input} />
      <label className={styles.userLabel}>Search by title</label>
    </div>
  );
};

export default InputField;
