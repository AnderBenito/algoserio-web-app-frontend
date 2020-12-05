import React from "react";
import { Formik, Form } from "formik";
import { MySelect, MyTextArea, MyTextInput } from "../../FormComponents";
import { Alert, AlertIcon, Box, Button, Container } from "@chakra-ui/react";

interface Props {
	initialValues: any;
	validate: any;
	handleSubmit: any;
	loading: any;
	error: any;
	users: any;
	response: any;
}

const AddPoints: React.FC<Props> = (props) => {
	const renderAlert = () => {
		if (props.response.error) {
			return (
				<Alert status="error">
					<AlertIcon />
					There was an error processing your request
				</Alert>
			);
		} else if (props.response.data) {
			return (
				<Alert status="success">
					<AlertIcon />
					TontoPoints añadidos con exito!
				</Alert>
			);
		}
	};

	return (
		<Container>
			<Formik
				initialValues={props.initialValues}
				validate={props.validate}
				onSubmit={props.handleSubmit}
			>
				<Form>
					{!props.loading && !props.error && props.users && (
						<MySelect label="Selecciona usuario" name="username">
							<option value="">...</option>
							{props.users.map((user: any) => {
								return (
									<option key={user.id} value={user.username}>
										{user.name}
									</option>
								);
							})}
						</MySelect>
					)}

					<MyTextArea
						label="Razón"
						name="reason"
						placeholder="Se quemó con tortelos..."
					/>

					<MyTextInput
						label="Cantidad de puntos"
						name="amount"
						type="text"
						placeholder="100"
					/>

					<Button width="100%" type="submit">
						Añadir
					</Button>

					<Box marginTop={2}>{renderAlert()}</Box>
				</Form>
			</Formik>
		</Container>
	);
};

export default AddPoints;
