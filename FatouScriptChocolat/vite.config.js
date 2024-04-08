// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Essayage_Project/', // Remplacez 'nom-du-repository' par le nom de votre repository GitHub
  plugins: [react()]
});
