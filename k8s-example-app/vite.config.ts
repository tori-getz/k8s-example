import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import ip from 'ip';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    global: {
      ipAddress: ip.address(),
    },
  },
});
