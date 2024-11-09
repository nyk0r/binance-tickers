/// <reference types="vite/client" />


interface ImportMetaEnv {
  readonly API_BASE: string
  readonly STREAMS_BASE: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}