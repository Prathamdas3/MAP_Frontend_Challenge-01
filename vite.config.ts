import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'
import { VitePWA, VitePWAOptions } from 'vite-plugin-pwa'

const manifestForPlugIn: Partial<VitePWAOptions> = {
  registerType: 'autoUpdate',
  includeAssets: [],
  // devOptions: {
  //   enabled: true,
  // },
  manifest: {
    theme_color: '#ffffff',
    background_color: '#ffffff',
    display: 'standalone',
    scope: '/',
    start_url: '/',
    name: 'CoRider',
    short_name: 'CR',
    description: 'This is demo app',
    orientation: 'portrait',
    icons: [
      {
        src: './public/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'muskable',
      },
      {
        src: './public/icon-256x256.png',
        sizes: '256x256',
        type: 'image/png',
        purpose: 'muskable',
      },
      {
        src: './public/icon-384x384.png',
        sizes: '384x384',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: './public/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
    ],
  },
}

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [react(), VitePWA(manifestForPlugIn)],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
