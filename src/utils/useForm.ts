import { useState } from "react";

export function useForm<T>(initialValue: T) {
	const [form, setForm] = useState<T>(initialValue);

	const onFormChange = (
		event: React.ChangeEvent<
			HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
		>
	) => {
		setForm({
			...form,
			[event.target.name]: event.target.value,
		});
	};

	const clearForm = () => {
		setForm(initialValue);
	};

	return { form, onFormChange, clearForm, setForm };
}
