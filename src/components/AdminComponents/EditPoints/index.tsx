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
import { MyTextInput } from "../../FormComponents";

interface Props {
	point: any;
	modalIsOpen: any;
	modalOnClose: any;
}
const EditPoints: React.FC<Props> = ({ point, modalIsOpen, modalOnClose }) => {
	const { submitForm } = useFormikContext();

	return (
		<Modal isOpen={modalIsOpen} onClose={modalOnClose}>
			<ModalOverlay />
			<ModalContent>
				<ModalHeader>Editar Puntos</ModalHeader>
				<ModalCloseButton />
				<ModalBody>
					<Form>
						<MyTextInput label="Razón" name="reason" />
						<MyTextInput label="Cantidad" name="amount" type="number" />
						<MyTextInput label="En" name="createdAt" />
					</Form>
				</ModalBody>

				<ModalFooter>
					<Button colorScheme="blue" mr={3} onClick={modalOnClose}>
						Cerrar
					</Button>
					<Button type="submit" onClick={() => submitForm()} variant="ghost">
						Guardar
					</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
};

export default EditPoints;
