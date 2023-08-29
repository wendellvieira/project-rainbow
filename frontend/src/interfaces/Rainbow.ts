export interface Rainbow {
	id?: number;

	fullName: string;

	document: string;

	email: string;

	color: string;

	comments: string;
}

export function rainbowFactory() {
	return {
		fullName: '',
		color: '',
		comments: '',
		document: '',
		email: '',
	};
}
