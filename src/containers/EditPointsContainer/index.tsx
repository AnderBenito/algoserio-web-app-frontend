import { Formik } from "formik";
import React from "react";
import EditPoints from "../../components/AdminComponents/EditPoints";
import { useUpdatePointsMutation } from "../../generated/graphql";

interface Props {
	point: any;
	modalIsOpen: any;
	modalOnClose: any;
}

const EditPointsContainer: React.FC<Props> = ({
	point,
	modalIsOpen,
	modalOnClose,
}) => {
	const [updatePointsMutation] = useUpdatePointsMutation();

	const initialValues = {
		reason: point.reason,
		createdAt: point.createdAt,
		amount: point.amount,
	};

	const validate = (values: typeof initialValues) => {
		const errors: any = {};

		if (!values.reason) {
			errors.reason = "Requerido";
		}
		if (!values.amount) {
			errors.amount = "Requerido";
		}
		if (!values.createdAt) {
			errors.createdAt = "Requerido";
		}

		return errors;
	};

	const handleSubmit = async (
		values: typeof initialValues,
		{ resetForm }: any
	) => {
		console.log(values);
		try {
			await updatePointsMutation({
				variables: {
					id: point.id,
					amount: parseFloat(values.amount),
					reason: values.reason,
				},
			});
		} catch (error) {
		} finally {
			resetForm();
			modalOnClose();
		}
	};

	return (
		<Formik
			initialValues={initialValues}
			onSubmit={handleSubmit}
			validate={validate}
		>
			<EditPoints
				modalIsOpen={modalIsOpen}
				point={point}
				modalOnClose={modalOnClose}
			/>
		</Formik>
	);
};

export default EditPointsContainer;
