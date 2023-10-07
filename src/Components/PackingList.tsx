import { FC } from 'react';
import Item from './Item.tsx';
import { TItem } from './Form.tsx';

type Props = {
	items: TItem[];
	onRemove: (id: number) => void;
	onUpdate: (id: number) => void;
};
const PackingList: FC<Props> = ({ items, onRemove, onUpdate }) => {
	return (
		<div className={'list'}>
			<ul>
				{items.map((item) => (
					<Item
						onRemove={onRemove}
						onUpdate={onUpdate}
						key={item.id}
						item={item}
					/>
				))}
			</ul>
		</div>
	);
};

export default PackingList;
