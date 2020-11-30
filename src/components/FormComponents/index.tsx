import React from "react";
import { useField } from "formik";
import styles from "./index.module.css";
import {
	FormControl,
	FormErrorMessage,
	FormLabel,
	Input,
	Select,
	Textarea,
} from "@chakra-ui/react";

export const MyTextInput: React.FC<any> = ({ label, ...props }) => {
	const [field, meta] = useField(props);
	return (
		<FormControl isInvalid={!!meta.error && meta.touched}>
			<FormLabel htmlFor={props.id || props.name}>{label}</FormLabel>
			<Input className="text-input" {...field} {...props} />
			<FormErrorMessage>{meta.error}</FormErrorMessage>
		</FormControl>
	);
};

export const MyTextArea: React.FC<any> = ({ label, ...props }) => {
	const [field, meta] = useField(props);
	return (
		<FormControl isInvalid={!!meta.error && meta.touched}>
			<FormLabel htmlFor={props.id || props.name}>{label}</FormLabel>
			<Textarea
				className={styles.textarea_wrapper}
				{...field}
				{...props}
			></Textarea>
			<FormErrorMessage className={styles.error}>{meta.error}</FormErrorMessage>
		</FormControl>
	);
};

export const MySelect: React.FC<any> = ({ label, ...props }) => {
	const [field, meta] = useField(props);
	return (
		<FormControl isInvalid={!!meta.error && meta.touched}>
			<FormLabel htmlFor={props.id || props.name}>{label}</FormLabel>
			<Select {...field} {...props} />
			<FormErrorMessage className={styles.error}>{meta.error}</FormErrorMessage>
		</FormControl>
	);
};
