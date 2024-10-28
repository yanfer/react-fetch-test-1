import { useEffect, useState } from "react";

export function useFetch(url) {
	const [value, setValue] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [controller, setController] = useState(null);

	useEffect(() => {
		const controller = new AbortController();
		setController(controller);
		setLoading(true);
		fetch(url, { signal: controller.signal })
			.then((res) => res.json())
			.then((data) => setValue(data))
			.catch((err) => {
				if (err.name === "AbortError") {
					console.log("Request Cancelled");
				} else {
					setError(err);
				}
			})
			.finally(() => setLoading(false));

		return () => controller.abort();
	}, [url]);

	const handleCancelRequest = () => {
		if (controller) {
			controller.abort();
			setError("request canceled");
		}
	};

	return { value, loading, error, handleCancelRequest };
}
