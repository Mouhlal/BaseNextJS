import Footer from "./components/footer";
import Navigation from "./components/navbar";



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
        
          <Footer />
      </body>
    </html>
  );
}
