import { FC } from 'react';

interface IProps {
	item: {
		id: number;
		description: string;
		quantity: number;
		packed: boolean;
	};
}

const Item: FC<IProps> = ({ item }) => {
	const { description, quantity, packed } = item;

	return (
		<li>
			<span style={packed ? { textDecoration: 'line-through' } : {}}>
				{quantity} {description}
			</span>
			<button>❌</button>
		</li>
	);
};

export default Item;
