import "./globals.css";

export const metadata = {
  title: "فروشگاه عطر",
  description: "ساخته شده توسط محمدرضا عبداللهی",
};

export default function RootLayout({ children }) {
  return (
    <html dir="rtl" lang="fa">
      <body>{children}</body>
    </html>
  );
}
