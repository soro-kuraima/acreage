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
    <div className="mx-auto mb-3 mt-3 flex w-3/4 border-b-2 border-background-light pb-0 text-background-contrastText">
      {tabs.map((tab: Tab) => (
        <NavLink
          key={tab.title}
          to={tab.link}
          className={({ isActive }) =>
            `ml-0 mr-5 inline-block px-8 py-2 text-lg font-bold  ${
              isActive
                ? 'border-b-2 border-background-contrastText text-primary-main '
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
