import "./globals.css";

export const metadata = {
  title: "Sagar & Priyanka | Wedding Invitation",
  description: "Join us in celebrating the wedding of Sagar Shankar Sonar and Priyanka Rajendra Sonar on Nov 25, 2026.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-rani-950 text-cream-50 font-sans antialiased overflow-x-hidden selection:bg-gold-500 selection:text-rani-950">
        {children}
      </body>
    </html>
  );
}
