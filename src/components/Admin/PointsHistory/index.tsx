import React, { useReducer, useState } from "react";
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
import EditPointsForm from "../../EditPointsForm";
import moment from "moment";

interface Action {
	type: string;
	payload?: any;
}
interface Props {}

const initialState = {
	showMenu: false,
	showInfo: false,
	showEdit: false,
	showDelete: false,
	mousePos: { x: 0, y: 0 },
	pointItem: {},
};

function parseDate(date: string) {
	return moment(date).format("YYYY-MM-DD");
}

function reducer(state: any, { type, payload }: Action) {
	switch (type) {
		case "show_info":
			return {
				...state,
				showInfo: true,
				showMenu: false,
			};

		case "show_edit":
			return {
				...state,
				showEdit: true,
				showMenu: false,
			};

		case "show_delete":
			return {
				...state,
				showDelete: true,
				showMenu: false,
			};

		case "close_modal":
			return {
				...state,
				showInfo: false,
				showEdit: false,
				showDelete: false,
				showMenu: false,
			};

		case "open_menu":
			return {
				...state,
				showMenu: true,
				mousePos: {
					x: payload.clientX,
					y: payload.clientY,
				},
			};
	}
}

const PointsHistory: React.FC<Props> = (props) => {
	const [page, setPage] = useState({
		page: 0,
		total: 5,
	});
	const [pointItem, setPointItem] = useState<any>({});
	const [state, dispatch] = useReducer(reducer, initialState);

	const { data, loading, error, refetch } = useGetPaginatedPointsQuery({
		variables: { take: page.total, skip: page.page * page.total },
		fetchPolicy: "network-only",
	});

	const [deletePoints] = useDeletePointsMutation();

	const component = () => {
		return (
			<div>
				<TableHistory
					data={data?.getPaginatedPoints!}
					setItem={setPointItem}
					onRowClick={(e) => {
						dispatch({ type: "open_menu", payload: e });
					}}
				/>
				<Pagination page={page} setPage={setPage} />
				<ContextMenu
					show={state.showMenu}
					setShow={() => dispatch({ type: "close_modal" })}
					mousePos={state.mousePos}
				>
					<MenuItem
						onItemClick={() => {
							dispatch({ type: "show_info" });
						}}
					>
						Info
					</MenuItem>
					<MenuItem
						onItemClick={() => {
							dispatch({ type: "show_edit" });
						}}
					>
						Editar
					</MenuItem>
					<MenuItem
						onItemClick={() => {
							dispatch({ type: "show_delete" });
						}}
					>
						Borrar
					</MenuItem>
				</ContextMenu>
				<ModalComponent
					title="Información de los puntos"
					submitCallback={() => {
						dispatch({ type: "close_modal" });
					}}
					closeCallback={() => {
						dispatch({ type: "close_modal" });
					}}
					show={state.showInfo}
				>
					<div>
						<div>
							<b>A: </b>
							{pointItem.user && pointItem.user.name}
						</div>
						<div>
							<b>Fecha: </b>
							{parseDate(pointItem.createdAt)}
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
					title="Editar puntos"
					submitCallback={() => {
						refetch();
						dispatch({ type: "close_modal" });
					}}
					closeCallback={() => {
						dispatch({ type: "close_modal" });
					}}
					show={state.showEdit}
				>
					<EditPointsForm pointsId={pointItem.id} />
				</ModalComponent>
				<ModalComponent
					show={state.showDelete}
					title="Borrar puntos"
					submitCallback={async () => {
						await deletePoints({
							variables: {
								id: pointItem.id,
							},
						});
						refetch();
						dispatch({ type: "close_modal" });
					}}
					closeCallback={() => {
						dispatch({ type: "close_modal" });
					}}
				>
					<div>¿Seguro que quieres borrar los puntos?</div>
				</ModalComponent>
			</div>
		);
	};

	if (loading) {
		if (data) {
			return component();
		} else {
			<LoadingSpinner />;
		}
	} else if (error) {
		return <div>Error</div>;
	} else if (data) {
		return component();
	}

	return null;
};

export default PointsHistory;
