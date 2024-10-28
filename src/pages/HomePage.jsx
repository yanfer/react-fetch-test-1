import { useFetch } from "../helpers/useFetch";

export default function HomePage() {
	const { value, loading, error, handleCancelRequest } = useFetch(
		"https://jsonplaceholder.typicode.com/users"
	);
	return (
		<div>
			<h1>Homepage</h1>
			<button onClick={handleCancelRequest}>Cancel Request</button>
			<div className="card">
				<ul>
					{error && <p>{error}</p>}
					{loading && <p>loading...</p>}
					{value?.map((user) => (
						<li key={user.id}>{user.name}</li>
					))}
				</ul>
			</div>
		</div>
	);
}
