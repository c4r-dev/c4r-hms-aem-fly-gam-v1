
export const metadata = {
  title: "HMS Flying Game",
  description: "HMS Flying Game",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
