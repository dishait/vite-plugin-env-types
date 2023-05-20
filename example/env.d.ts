/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_FOO: string
	readonly VITE_F: string 
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}