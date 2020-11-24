import React, { useEffect, useState } from "react";
import LoadingSpinner from "../../Loading/LoadingSpinner";
import TableHistory from "../../Tables/TableHistory";
import {
	useDeletePointsMutation,
	useGetPaginatedPointsQuery,
} from "../../../generated/graphql";
import Pagination from "../../Pagination";
import ContextMenu from "../../ContextMenu";
import MenuItem from "../../ContextMenu/MenuItem";
import ModalComponent from "../../Modal";

interface Props {
	refetching?: boolean;
}

const PointsHistory: React.FC<Props> = (props) => {
	const [page, setPage] = useState({
		page: 0,
		total: 5,
	});
	const [showMenu, setShowMenu] = useState<boolean>(false);
	const [showModal, setShowModal] = useState<boolean>(false);
	const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
	const [pointItem, setPointItem] = useState<any>({});

	const {
		data,
		loading: dataLoading,
		error: dataError,
		refetch,
	} = useGetPaginatedPointsQuery({
		variables: { take: page.total, skip: page.page * page.total },
		fetchPolicy: "network-only",
	});

	const [deletePoints] = useDeletePointsMutation();

	useEffect(() => {
		console.log("Historial mounted");
		refetch();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [props.refetching]);

	const component = () => {
		return (
			<div className="container mt-2 mb-2">
				<b className="prueba">Historial de TontoPoints:</b>
				<TableHistory
					data={data?.getPaginatedPoints!}
					setItem={setPointItem}
					onRowClick={(e) => {
						setMousePos({
							x: e.clientX,
							y: e.clientY,
						});
						setShowMenu(true);
					}}
				/>
				<Pagination page={page} setPage={setPage} />
				<ContextMenu show={showMenu} setShow={setShowMenu} mousePos={mousePos}>
					<MenuItem onItemClick={() => setShowModal(true)}>Info</MenuItem>
					<MenuItem>Editar</MenuItem>
					<MenuItem
						onItemClick={async () => {
							await deletePoints({
								variables: {
									id: pointItem.id,
								},
							});
							refetch();
							setShowMenu(false);
						}}
					>
						Borrar
					</MenuItem>
				</ContextMenu>
				<ModalComponent
					submitCallback={() => {
						setShowModal(false);
						setShowMenu(false);
					}}
					closeCallback={() => {
						setShowModal(false);
						setShowMenu(false);
					}}
					show={showModal}
				>
					<div>
						<div>
							<b>Razón: </b>
							{pointItem.reason}
						</div>
						<div>
							<b>Cantidad: </b>
							{pointItem.amount}
						</div>
					</div>
				</ModalComponent>
			</div>
		);
	};

	if (dataLoading) {
		if (data) {
			return component();
		} else {
			<LoadingSpinner />;
		}
	} else if (dataError) {
		return <div>Error</div>;
	} else if (data) {
		return component();
	}

	return null;
};

export default PointsHistory;
