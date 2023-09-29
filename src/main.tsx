import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import {
	ClerkProvider,
	RedirectToSignIn,
	SignedIn,
	SignedOut,
} from '@clerk/clerk-react';

if (!import.meta.env.VITE_REACT_APP_CLERK_PUBLISHABLE_KEY) {
	throw new Error('Missing Publishable Key');
}
const clerkPubKey: string = import.meta.env
	.VITE_REACT_APP_CLERK_PUBLISHABLE_KEY;
ReactDOM.createRoot(document.getElementById('root')!).render(
	<ClerkProvider publishableKey={clerkPubKey}>
		<React.StrictMode>
			<SignedIn>
				<App />
			</SignedIn>
			<SignedOut>
				<RedirectToSignIn />
			</SignedOut>
		</React.StrictMode>
	</ClerkProvider>,
);
