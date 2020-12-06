import { Button, Container } from "@chakra-ui/react";
import { Formik, Form } from "formik";
import React from "react";
import { MyDatePicker, MyTextInput } from "../../FormComponents";
import "react-datepicker/dist/react-datepicker.css";

interface Props {
	initialValues: any;
	validate: any;
	handleSubmit: any;
}
const AddGala: React.FC<Props> = (props) => {
	return (
		<Container>
			<Formik
				initialValues={props.initialValues}
				validate={props.validate}
				onSubmit={props.handleSubmit}
			>
				<Form>
					<MyTextInput label="Nombre de la gala" name="name" />
					<MyDatePicker
						label="Fecha de inicio"
						name="initDate"
						placeholderText="Selecciona fecha"
					/>
					<MyDatePicker
						label="Fecha de fin"
						name="finishDate"
						placeholderText="Selecciona fecha"
					/>
					<Button type="submit">Añadir Gala</Button>
				</Form>
			</Formik>
		</Container>
	);
};

export default AddGala;
