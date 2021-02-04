import React from 'react';
import styles from './Modal.module.css';

interface Props {
  children: React.ReactNode,
}
const Container = ({ children }: Props) => {
  return (
    <div id="myModal" className={styles.modal}>
      <div className={styles.modal_content}>
        { children }
      </div>
    </div>
  )
};

export default Container;