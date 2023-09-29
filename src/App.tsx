import './App.css';
import Logo from './Components/Logo.tsx';
import Form from './Components/Form.tsx';
import PackingList from './Components/PackingList.tsx';
import Stats from './Components/Stats.tsx';

function App() {
	return (
		<div className={'app'}>
			<Logo />
			<Form />
			<PackingList />
			<Stats />
		</div>
	);
}

export default App;
