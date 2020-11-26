import React, { useState } from "react";
import {
	useAddPointsMutation,
	useGetAllUserInfoQuery,
} from "../../generated/graphql";
import { useForm } from "../../utils/useForm";

interface Props {
	handleRefetch?: any;
}

interface Form {
	reason: string;
	amount: string;
}

const AddPointsForm: React.FC<Props> = ({ handleRefetch }) => {
	const { data, loading, error } = useGetAllUserInfoQuery({
		fetchPolicy: "network-only",
	});
	const [addPointsMutation] = useAddPointsMutation();

	const [username, setUsername] = useState<string>("");
	const { form, onFormChange, clearForm } = useForm<Form>({
		reason: "",
		amount: "",
	});

	// useEffect(() => {
	// 	if (users) {
	// 		setUsername(users[0].name);
	// 	}
	// }, []);

	return (
		<div>
			Admin Home Añadir puntos a: {username}
			<form
				onSubmit={async (e) => {
					e.preventDefault();
					try {
						await addPointsMutation({
							variables: {
								amount: parseFloat(form.amount),
								reason: form.reason,
								username,
							},
						});
					} catch (error) {
						console.log(error);
					} finally {
						clearForm();
						handleRefetch();
					}
				}}
			>
				{!loading && !error && data && (
					<select
						className="custom-select"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
					>
						<option>---</option>
						{data.getAllUsers.map((user) => {
							return (
								<option key={user.id} value={user.username}>
									{user.name}
								</option>
							);
						})}
					</select>
				)}
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
				<div>
					<button type="submit" className="btn btn-primary">
						Añadir
					</button>
				</div>
			</form>
		</div>
	);
};

export default AddPointsForm;
