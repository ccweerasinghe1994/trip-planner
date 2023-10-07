import { FC } from 'react';
import Item from './Item.tsx';
import { TItem } from './Form.tsx';

type Props = {
	items: TItem[];
	onRemove: (id: number) => void;
};
const PackingList: FC<Props> = ({ items, onRemove }) => {
	return (
		<div className={'list'}>
			<ul>
				{items.map((item) => (
					<Item onRemove={onRemove} key={item.id} item={item} />
				))}
			</ul>
		</div>
	);
};

export default PackingList;
