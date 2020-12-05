import React, { useContext } from "react";
import AddPoints from "../../components/AdminComponents/AddPoints";
import { GalaContext } from "../../context/GalaProvider";
import {
	useAddPointsMutation,
	useGetAllUserInfoQuery,
} from "../../generated/graphql";

const initialValues = {
	username: "",
	reason: "",
	amount: "",
};
const validate = (values: any) => {
	const errors: any = {};

	if (!values.username) {
		errors.username = "Requerido";
	}
	if (!values.reason) {
		errors.reason = "Requerido";
	}
	if (values.amount <= 0) {
		errors.amount = "Introduce puntos validos";
	}

	return errors;
};
const AddPointsContainer: React.FC = () => {
	const { data, loading, error } = useGetAllUserInfoQuery();
	const [
		addPointsMutation,
		{ data: response, error: responseError },
	] = useAddPointsMutation();
	const { galaState } = useContext(GalaContext);

	const handleSubmit = async (
		values: typeof initialValues,
		{ setSubmitting, resetForm }: any
	) => {
		console.log(values);
		setSubmitting(true);
		try {
			await addPointsMutation({
				variables: {
					amount: parseFloat(values.amount),
					reason: values.reason,
					username: values.username,
					galaId: galaState.data!.id,
				},
			});
		} catch (error) {
			console.log(error);
		} finally {
			setSubmitting(false);
			resetForm();
		}
	};
	return (
		<AddPoints
			initialValues={initialValues}
			validate={validate}
			handleSubmit={handleSubmit}
			loading={loading}
			users={data?.getAllUsers}
			error={error}
			response={{ data: response, error: responseError }}
		/>
	);
};

export default AddPointsContainer;
