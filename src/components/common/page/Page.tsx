import React, { PropsWithChildren } from 'react';

import { Helmet } from 'react-helmet';

type PageProps = {
  title?: string;
};
export function Page({ children, title }: PropsWithChildren<PageProps>) {
  return (
    <div>
      <Helmet>
        <title>{title ? `${title} | Acreage` : 'Acreage'}</title>
      </Helmet>
      <div>{children}</div>
    </div>
  );
}
