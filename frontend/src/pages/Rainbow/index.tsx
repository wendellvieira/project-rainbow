import { useState } from 'react';

import Buttons from '../../components/Buttons';
import Inputs from '../../components/Inputs';
import Texts from '../../components/Texts';
import { Rainbow, rainbowFactory } from '../../interfaces/Rainbow';

export function RainbowPage() {
	const form = useState<Rainbow>(rainbowFactory());

	return (
		<div className="max-w-2xl mx-auto pt-10 xl:max-w-none xl:ml-0 xl:mr-[15.5rem] xl:pr-16">
			<Texts.Title
				title="🌈 Bem-vindo!"
				desc="Olá! Estamos animados em tê-lo conosco. Por favor, preencha os campos abaixo com suas informações. Isso nos ajudará a conhecer você melhor e a atendê-lo de forma ainda mais personalizada."
			/>

			<div className="mt-8">
				<Inputs.Text
					label="Nome completo"
					data={form}
					field="fullName"
				/>
				<Inputs.Text label="CPF" data={form} field="document" />
				<Inputs.Text label="Email" data={form} field="email" />
				<Inputs.Text label="Cor preferida" data={form} field="color" />
				<Inputs.Text label="Observações" data={form} field="comments" />
			</div>

			<div className="my-12">
				<Buttons.Primary label="Enviar" />
			</div>
		</div>
	);
}

// (51) 98947-5543
// https://app.innovea.com.br/cadastro_ipros
// https://innovea.com.br/teste-de-homologacao/
