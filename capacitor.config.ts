import type { CapacitorConfig } from '@capacitor/cli';

const config = {
  appId: 'com.example.bmiapp',      // <-- Đổi cái này theo tên app bạn muốn
  appName: 'BMI App',               // <-- Tên hiển thị của app
  webDir: 'www',                    // <-- Thư mục sau khi `ionic build`
  bundledWebRuntime: false
};

export default config;

