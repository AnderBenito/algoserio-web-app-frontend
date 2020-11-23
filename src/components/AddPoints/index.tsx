import { useMutation } from "@apollo/client";
import React, { useContext, useEffect, useState } from "react";
import { AdminContext } from "../../context/AdminProvider";
import { useGetAllUserInfoQuery } from "../../generated/graphql";
import { ADD_POINTS_TO_USERNAME } from "../../graphql/mutations/PointsMutations";
import { useForm } from "../../utils/useForm";
import LoadingSpinner from "../Loading/LoadingSpinner";
import ModalComponent from "../Modal";
import styles from "./index.module.css";

interface AddPointsForm {
	reason: string;
	amount: string;
}

const AddPoints: React.FC = () => {
	const { setRefetchData } = useContext(AdminContext);
	const [showModal, setShowModal] = useState<boolean>(false);
	const { data, loading, error } = useGetAllUserInfoQuery({
		fetchPolicy: "network-only",
	});
	const [addPointsMutation] = useMutation(ADD_POINTS_TO_USERNAME);

	const { form, onFormChange, clearForm } = useForm<AddPointsForm>({
		reason: "",
		amount: "",
	});

	const [username, setUsername] = useState<string>("");

	const onFormSubmit = async (
		event: React.MouseEvent<HTMLButtonElement, MouseEvent>
	) => {
		if (!form.reason || !form.amount) {
			console.log("Points cant be empty");
			return;
		}
		setRefetchData(true);
		try {
			await addPointsMutation({
				variables: {
					username,
					reason: form.reason,
					amount: parseFloat(form.amount),
				},
			});
			console.log("Added succesfully");
		} catch (e) {
			console.log(e);
		} finally {
			clearForm();
			setShowModal(false);
			setRefetchData(false);
		}
	};

	useEffect(() => {
		if (data) {
			setUsername(data.getAllUsers[0].username as string);
		}
	}, [data]);

	if (loading) {
		return <LoadingSpinner />;
	} else if (error) {
		console.log(error);
		return <div>Error</div>;
	} else if (data) {
		return (
			<>
				{showModal ? (
					<ModalComponent
						submitCallback={onFormSubmit}
						closeCallback={() => setShowModal(false)}
					>
						Añadir puntos a: {username}
						<form
							onSubmit={(e) => {
								e.preventDefault();
							}}
						>
							<select
								className="custom-select"
								value={username}
								onChange={(e) => setUsername(e.target.value)}
							>
								{data.getAllUsers.map((user) => {
									return (
										<option key={user.id} value={user.username}>
											{user.name}
										</option>
									);
								})}
							</select>
							<div className="form-group">
								<label>Razón</label>
								<textarea
									name="reason"
									value={form.reason}
									onChange={onFormChange}
									className="form-control"
								></textarea>
							</div>
							<div className="form-group">
								<label>Cantidad de puntos</label>
								<input
									name="amount"
									value={form.amount}
									onChange={onFormChange}
									className="form-control"
									type="number"
								></input>
							</div>
						</form>
					</ModalComponent>
				) : null}
				<div
					className={styles.open_modal_icon}
					onClick={(e) => setShowModal(true)}
				>
					<svg
						width="2.5em"
						height="2.5em"
						viewBox="0 0 16 16"
						className="bi bi-plus-circle-fill"
						fill="currentColor"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fillRule="evenodd"
							d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"
						/>
					</svg>
				</div>
			</>
		);
	} else {
		return null;
	}
};

export default AddPoints;
