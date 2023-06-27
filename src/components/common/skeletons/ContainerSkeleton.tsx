import React, { PropsWithChildren } from 'react';

import classNames from 'classnames';

type ContainerSkeletonProps = {
  className?: string;
};

export function ContainerSkeleton({
  children,
  className,
}: PropsWithChildren<ContainerSkeletonProps>) {
  return (
    <div
      className={classNames(className, {
        'animate-pulse': !children,
      })}>
      {children ?? <div className="flex" />}
    </div>
  );
}
