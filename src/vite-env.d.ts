/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_ORKESTRA_SHEET_WEBHOOK_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
