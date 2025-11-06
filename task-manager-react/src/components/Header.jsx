import { menuIcon, checkIcon, searchIcon } from "../assets";
import TaskCounter from "./TaskCounter";

function Header({ tasks }) {
  return (
    <header>
      <div className="header-container header-menu">
        <img src={menuIcon} alt="menu" />
      </div>
      <div className="header-container header-search">
        <form action="">
          <label className="search-container">
            <img className="search-icon" src={searchIcon} alt="search-icon" />
            <input className="search-input" type="search" placeholder="Quick find" />
          </label>
        </form>
      </div>
      <div className="header-container header-status">
        <img src={checkIcon} alt="check-icon" />
        <TaskCounter tasks={tasks} />
      </div>
    </header>
  );
}

export default Header;
