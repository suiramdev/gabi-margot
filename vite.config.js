import {defineConfig} from 'vite';
import hydrogen from '@shopify/hydrogen/plugin';
import { promises as fs } from 'fs'

export default defineConfig({
    plugins: [
        hydrogen(),
        {
            name: 'fix-swipper-css',
            enforce: 'pre',
            resolveId(id) {
                if (id === 'swiper.css') return 'fix-swiper.css'
            },
            async load(id) {
                if (id === 'fix-swiper.css') {
                    return await fs.readFile(
                        './node_modules/swiper/swiper.min.css',
                        'utf-8',
                    )
                }
            },
        },
    ],
});
