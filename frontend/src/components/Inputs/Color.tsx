import { Dispatch, SetStateAction, useMemo } from 'react';
import { AiOutlineCheck } from 'react-icons/ai';

export interface iColorProp<T extends Record<string, any>> {
	label: string;
	field: keyof T;
	data: [T, Dispatch<SetStateAction<T>>];
	colors?: string[];
}

export function Color<T extends Record<string, any>>({
	label,
	colors,
	field,
	data: [data, changer],
}: iColorProp<T>) {
	const baseStyle =
		'flex items-center justify-center aspect-square rounded-md cursor-pointer';
	const actived = 'border-solid border-white border-2';

	const fullColors = useMemo(
		() => {
			if (!colors) {
				const sorted: string[] = [];
				if (data[field]) sorted.push(data[field]);

				while (sorted.length < 12) {
					sorted.push(
						'#' + Math.floor(Math.random() * 16777215).toString(16)
					);
				}

				return sorted;
			}

			return colors.slice(0, 12);
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[colors]
	);

	return (
		<div className="mt-4">
			<label className="block text-sm font-medium leading-6 text-slate-300">
				{label}
			</label>

			<div className="grid grid-cols-12 gap-2 mt-2 px-4 py-2 bg-slate-800 rounded-md">
				{fullColors.map((backgroundColor, index) => (
					<div
						key={index}
						style={{ backgroundColor }}
						onClick={() =>
							changer({ ...data, [field]: backgroundColor })
						}
						className={`${baseStyle} ${
							data[field] === backgroundColor && actived
						}`}
					>
						{data[field] === backgroundColor && (
							<div className="text-white text-xl">
								<AiOutlineCheck />
							</div>
						)}
					</div>
				))}
			</div>
		</div>
	);
}
