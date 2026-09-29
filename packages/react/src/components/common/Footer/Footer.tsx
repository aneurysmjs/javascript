/* eslint-disable jsx-a11y/anchor-is-valid -- placeholder links */
import type { FunctionComponent } from 'react';

const Footer: FunctionComponent = () => (
  <footer className="w-full px-3 pt-6 border-t text-center">
    <div className="flex flex-wrap">
      <div className="w-full md:flex-1">
        Playground
        <small className="block mb-4 text-gray-500">&copy; {new Date().getFullYear()}</small>
      </div>
      <div className="w-1/2 md:flex-1">
        <h5 className="mb-2 text-xl font-medium">Some Links 1</h5>
        <ul className="text-sm">
          <li>
            <a className="text-gray-500 hover:underline" href="#">
              Info 1
            </a>
          </li>
        </ul>
      </div>
      <div className="w-1/2 md:flex-1">
        <h5 className="mb-2 text-xl font-medium">Some Links 2</h5>
        <ul className="text-sm">
          <li>
            <a className="text-gray-500 hover:underline" href="#">
              Info 2
            </a>
          </li>
        </ul>
      </div>
      <div className="w-1/2 md:flex-1">
        <h5 className="mb-2 text-xl font-medium">Some Links 3</h5>
        <ul className="text-sm">
          <li>
            <a className="text-gray-500 hover:underline" href="#">
              Info 3
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
);

export default Footer;
