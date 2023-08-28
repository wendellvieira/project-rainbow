export function RainbowPage() {
	return (
		<div className="max-w-2xl mx-auto pt-10 xl:max-w-none xl:ml-0 xl:mr-[15.5rem] xl:pr-16">
			<h1 className="inline-block text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight dark:text-slate-200">
				Title
			</h1>
			<p className="mt-6">any desc</p>

			<div className="mt-4">
				<label className="block text-sm font-medium leading-6 text-slate-300">
					label
				</label>
				<div className="mt-2">
					<div className="flex text-slate-400 bg-slate-800 rounded-md">
						<input
							type="text"
							className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-slate-300 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
						/>
					</div>
				</div>
			</div>

			<div className="mt-6">
				<button
					type="button"
					className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
				>
					button
				</button>
			</div>
		</div>
	);
}
