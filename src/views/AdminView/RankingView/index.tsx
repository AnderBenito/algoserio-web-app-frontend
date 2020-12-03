import React from "react";
import RankingPieContainer from "../../../containers/RankingPieContainer";
import RankingTableContainer from "../../../containers/RankingTableContainer";

const Ranking = () => {
	return (
		<>
			<RankingTableContainer />
			<RankingPieContainer />
		</>
	);
};

export default Ranking;
