import "../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <title>NextJs Tutorial</title>
      </head>

      <body className="text-2xl bg-slate-500">
        <header className="p-4">Hello World 🤔</header>
        {children}
      </body>
    </html>
  );
}
