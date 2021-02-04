import React from 'react';
import styles from './Modal.module.css';

interface Props {
  title: string,
  onClose: () => void,
}
const Header = ({ title, onClose }: Props) => {
  return (
    <div className={styles.modal_header}>
      <span className={styles.close} onClick={onClose}>&times;</span>
      <h6>{title}</h6>
    </div>
  )
};

export default Header;