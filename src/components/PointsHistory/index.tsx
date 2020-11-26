import React, { useState } from "react";
import { useDeletePointsMutation } from "../../generated/graphql";
import ContextMenu from "../ContextMenu";
import MenuItem from "../ContextMenu/MenuItem";
import ModalComponent from "../Modal";
import Pagination from "../Pagination";
import TableHistory from "../Tables/TableHistory";

interface Props {
	points: any;
	page: any;
	setPage: any;
	handleRefetch?: any;
}

const PointsHistory: React.FC<Props> = ({
	points,
	page,
	setPage,
	handleRefetch,
}) => {
	const [showMenu, setShowMenu] = useState<boolean>(false);
	const [showInfoModal, setShowInfoModal] = useState<boolean>(false);
	const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);
	const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
	const [pointItem, setPointItem] = useState<any>({});
	const [deletePoints] = useDeletePointsMutation();
	return (
		<div>
			<b className="prueba">Historial de TontoPoints:</b>
			<TableHistory
				data={points}
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
					handleRefetch();
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

export default PointsHistory;
