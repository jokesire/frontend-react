import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import auth0Client from '../Auth';

function SidePane(props) {
  return (
    {/* Sidebar  */},
    <nav id="sidebar">
        <div class="sidebar-header">
            <h3>MindBeWell</h3>
        </div>

        <ul class="list-unstyled components">
            <p>Menu</p>
            <li>
                <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Settings</a>
                <ul class="collapse list-unstyled" id="homeSubmenu">
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
                <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Questions</a>
                <ul class="collapse list-unstyled" id="pageSubmenu">
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
