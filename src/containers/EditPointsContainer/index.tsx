import { Formik } from "formik";
import moment from "moment";
import React from "react";
import EditPoints from "../../components/AdminComponents/EditPoints";
import { useUpdatePointsMutation } from "../../generated/graphql";

interface Props {
	point: any;
	modalIsOpen: any;
	modalOnClose: any;
	refetch: any;
}

const EditPointsContainer: React.FC<Props> = ({
	point,
	modalIsOpen,
	modalOnClose,
	refetch,
}) => {
	const [updatePointsMutation, { loading }] = useUpdatePointsMutation();

	const initialValues = {
		createdAt: new Date(point.createdAt),
		reason: point.reason,
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
		try {
			await updatePointsMutation({
				variables: {
					id: point.id,
					createdAt: moment(values.createdAt).toISOString(),
					amount: parseFloat(values.amount),
					reason: values.reason,
				},
			});
			refetch();
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
				modalOnClose={modalOnClose}
				loading={loading}
			/>
		</Formik>
	);
};

export default EditPointsContainer;
