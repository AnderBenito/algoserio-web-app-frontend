import React from "react";
import {
	useAddPointsMutation,
	useGetAllUserInfoQuery,
} from "../../generated/graphql";
import { Formik, Form } from "formik";
import { MySelect, MyTextArea, MyTextInput } from "../FormComponents";

interface Props {}

const AddPointsForm: React.FC<Props> = () => {
	const { data, loading, error } = useGetAllUserInfoQuery();
	const [addPointsMutation, { data: response }] = useAddPointsMutation();

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

	return (
		<div>
			<Formik
				initialValues={{
					username: "",
					reason: "",
					amount: "",
				}}
				validate={validate}
				onSubmit={async (values, { setSubmitting, resetForm }) => {
					console.log(values);
					setSubmitting(true);
					try {
						await addPointsMutation({
							variables: {
								amount: parseFloat(values.amount),
								reason: values.reason,
								username: values.username,
							},
						});
					} catch (error) {
						console.log(error);
					} finally {
						setSubmitting(false);
						resetForm();
					}
				}}
			>
				<Form>
					{!loading && !error && data && (
						<div className="form-group">
							<MySelect
								label="Selecciona usuario"
								name="username"
								className="custom-select"
							>
								<option value="">...</option>
								{data.getAllUsers.map((user) => {
									return (
										<option key={user.id} value={user.username}>
											{user.name}
										</option>
									);
								})}
							</MySelect>
						</div>
					)}
					<div className="form-group">
						<MyTextArea
							className="form-control"
							label="Razón"
							name="reason"
							placeholder="Se quemó con tortelos..."
						/>
					</div>
					<div className="form-group">
						<MyTextInput
							className="form-control"
							label="Cantidad de puntos"
							name="amount"
							type="text"
							placeholder="100"
						/>
					</div>
					<div>
						<button type="submit" className="btn btn-primary">
							Añadir
						</button>
					</div>
					{response?.addPoints && (
						<div className="alert alert-success" role="alert">
							Tonto Points añadidos con exito!
						</div>
					)}
				</Form>
			</Formik>
		</div>
	);
};

export default AddPointsForm;
