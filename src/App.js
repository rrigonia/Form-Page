import Form from './Form';
import Navbar from './Navbar';
import PageContent from './PageContent';
import { AppProviders } from './AppProviders';

function App() {
	return (
		<AppProviders>
			<PageContent>
				<Navbar />
				<Form />
			</PageContent>
		</AppProviders>
	);
}

export default App;
