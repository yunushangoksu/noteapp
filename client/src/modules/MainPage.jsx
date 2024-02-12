import "../styles/MainPage.css";

function MainPage() {
  return (
    <div>
      <div className="header">
        <div className="logoWrapper">
          <div className="navbarButton">X</div>

          <div className="logo">Noteapp</div>
        </div>
        <input type="text" className="searchInput" placeholder="Search" />
        <div className="currentUser">Current user</div>
      </div>
      <div className="navBar">Navbar</div>
    </div>
  );
}

export default MainPage;
