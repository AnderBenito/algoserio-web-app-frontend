import React, { useContext } from "react";
import Galas from "../../components/AdminComponents/Galas";
import LoadingSpinner from "../../components/Loading/LoadingSpinner";
import { GalaContext } from "../../context/GalaProvider";
import { useGetAllGalasQuery } from "../../generated/graphql";

const initialValues = {
	gala: "",
};

const validate = (values: typeof initialValues) => {
	const errors: any = {};

	if (!values.gala) {
		errors.gala = "Requerido";
	}

	return errors;
};

const GalasContainer: React.FC = () => {
	const { data, loading, error } = useGetAllGalasQuery();
	const { galaDispatch } = useContext(GalaContext);

	const handleSubmit = (values: typeof initialValues) => {
		console.log(values.gala);
		const selectedGala = data?.getAllGalas.find(
			(gala) => gala.id === values.gala
		);

		galaDispatch({
			type: "set_gala",
			payload: { id: selectedGala?.id, name: selectedGala?.name },
		});
	};

	if (loading) return <LoadingSpinner />;
	else if (error) return <div>Error</div>;
	else if (data) {
		return (
			<Galas
				galas={data?.getAllGalas}
				handleSubmit={handleSubmit}
				initialValues={initialValues}
				validate={validate}
			/>
		);
	}
	return null;
};

export default GalasContainer;
