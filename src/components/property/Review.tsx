import React from 'react';

import { Card } from '@aws-amplify/ui-react';
import { Link } from 'react-router-dom';

// eslint-disable-next-line import/extensions
import propertyForSale from 'assets/undraw_for_sale_re_egkk.svg';
import { Button } from 'components/common';

export function Review({ onClick }: { onClick: () => void }) {
  return (
    <div className="w-full">
      <Card>
        <div className="my-4">
          <img
            className="mx-auto"
            src={propertyForSale}
            alt="property for sale"
          />
          <Link to="/app/market">
            <Button className="mx-auto" variant="text" size="medium">
              {' '}
              Browse Properties{' '}
            </Button>
          </Link>
          <Button
            onClick={onClick}
            className="mx-auto"
            variant="text"
            size="medium">
            {' '}
            Create New property{' '}
          </Button>
        </div>
      </Card>
    </div>
  );
}
