import { useState } from "react";

export function useForm<T>(
	initialValue: T
): [any, (event: React.ChangeEvent<HTMLInputElement>) => void, () => void] {
	const [form, setForm] = useState<T>(initialValue);

	const onFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setForm({
			...form,
			[event.target.name]: event.target.value,
		});
	};

	const clearForm = () => {
		setForm(initialValue);
	};

	return [form, onFormChange, clearForm];
}
