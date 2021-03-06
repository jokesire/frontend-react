import React from 'react';
import { Link, withRouter } from 'react-router-dom';

// Change <a href="roster.html"></a> to <Link to='/roster'></Link> 

function SidePane(props) {
  return (
      <nav id="sidebar">
        <div className="sidebar-header">
          <h3>MindBeWell</h3>
        </div>

        <ul className="list-unstyled components">
          <p>Menu</p>
          <li>
            <a
              href="#homeSubmenu"
              data-toggle="collapse"
              aria-expanded="false"
              className="dropdown-toggle"
            >
              Settings
            </a>
            <ul className="collapse list-unstyled" id="homeSubmenu">
              <li>
                <a href="#">General</a>
              </li>
              <li>
                <a href="#">Departments</a>
              </li>
              <li>
                <a href="#">Permissions</a>
              </li>
            </ul>
          </li>
          <li>
            <a
              href="#pageSubmenu"
              data-toggle="collapse"
              aria-expanded="false"
              className="dropdown-toggle"
            >
              Questions
            </a>
            <ul className="collapse list-unstyled" id="pageSubmenu">
              <li>
                <a href="#">Questions List</a>
              </li>
              <li>
                <a href="#">Question Branching</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">Results</a>
          </li>
          <li>
            <a href="#">Preview</a>
          </li>
        </ul>
      </nav>
  );
}

export default withRouter(SidePane);
