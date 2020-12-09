import moment from "moment";
import React, { useState } from "react";
import LoadingSpinner from "../../components/Loading/LoadingSpinner";
import PointsHistory from "../../components/AdminComponents/PointsHistory";
import { useGetAllGalaPointsQuery } from "../../generated/graphql";
import { useParams } from "react-router-dom";
import { useDisclosure } from "@chakra-ui/react";
import EditPointsContainer from "../EditPointsContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";

const EditButton: React.FC<any> = ({ handleClick, cell }) => {
	return (
		<button
			onClick={() => {
				handleClick(cell);
			}}
		>
			<FontAwesomeIcon icon={faPen} />
		</button>
	);
};

const PointsHistoryContainer: React.FC = () => {
	const { galaId } = useParams<any>();

	const { isOpen, onOpen, onClose } = useDisclosure();
	const [row, setRow] = useState<any>({});
	const { data, loading, error, refetch } = useGetAllGalaPointsQuery({
		variables: {
			id: galaId,
		},
		fetchPolicy: "network-only",
	});

	const handleClick = (cell: any) => {
		setRow(cell.row.original);
		onOpen();
	};

	const columns = [
		{
			Header: "Dados en",
			accessor: (row: any) => {
				return moment(row.createdAt!).format("MM-DD-YYYY");
			}, // accessor is the "key" in the data
		},
		{
			Header: "A",
			accessor: "user.name",
		},
		{
			Header: "Cantidad",
			accessor: "amount",
		},
		{
			Header: "Editar",
			Cell: (cell: any) => <EditButton cell={cell} handleClick={handleClick} />,
		},
	];

	if (loading) return <LoadingSpinner />;
	if (error) return <div>Error</div>;
	else if (data) {
		return (
			<>
				<PointsHistory columns={columns} data={data.getAllGalaPoints.points} />
				{isOpen && (
					<EditPointsContainer
						modalIsOpen={isOpen}
						modalOnClose={onClose}
						point={row}
						refetch={refetch}
					/>
				)}
			</>
		);
	}
	return null;
};

export default PointsHistoryContainer;
