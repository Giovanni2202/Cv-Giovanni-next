import "./globals.css";

export const metadata = {
  title: "Visualizar cambio | Victor Giovanni Ordoñez Romero",
  description: "Portafolio / perfil personal",
  icons: {
    icon: "/ico/index.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
