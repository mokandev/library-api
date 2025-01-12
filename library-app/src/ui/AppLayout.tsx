import { Outlet, useNavigation } from 'react-router-dom';
import Header from './Header';
import Loader from './Loader';

export default function AppLayout() {
	const navigation = useNavigation();

	const isLoading = navigation.state === 'loading';

	return (
		<div className='layout'>
      {isLoading && <Loader />}
			<Header />

			<main>
				<Outlet />
			</main>
		</div>
	);
}
