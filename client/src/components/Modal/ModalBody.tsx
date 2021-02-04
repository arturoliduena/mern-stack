import React from 'react';
import styles from './Modal.module.css';

interface Props {
  children: React.ReactNode,
}
const Body = ({ children }: Props) => {
  return (
    <div className={styles.modal_body}>
      {children}
    </div>
  )
};

export default Body;