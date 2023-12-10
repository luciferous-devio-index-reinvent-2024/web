import "./App.css";
import Navbar, { NavbarMenuItem } from "./components/navbar";

function App() {
  const menuItems: NavbarMenuItem[] = [];
  return (
    <>
      <Navbar menuItems={menuItems} />
      <section>
        <div className="container">
          <h1>test</h1>
        </div>
      </section>
    </>
  );
}

export default App;
