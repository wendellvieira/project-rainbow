import { useState, useEffect } from 'react';

import Buttons from '../../components/Buttons';
import Inputs from '../../components/Inputs';
import Texts from '../../components/Texts';
import { Rainbow, rainbowFactory } from '../../interfaces/Rainbow';
import { api } from '../../services/axios';
import Swal from 'sweetalert2';
import { IsValid } from '../../utils/IsValid';

export function RainbowPage() {
	const form = useState<Rainbow>(rainbowFactory());
	const [colors, setColors] = useState<string[]>([]);

	const handleSubmit = async () => {
		try {
			const [data, setData] = form;
			await api.v1.post('/rainbow', data);

			await Swal.fire({
				icon: 'success',
				title: 'Prontinho 🎉',
				text: 'Seu cadastro foi realizado com sucesso!',
			});

			setData(rainbowFactory());
		} catch (error) {
			console.log(error);
		}
	};

	const requestColors = async () => {
		try {
			const { data } = await api.v1.get<{ hex: string }[]>(
				'/rainbow/colors'
			);
			setColors(data.map(({ hex }) => hex));
		} catch (error) {
			console.log('🗿🍷 ~ error:', error);
		}
	};

	useEffect(() => {
		requestColors();
	}, []);

	return (
		<div className="max-w-2xl mx-auto pt-10 px-10">
			<Texts.Title
				title="🌈 Bem-vindo!"
				desc="Olá! Estamos animados em tê-lo conosco. Por favor, preencha os campos abaixo com suas informações. Isso nos ajudará a conhecer você melhor e a atendê-lo de forma ainda mais personalizada."
			/>

			<div className="mt-8">
				<Inputs.Text
					label="Nome completo"
					data={form}
					field="fullName"
					rules={[
						[
							(v) => !IsValid.notEmpty(v),
							'O nome deve conter mais de 3 carecteres',
						],
					]}
				/>

				<Inputs.Text
					label="CPF"
					mask="999.999.999-99"
					data={form}
					field="document"
					rules={[
						[
							(v) => !IsValid.cpf(v),
							'O CPF informado não é válido',
						],
					]}
				/>

				<Inputs.Text
					label="Email"
					data={form}
					field="email"
					rules={[
						[
							(v) => !IsValid.email(v),
							'O Email informado não é válido',
						],
					]}
				/>

				<Inputs.Color
					label="Cor preferida"
					data={form}
					field="color"
					colors={colors}
				/>

				<Inputs.Text label="Observações" data={form} field="comments" />
			</div>

			<div className="my-12">
				<Buttons.Primary label="Enviar" handle={handleSubmit} />
			</div>
		</div>
	);
}
