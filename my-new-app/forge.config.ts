import type { ForgeConfig } from '@electron-forge/shared-types';
import { MakerSquirrel } from '@electron-forge/maker-squirrel';
import { MakerZIP } from '@electron-forge/maker-zip';
import { MakerDeb } from '@electron-forge/maker-deb';
import { MakerRpm } from '@electron-forge/maker-rpm';
import { VitePlugin } from '@electron-forge/plugin-vite';

const config: ForgeConfig = {
  packagerConfig: {},
  rebuildConfig: {},
  makers: [new MakerSquirrel({}), new MakerZIP({}, ['darwin']), new MakerRpm({}), new MakerDeb({})],
  plugins: [
    new VitePlugin({
      build: [
        {
          // `entry` is just an alias for `build.lib.entry` in the corresponding file of `config`.
          entry: 'dist/main/index.js',
          config: 'packages/main/vite.config.ts',
        },
        {
          entry: 'dist/perload/index.ts',
          config: 'packages/perload/vite.config.ts',
        },
      ],
      renderer: [
        {
          name: 'main_window',
          config: 'packages/renderer/vite.config.ts',
        },
      ],
    }),
  ],
};

export default config;
