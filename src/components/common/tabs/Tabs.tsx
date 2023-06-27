import React from 'react';

import { NavLink } from 'react-router-dom';

import { Typography } from 'components/common';

type Tab = {
  title: string;
  link: string;
};

export type TabProps = {
  tabs: Array<Tab>;
};

export function Tabs({ tabs }: TabProps) {
  return (
    <div className="mt-3 mx-auto pb-0 w-3/4 flex border-b-2 border-background-light mb-3 text-background-contrastText">
      {tabs.map((tab: Tab) => (
        <NavLink
          key={tab.title}
          to={tab.link}
          className={({ isActive }) =>
            `inline-block px-8 py-2 font-bold text-lg mr-5 ml-0  ${
              isActive
                ? 'text-primary-main border-b-2 border-background-contrastText '
                : 'text-zinc-400 '
            }`
          }>
          <div>
            <Typography style={{ color: 'inherit' }} variant="h3">
              {tab.title}
            </Typography>
          </div>
        </NavLink>
      ))}
    </div>
  );
}
