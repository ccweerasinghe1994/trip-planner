import { FC } from 'react';

interface IProps {
	item: {
		id: number;
		description: string;
		quantity: number;
		packed: boolean;
	};
	onRemove: (id: number) => void;
}

const Item: FC<IProps> = ({ item, onRemove }) => {
	const { description, quantity, packed, id } = item;
	const handleRemove = () => {
		onRemove(id);
	};
	return (
		<li>
			<span style={packed ? { textDecoration: 'line-through' } : {}}>
				{quantity} {description}
			</span>
			<button onClick={handleRemove}>❌</button>
		</li>
	);
};

export default Item;
