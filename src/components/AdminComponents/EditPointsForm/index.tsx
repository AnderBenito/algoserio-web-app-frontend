import React, { useEffect } from "react";
import {
	useGetPointsByIdQuery,
	useUpdatePointsMutation,
} from "../../../generated/graphql";
import { useForm } from "../../../utils/useForm";

interface Form {
	reason: string;
	amount: number;
}

interface Props {
	pointsId: string;
}

const EditPointsForm: React.FC<Props> = ({ pointsId }) => {
	const { form, onFormChange, setForm, clearForm } = useForm<Form>({
		reason: "",
		amount: 0,
	});

	const { data, loading, error } = useGetPointsByIdQuery({
		variables: { id: pointsId },
		fetchPolicy: "network-only",
	});
	const [updatePoints] = useUpdatePointsMutation();

	useEffect(() => {
		if (!data) return;
		setForm({
			amount: data!.getPointsById.amount,
			reason: data!.getPointsById.reason,
		});
	}, [data, setForm]);

	const onFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		try {
			await updatePoints({
				variables: {
					id: pointsId,
					amount: parseFloat(form.amount as any),
					reason: form.reason,
				},
			});
		} catch (error) {
			console.log(error);
		} finally {
			clearForm();
		}
	};
	return (
		<>
			{!loading && !error && data && (
				<form onSubmit={onFormSubmit}>
					<div className="form-group">
						<label>Razón</label>
						<input
							className="form-control"
							name="reason"
							onChange={onFormChange}
							type="text"
							value={form.reason}
						></input>
					</div>
					<div>
						<label>Puntos</label>
						<input
							className="form-control"
							name="amount"
							onChange={onFormChange}
							type="number"
							value={form.amount}
						></input>
					</div>
					<div>
						<button type="submit" className="btn btn-primary">
							Editar
						</button>
					</div>
				</form>
			)}
		</>
	);
};

export default EditPointsForm;
