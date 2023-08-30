export class IsValid {
	static notEmpty(value: string) {
		return value.length > 3;
	}

	static hexColor(color: string): boolean {
		const hexRegex = /^#([A-Fa-f0-9]{3}$|[A-Fa-f0-9]{6}$)/;
		return hexRegex.test(color);
	}

	static email(email: string): boolean {
		const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
		return emailRegex.test(email);
	}

	static cpf(cpf: string): boolean {
		cpf = cpf.replace(/[^\d]+/g, '');

		if (cpf.length !== 11) return false;
		if (cpf === '00000000000') return false;

		let sum = 0;
		let remainder: number;

		for (let i = 1; i <= 9; i++) {
			sum += parseInt(cpf.substring(i - 1, i)) * (11 - i);
		}

		remainder = (sum * 10) % 11;
		if (remainder === 10 || remainder === 11) remainder = 0;
		if (remainder !== parseInt(cpf.substring(9, 10))) return false;

		sum = 0;
		for (let i = 1; i <= 10; i++) {
			sum += parseInt(cpf.substring(i - 1, i)) * (12 - i);
		}

		remainder = (sum * 10) % 11;
		if (remainder === 10 || remainder === 11) remainder = 0;
		if (remainder !== parseInt(cpf.substring(10, 11))) return false;

		return true;
	}
}
