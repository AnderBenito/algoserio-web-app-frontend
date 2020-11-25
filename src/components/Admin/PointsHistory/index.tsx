import React, { useEffect, useState, useContext } from "react";
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
import { AdminContext } from "../../../context/AdminProvider";

interface Props {
	refetching?: boolean;
}

const PointsHistory: React.FC<Props> = (props) => {
	const { setRefetchData } = useContext(AdminContext);
	const [page, setPage] = useState({
		page: 0,
		total: 5,
	});
	const [showMenu, setShowMenu] = useState<boolean>(false);
	const [showInfoModal, setShowInfoModal] = useState<boolean>(false);
	const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);
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
					<MenuItem
						onItemClick={() => {
							setShowInfoModal(true);
							setShowMenu(false);
						}}
					>
						Info
					</MenuItem>
					<MenuItem>Editar</MenuItem>
					<MenuItem
						onItemClick={() => {
							setShowDeleteModal(true);
							setShowMenu(false);
						}}
					>
						Borrar
					</MenuItem>
				</ContextMenu>
				<ModalComponent
					title="Información de los puntos"
					submitCallback={() => {
						setShowInfoModal(false);
					}}
					closeCallback={() => {
						setShowInfoModal(false);
					}}
					show={showInfoModal}
				>
					<div>
						<div>
							<b>A: </b>
							{pointItem.user && pointItem.user.name}
						</div>
						<div>
							<b>Fecha: </b>
							{pointItem.createdAt}
						</div>
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
				<ModalComponent
					show={showDeleteModal}
					title="Borrar puntos"
					submitCallback={async () => {
						setShowDeleteModal(false);
						await deletePoints({
							variables: {
								id: pointItem.id,
							},
						});
						refetch();
						setRefetchData(true);
					}}
					closeCallback={() => {
						setShowDeleteModal(false);
					}}
				>
					<div>¿Seguro que quieres borrar los puntos?</div>
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
