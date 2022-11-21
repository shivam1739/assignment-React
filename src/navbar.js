import "./navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="left"> Ecommerce</div>
      <div className="mid">
        <input type="text" placeholder="search"></input>
      </div>
      <div className="right">
        <div className="Userintro">hii USer</div>
        <div className="Category">Category</div>
        <div className="Logout">Logout</div>
      </div>
    </div>
  );
}
