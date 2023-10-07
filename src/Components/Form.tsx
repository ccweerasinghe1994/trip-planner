import { FC } from 'react';
import { FormEvent, useState } from 'react';

export type TItem = {
	id: number;
	description: string;
	quantity: number;
	packed: boolean;
};
type Props = {
	onAddItems: (newItem: TItem) => void;
};
const Form: FC<Props> = ({ onAddItems }) => {
	const [quantity, setQuantity] = useState(1);
	const [description, setDescription] = useState('');
	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const newItem = {
			id: Math.random() * 1000,
			description,
			quantity,
			packed: false,
		};
		onAddItems(newItem);
		setQuantity(1);
		setDescription('');
	};
	const handleChange = (e: FormEvent<HTMLSelectElement | HTMLInputElement>) => {
		const { value, name } = e.currentTarget;
		if (name === 'description') setDescription(value);
		if (name === 'quantity') setQuantity(Number(value));
	};
	return (
		<form className={'add-form'} onSubmit={handleSubmit}>
			<h3>what do you need for your 😍 trip ?</h3>
			<select name={'quantity'} value={quantity} onChange={handleChange}>
				{Array.from({ length: 10 }, (_, i) => i + 1).map((item) => (
					<option key={item} value={item}>
						{item}
					</option>
				))}
			</select>
			<input
				name={'description'}
				onChange={handleChange}
				value={description}
				type="text"
				placeholder={'item...'}
			/>
			<button>add</button>
		</form>
	);
};

export default Form;
