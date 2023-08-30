import { Dispatch, SetStateAction, useState } from 'react';
import InputMask from 'react-input-mask';
import { BiSolidErrorCircle } from 'react-icons/bi';

export interface iTextProp<T extends Record<string, any>> {
	label: string;
	field: keyof T;
	data: [T, Dispatch<SetStateAction<T>>];

	mask?: string;
	rules?: [(value: string) => boolean, string][];
}

export function Text<T extends Record<string, any>>({
	label,
	field,
	data: [data, changer],
	mask,
	rules,
}: iTextProp<T>) {
	const [valid, setValid] = useState(true);
	const [errorMessage, setErrorMessage] = useState('');

	const baseClass = 'flex items-center px-4 py-2 bg-slate-800 rounded-md';
	const borderError = 'border border-solid border-red-600';
	const baseInputClass =
		'block flex-1 border-0 bg-transparent placeholder:text-gray-400 focus:outline-none';

	const handleOnInput = (event: any) => {
		const { value } = event.target;

		if (rules) {
			try {
				for (const [rule, message] of rules) {
					const hasError = rule(value);
					if (hasError) throw message;
				}

				setValid(true);
				setErrorMessage('');
			} catch (error) {
				setErrorMessage(error as string);
				setValid(false);
			}
		}

		changer({ ...data, [field]: value });
	};

	return (
		<div className="mt-4">
			<label className="block text-sm font-medium leading-6 text-slate-300">
				{label}
			</label>

			<div className="mt-2">
				<div
					className={
						valid
							? `${baseClass} text-slate-400`
							: `${baseClass} ${borderError}`
					}
				>
					{mask ? (
						<InputMask
							mask={mask}
							value={data[field]}
							onInput={handleOnInput}
							className={
								valid
									? `${baseInputClass} text-slate-300`
									: `${baseInputClass} text-red-500`
							}
						/>
					) : (
						<input
							type="text"
							value={data[field]}
							onInput={handleOnInput}
							className={
								valid
									? `${baseInputClass} text-slate-300`
									: `${baseInputClass} text-red-500`
							}
						/>
					)}

					{!valid && (
						<div className="text-red-600 text-xl">
							<BiSolidErrorCircle />
						</div>
					)}
				</div>
			</div>

			{!valid && (
				<div className="text-red-500 text-xs">{errorMessage}</div>
			)}
		</div>
	);
}
