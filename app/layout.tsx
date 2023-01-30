import "../styles/globals.css";
import Header from "./Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="h-screen w-screen">
      <head>
        <title>It's Me. Portfolio.</title>
      </head>

      <body className="text-2xl bg-slate-900 text-white flex flex-col">
        <Header />
        <main className="text-white font-roboto">{children}</main>
      </body>
    </html>
  );
}
