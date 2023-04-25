import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'edu.mtech.ioncomp23',
  appName: 'MTech PWA',
  webDir: 'www',
  bundledWebRuntime: false,
  server: {
    url: 'http://localhost:8100/'
  }
};

export default config;
