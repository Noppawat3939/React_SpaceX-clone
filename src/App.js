import './App.css';
import './components/Navbar.css'
import Navbar from './components/Navbar';
import Header from './components/Header';
import Section from './components/Section';
import { NavbarProvider } from './components/Context';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <NavbarProvider>
      {/* Navbar */}
      <Navbar />
      {/* Header */}
      <Header />
      {/* Section */}
        <Section />
      {/* Footer */}
      <Footer />
    </NavbarProvider>
    </>
  );
}

export default App;
