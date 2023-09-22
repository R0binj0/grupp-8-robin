import './globals.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  
  return (
      <html lang='en'>
        <head>
          <script src="https://kit.fontawesome.com/1e0ebca22e.js" crossOrigin="anonymous"></script>
        </head>
        <body>
          <NavBar></NavBar>
          {children}
          <Footer></Footer>
        </body>
      </html>
  );
}