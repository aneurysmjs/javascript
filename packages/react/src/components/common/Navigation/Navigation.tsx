import { type FunctionComponent, useState } from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

const Navigation: FunctionComponent = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <nav className="flex flex-wrap items-center justify-between py-2">
      <NavLink to="/" className="mr-4 py-1">
        <h5 className="m-0 text-xl font-normal">Dummy</h5>
      </NavLink>
      <button
        className="rounded-md border px-3 py-1 md:hidden"
        type="button"
        data-toggle="collapse"
        aria-controls="navbarCollapse"
        aria-expanded="false"
        aria-label="Toggle navigation"
        onClick={(): void => {
          setOpen(!isOpen);
        }}
      >
        <span aria-hidden="true">&#9776;</span>
      </button>
      <div
        className={classNames('w-full md:flex md:w-auto', {
          hidden: !isOpen,
        })}
      >
        <ul className="flex flex-col md:ml-auto md:flex-row">
          <li>
            <NavLink to="/" className="block px-2 py-2">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/tasks" className="block px-2 py-2">
              Tasks
            </NavLink>
          </li>
          <li>
            <NavLink to="/base-effects" className="block px-2 py-2">
              Effects
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard" className="block px-2 py-2">
              Dashboard
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
