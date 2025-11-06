import { inboxIcon, calendarIcon, upcomingIcon } from "../assets";

function LeftNavigation({ tasks }) {
  return (
    <nav>
      <ul>
        <li className="left-navigation-item">
          <div className="left-navigation-container">
            <img src={inboxIcon} alt="inbox-icon" />
            <p>Inbox</p>
            <p className="task-count">{tasks.length}</p>
          </div>
        </li>
        <li className="left-navigation-item">
          <div className="left-navigation-container">
            <img src={calendarIcon} alt="inbox-icon" />
            <p>Today</p>
            <p className="task-count">{tasks.length}</p>
          </div>
        </li>
        <li className="left-navigation-item">
          <div className="left-navigation-container">
            <img src={upcomingIcon} alt="inbox-icon" />
            <p>Upcoming</p>
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default LeftNavigation;
