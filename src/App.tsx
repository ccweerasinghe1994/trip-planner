import './App.css';
import Logo from './Components/Logo.tsx';
import Form, { TItem } from './Components/Form.tsx';
import PackingList from './Components/PackingList.tsx';
import Stats from './Components/Stats.tsx';
import { useState } from 'react';

function App() {
	const [items, setItems] = useState<TItem[]>([]);

	const handleAddItems = (newItem: TItem) => {
		setItems((prevItems) => [...prevItems, newItem]);
	};

	const handleRemoveItems = (id: number) => {
		setItems((prevItems) => prevItems.filter((item) => item.id !== id));
	};

	const handleToggleItems = (id: number) => {
		setItems((prevItems) =>
			prevItems.map((item) => {
				if (item.id === id) {
					return { ...item, packed: !item.packed };
				}
				return item;
			}),
		);
	};

	const clearItems = () => {
		const confirm = window.confirm('Are you sure you want to clear the list?');
		if (!confirm) return;
		setItems([]);
	};
	return (
		<div className={'app'}>
			<Logo />
			<Form onAddItems={handleAddItems} />
			<PackingList
				onUpdate={handleToggleItems}
				onRemove={handleRemoveItems}
				onClearItems={clearItems}
				items={items}
			/>
			<Stats items={items} />
		</div>
	);
}

export default App;
