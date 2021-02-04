import React, { useState, useEffect } from 'react';
import styles from './Modal.module.css';
import Input from '../Input';
import Button from '@material-ui/core/Button';
import { useDispatch, useSelector } from 'react-redux';
import { closeModalRegister } from '../../store/actions/modal';
import { signup } from '../../store/actions/auth';
import ModaContainer from './ModaContainer';
import ModalBody from './ModalBody';
import ModalHeader from './ModalHeader';
import { RootState } from '../../store';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checkFields, setCheckFields] = useState(false);
  const [error, setError] = useState('');
  const [isSubmit, setIsSubmit] = useState(false)
  const dispatch = useDispatch();
  const isLoading = useSelector((state: RootState) => state.auth.loading);
  const message = useSelector((state: RootState) => state.auth.message);
  const authorized = useSelector((state: RootState) => state.auth.authorized);

  useEffect(() => {
    if (!isLoading && isSubmit) {
      authorized ? onClose() : setError(message);
    }
  }, [isLoading]);

  const validateFields = (fields: string[]) => !fields.some(field => !field);

  const onClose = () => {
    dispatch(closeModalRegister())
  }

  const submit = () => {
    const isValid = validateFields([email, password]);
    if (isValid) {
      const item = {
        email,
        password,
      }
      setIsSubmit(true)
      dispatch(signup(item));
    } else {
      setCheckFields(true);
    }
  }
  return (
    <ModaContainer>
      <ModalHeader title='Signup' onClose={onClose} />
      <ModalBody>
        <form className={styles.container}>
          <Input label='Email' value={email} onChange={setEmail} checkFields={checkFields} />
          <Input label='password' value={password} onChange={setPassword} checkFields={checkFields} />
        </form>
        <Button className="mt-4" variant="contained" color="primary" onClick={submit} >Login</Button>
        <div className={styles.error}>
          {error}
        </div>
      </ModalBody>
    </ModaContainer>
  )
};

export default Signup;