import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  resolve: {
    alias: {
      '@': '/src', // This tells Vite that @ maps to the /src folder
    },
  },
  plugins: [react()],
});
