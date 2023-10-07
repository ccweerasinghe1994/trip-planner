import { FC } from 'react';
import { TItem } from './Form';

type TProps = {
	items: TItem[];
};

const Stats: FC<TProps> = ({ items }) => {
	const itemsCount = items?.length;
	const packedItems = items.reduce((acc, item) => {
		if (item.packed) {
			acc += 1;
		}
		return acc;
	}, 0);
	if (!itemsCount) {
		return (
			<footer className={'stats'}>
				<em>start adding items to the list 📜</em>
			</footer>
		);
	}
	return (
		<footer className={'stats'}>
			<em>
				you have {itemsCount} items on your list, and you already packed{' '}
				{packedItems}({Math.round((packedItems / itemsCount) * 100)}%)
			</em>
		</footer>
	);
};

export default Stats;
