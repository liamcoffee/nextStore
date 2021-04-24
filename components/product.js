import { gql, useQuery } from "@apollo/client";

export const firstQuery = gql`
	query($limit: Int!) {
		launchesPast(limit: $limit) {
			mission_name
			launch_date_local
			launch_site {
				site_name_long
			}

			rocket {
				rocket_name
			}
		}
	}
`;

export default function ProductList({ limit = 1 }) {
	const { loading, error, data } = useQuery(firstQuery, {
		variables: {
			limit,
		},
	});

	if (error) return <div>Error loading players.</div>;
	if (loading) return <div>Loading</div>;

	const { queryPlayer: allPlayers } = data;

	console.log(`got data`, data);

	return <h1>ROCKETS</h1>;
}
