export interface iTitleProp {
	title: string;
	desc?: string;
}

export function Title({ title, desc = '' }: iTitleProp) {
	return (
		<>
			<h1 className="inline-block text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight dark:text-slate-200">
				{title}
			</h1>
			{desc && <p className="mt-4">{desc}</p>}
		</>
	);
}
