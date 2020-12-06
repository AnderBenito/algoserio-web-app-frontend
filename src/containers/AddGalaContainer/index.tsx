import moment from "moment";
import React from "react";
import AddGala from "../../components/AdminComponents/AddGala";
import { useAddGalaMutation } from "../../generated/graphql";

const initialValues = {
	name: "",
	initDate: "",
	finishDate: "",
};

const validate = (values: typeof initialValues) => {
	const errors: any = {};

	if (!values.name) {
		errors.name = "Requerido";
	}

	if (!values.initDate) {
		errors.initDate = "Fecha requerida";
	}

	if (!values.finishDate) {
		errors.finishDate = "Fecha requerida";
	}

	return errors;
};

const AddGalaContainer: React.FC = () => {
	const [addGalaMutation] = useAddGalaMutation();

	const handleSubmit = async (values: typeof initialValues) => {
		console.log(values);
		try {
			await addGalaMutation({
				variables: {
					name: values.name,
					initDate: moment(values.initDate).toISOString(),
					finishDate: moment(values.finishDate).toISOString(),
				},
			});
		} catch (e) {
			console.log(e);
		}
	};
	return (
		<AddGala
			initialValues={initialValues}
			validate={validate}
			handleSubmit={handleSubmit}
		/>
	);
};

export default AddGalaContainer;
