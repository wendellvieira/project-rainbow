export interface iPrimaryProp {
	label: string;
}

export function Primary({ label }: iPrimaryProp) {
	return (
		<button
			type="button"
			className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
		>
			{label}
		</button>
	);
}
