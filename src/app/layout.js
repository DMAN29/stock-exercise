import { Inter } from "next/font/google";
import "./globals.css";
import MenuBar from "@/component/MenuBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Go India Stock",
  description: "Creating a Frontend website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex">
          <div>
            <MenuBar />
          </div>
          <div>{children}</div>
        </div>
      </body>
    </html>
  );
}
