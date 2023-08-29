import { Dispatch, SetStateAction } from 'react';

export interface iTextProp<T extends Record<string, any>> {
	label: string;
	field: keyof T;
	data: [T, Dispatch<SetStateAction<T>>];
}

export function Text<T extends Record<string, any>>({
	label,
	field,
	data: [data, changer],
}: iTextProp<T>) {
	const handleOnInput = (event: any) => {
		const { value } = event.target;
		changer({ ...data, [field]: value });
	};

	return (
		<div className="mt-4">
			<label className="block text-sm font-medium leading-6 text-slate-300">
				{label}
			</label>

			<div className="mt-2">
				<div className="flex text-slate-400 bg-slate-800 rounded-md">
					<input
						type="text"
						value={data[field]}
						onInput={handleOnInput}
						className="block flex-1 border-0 bg-transparent px-4 py-2 text-slate-300 placeholder:text-gray-400"
					/>
				</div>
			</div>
		</div>
	);
}
