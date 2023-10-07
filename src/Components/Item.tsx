import { FC } from 'react';

interface IProps {
	item: {
		id: number;
		description: string;
		quantity: number;
		packed: boolean;
	};
	onRemove: (id: number) => void;
	onUpdate: (id: number) => void;
}

const Item: FC<IProps> = ({ item, onRemove, onUpdate }) => {
	const { description, quantity, packed, id } = item;
	const handleRemove = () => {
		onRemove(id);
	};

	const handleChange = () => {
		onUpdate(id);
	};

	return (
		<li>
			<input
				onChange={handleChange}
				type="checkbox"
				value={packed ? 'on' : 'off'}
				name="item"
				id="test"
			/>
			<span style={packed ? { textDecoration: 'line-through' } : {}}>
				{quantity} {description}
			</span>
			<button onClick={handleRemove}>❌</button>
		</li>
	);
};

export default Item;
