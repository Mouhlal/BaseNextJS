import "@/app/globals.css";
import Navbar from "./components/navbar";


export const metadata = {
  title: {
    default: "Next.js App",
    template: "%s | Next.js App",
  },
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
