import { useState } from 'react';
import { FaSpinner } from 'react-icons/fa6';

export interface iPrimaryProp {
	label: string;
	handle?: () => Promise<void>;
}

export function Primary({ label, handle }: iPrimaryProp) {
	const [loading, setLoading] = useState(false);

	const handleExecuteCallback = async () => {
		try {
			setLoading(true);
			if (handle) await handle();
		} catch (error) {
			console.log(error);
		}

		setLoading(false);
	};

	return loading ? (
		<button
			disabled
			className="inline-flex items-center rounded-md bg-gray-400 px-3 py-2 text-sm font-semibold text-white"
		>
			<div className="spinner">
				<FaSpinner />
			</div>
		</button>
	) : (
		<button
			onClick={handleExecuteCallback}
			className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
		>
			{label}
		</button>
	);
}
