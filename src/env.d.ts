/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly VITE_REACT_APP_CLERK_PUBLISHABLE_KEY: string;
	// more env variables...
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
