import "./globals.css";
import { ReactQueryClientProvider } from "@/utils/react-query";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Signika, Cormorant_Garamond } from "next/font/google";

const signika = Signika({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
  variable: "--signika-font",
});

const cg = Cormorant_Garamond({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
  variable: "--cg-font",
});

export const metadata = {
  title: "UCR HEARTS Website",
  description: "The official health club at UCR.",
};

type LayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body
        className={`min-h-screen w-screen overflow-x-hidden bg-hearts-beige ${signika.variable} ${cg.variable}`}
      >
        <Navigation />
        <ReactQueryClientProvider>
          <div className="w-screen overflow-x-hidden font-hearts">
            {children}
          </div>
        </ReactQueryClientProvider>
        <Footer />
      </body>
    </html>
  );
}
