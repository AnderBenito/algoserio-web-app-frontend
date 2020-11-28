import React from "react";
import { useField } from "formik";
import styles from "./index.module.css";

export const MyTextInput: React.FC<any> = ({ label, ...props }) => {
	const [field, meta] = useField(props);
	return (
		<>
			<label htmlFor={props.id || props.name}>{label}</label>
			<input className="text-input" {...field} {...props} />
			{meta.touched && meta.error ? (
				<div className={styles.error}>{meta.error}</div>
			) : null}
		</>
	);
};

export const MyTextArea: React.FC<any> = ({ label, ...props }) => {
	const [field, meta] = useField(props);
	return (
		<>
			<label htmlFor={props.id || props.name}>{label}</label>
			<div>
				<textarea
					className={styles.textarea_wrapper}
					{...field}
					{...props}
				></textarea>
			</div>
			{meta.touched && meta.error ? (
				<div className={styles.error}>{meta.error}</div>
			) : null}
		</>
	);
};

export const MySelect: React.FC<any> = ({ label, ...props }) => {
	const [field, meta] = useField(props);
	return (
		<div>
			<label htmlFor={props.id || props.name}>{label}</label>
			<select {...field} {...props} />
			{meta.touched && meta.error ? (
				<div className={styles.error}>{meta.error}</div>
			) : null}
		</div>
	);
};
