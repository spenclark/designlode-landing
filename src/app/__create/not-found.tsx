import { useEffect } from 'react';
import { useNavigate } from 'react-router';

export default function CreateDefaultNotFoundPage() {
	const navigate = useNavigate();

	useEffect(() => {
		document?.getElementById('not-found-root')?.focus();
	}, []);

	const missingPath =
		typeof window !== 'undefined'
			? window.location.pathname.replace(/^\//, '')
			: 'page';

	return (
		<div
			id="not-found-root"
			tabIndex={-1}
			className="flex min-h-screen flex-col items-center justify-center gap-6 px-4 text-center"
		>
			<h1 className="text-3xl font-semibold text-gray-900">Page not found</h1>
			<p className="text-gray-500">
				Looks like &quot;/{missingPath}&quot; isn&apos;t part of this site yet.
			</p>
			<div className="flex gap-3">
				<button
					type="button"
					onClick={() => navigate(-1)}
					className="rounded-md border border-gray-200 px-4 py-2 text-gray-700 hover:bg-gray-50"
				>
					Go back
				</button>
				<button
					type="button"
					onClick={() => navigate('/')}
					className="rounded-md bg-black px-4 py-2 text-white hover:bg-gray-900"
				>
					Home
				</button>
			</div>
		</div>
	);
}

