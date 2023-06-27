/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';

import {
  MdHome,
  MdAddHome,
  MdViewList,
  MdBarChart,
  MdManageAccounts,
} from 'react-icons/md';
import { NavLink } from 'react-router-dom';

// eslint-disable-next-line import/extensions
import avatar from 'assets/react.svg';

export function Menu() {
  return (
    <div className="bg-background-main">
      <div className="avatar-wrapper mt-16 mb-24 flex justify-center">
        <div className="avatar w-10 md:w-24">
          <img
            src={avatar}
            alt=""
            className="bg-orange-300 rounded-[50%] mb-2"
          />
          <h1 className="hidden md:block text-center text-white font-semibold">
            {' '}
            Abhishek Sharma
          </h1>
        </div>
      </div>
      <div className="navigation-wrapper flex justify-center">
        <div className="navigation">
          <nav className="">
            <ul>
              <li className="">
                <NavLink className="" to="/app/market">
                  {({ isActive }) => (
                    <>
                      {isActive ? (
                        <div className="link flex items-center gap-4 p-4 bg-gradient-to-r from-indigo-400 to-indigo-700 px-8 md:px-16">
                          <MdHome className="text-gray-300 text-2xl" />
                          <span className="hidden md:block text-gray-300 font-semibold text-2xl">
                            Market
                          </span>
                        </div>
                      ) : (
                        <div className="link flex items-center gap-4 p-4 px-8  md:px-16">
                          <MdHome className="text-gray-300 text-2xl" />
                          <span className="hidden md:block text-gray-300 font-semibold text-2xl">
                            Market
                          </span>
                        </div>
                      )}
                    </>
                  )}
                </NavLink>
              </li>
              <li className="">
                <NavLink className="" to="/app/create">
                  {({ isActive }) => (
                    <>
                      {isActive ? (
                        <div className="link flex items-center gap-4 p-4 bg-gradient-to-r from-indigo-400 to-indigo-700 px-8 md:px-16">
                          <MdAddHome className="text-gray-300 text-2xl" />
                          <span className="hidden md:block text-gray-300 font-semibold text-2xl">
                            Create Property
                          </span>
                        </div>
                      ) : (
                        <div className="link flex items-center gap-4 p-4 px-8  md:px-16">
                          <MdAddHome className="text-gray-300 text-2xl" />
                          <span className="hidden md:block text-gray-300 font-semibold text-2xl">
                            Create Property
                          </span>
                        </div>
                      )}
                    </>
                  )}
                </NavLink>
              </li>
              <li className="">
                <NavLink className="app" to="/app/my-properties">
                  {({ isActive }) => (
                    <>
                      {isActive ? (
                        <div className="link flex items-center gap-4 p-4 bg-gradient-to-r from-indigo-400 to-indigo-700 px-8 md:px-16">
                          <MdViewList className="text-gray-300 text-2xl" />
                          <span className="hidden md:block text-gray-300 font-semibold text-2xl">
                            My Properties
                          </span>
                        </div>
                      ) : (
                        <div className="link flex items-center gap-4 p-4 px-8  md:px-16">
                          <MdViewList className="text-gray-300 text-2xl" />
                          <span className="hidden md:block text-gray-300 font-semibold text-2xl">
                            My Properties
                          </span>
                        </div>
                      )}
                    </>
                  )}
                </NavLink>
              </li>
              <li className="">
                <NavLink className="" to="/app/my-investments">
                  {({ isActive }) => (
                    <>
                      {isActive ? (
                        <div className="link flex items-center gap-4 p-4 bg-gradient-to-r from-indigo-400 to-indigo-700 px-8 md:px-16">
                          <MdBarChart className="text-gray-300 text-2xl" />
                          <span className="hidden md:block text-gray-300 font-semibold text-2xl">
                            My Investments
                          </span>
                        </div>
                      ) : (
                        <div className="link flex items-center gap-4 p-4 px-8  md:px-16">
                          <MdBarChart className="text-gray-300 text-2xl" />
                          <span className="hidden md:block text-gray-300 font-semibold text-2xl">
                            My Investments
                          </span>
                        </div>
                      )}
                    </>
                  )}
                </NavLink>
              </li>
              <li className="">
                <NavLink className="" to="/app/account">
                  {({ isActive }) => (
                    <>
                      {isActive ? (
                        <div className="link flex items-center gap-4 p-4 bg-gradient-to-r from-indigo-400 to-indigo-700 px-8 md:px-16">
                          <MdManageAccounts className="text-gray-300 text-2xl" />
                          <span className="hidden md:block text-gray-300 font-semibold text-2xl">
                            Account
                          </span>
                        </div>
                      ) : (
                        <div className="link flex items-center gap-4 p-4 px-8  md:px-16">
                          <MdManageAccounts className="text-gray-300 text-2xl" />
                          <span className="hidden md:block text-gray-300 font-semibold text-2xl">
                            Account
                          </span>
                        </div>
                      )}
                    </>
                  )}
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
