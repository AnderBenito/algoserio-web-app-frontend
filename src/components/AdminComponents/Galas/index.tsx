import { Button, Container } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import React from "react";
import { MySelect } from "../../FormComponents";

interface Props {
	galas: any[];
	initialValues: any;
	validate: any;
	handleSubmit: any;
}
const Galas: React.FC<Props> = (props) => {
	return (
		<Container>
			All galas
			<Formik
				initialValues={props.initialValues}
				onSubmit={props.handleSubmit}
				validate={props.validate}
			>
				<Form>
					<MySelect label="Selecciona gala" name="gala">
						<option value="">Selecciona una gala...</option>
						{props.galas.map((gala) => {
							return (
								<option key={gala.id} value={gala.id}>
									{gala.name}
								</option>
							);
						})}
					</MySelect>
					<Button type="submit">Cambiar</Button>
				</Form>
			</Formik>
		</Container>
	);
};

export default Galas;
