import React from "react";

interface Props {
	page: any;
	setPage: any;
}
const Pagination: React.FC<Props> = ({ page, setPage }) => {
	return (
		<nav aria-label="Page navigation example">
			<ul className="pagination">
				<li className="page-item">
					<button
						onClick={(e) =>
							setPage({
								...page,
								page: page.page > 0 ? page.page - 1 : 0,
							})
						}
						className="page-link"
					>
						Previous
					</button>
				</li>

				<li className="page-item">
					<button
						onClick={(e) =>
							setPage({
								...page,
								page: page.page + 1,
							})
						}
						className="page-link"
					>
						Next
					</button>
				</li>
			</ul>
		</nav>
	);
};

export default Pagination;
