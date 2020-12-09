import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalCloseButton,
	ModalBody,
	ModalFooter,
	Button,
} from "@chakra-ui/react";
import { Form, useFormikContext } from "formik";
import React from "react";
import { MyDatePicker, MyTextInput } from "../../FormComponents";

interface Props {
	modalIsOpen: any;
	modalOnClose: any;
	loading: any;
}
const EditPoints: React.FC<Props> = ({
	loading,
	modalIsOpen,
	modalOnClose,
}) => {
	const { submitForm } = useFormikContext();

	return (
		<Modal isOpen={modalIsOpen} onClose={modalOnClose}>
			<ModalOverlay />
			<ModalContent>
				<ModalHeader>Editar Puntos</ModalHeader>
				<ModalCloseButton />
				<ModalBody>
					<Form>
						<MyDatePicker label="Fecha" name="createdAt" />
						<MyTextInput label="Razón" name="reason" />
						<MyTextInput label="Cantidad" name="amount" type="number" />
					</Form>
				</ModalBody>

				<ModalFooter>
					<Button colorScheme="blue" mr={3} onClick={modalOnClose}>
						Cerrar
					</Button>
					<Button
						isLoading={loading}
						type="submit"
						onClick={() => submitForm()}
						variant="ghost"
					>
						Guardar
					</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
};

export default EditPoints;
