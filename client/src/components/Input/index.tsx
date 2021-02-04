import React, { useState, useEffect } from 'react';
import styles from './Input.module.css';

interface Props {
	label: string
	value: string
	onChange: (value: string) => void
	checkFields: boolean
}
const Input = (props: Props) => {
	const [error, setError] = useState('')
	const { label, value, onChange, checkFields } = props;

	useEffect(() => {
		if(checkFields){
			setError(!value ? 'this field is required' : '')
		}
	}, [checkFields])
	const onChangeValue = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		onChange(event.target.value)
	};

	const handleBlur = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setError(!e.target.value ? 'this field is required' : '')
	};

	return (
		<div className={styles.input_group}>
			<label className={`${styles.input_underlined} ${error ? styles.input_error : ''}`}>
				<input required className={styles.input} value={value} onChange={onChangeValue} onBlur={handleBlur}/>
				<span className={styles.input_label}>{label}</span>
				{
					error && <span className={styles.input_helper}>{error}</span>
				}
			</label>
		</div>
	)
}

export default Input;