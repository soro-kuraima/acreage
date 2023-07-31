import React from 'react';

import {
  View,
  Card,
  Grid,
  Flex,
  Text,
  SearchField,
  SelectField,
  StepperField,
  SliderField,
  CheckboxField,
  ScrollView,
  Button,
} from '@aws-amplify/ui-react';
import { useQuery } from '@tanstack/react-query';
import { DataStore } from 'aws-amplify';

import { ContainerSkeleton } from 'components/common';
import { PropertyCard } from 'components/layout/PropertyCard';
import { Properties, Salestype, Propertytype } from 'models';

export function Market() {
  const marketPlacePropertyQuery = useQuery({
    queryKey: ['realEstateProperties'],
    queryFn: async () => {
      const response = await DataStore.query(Properties);

      if (!response) return null;

      return response;
    },
  });

  const {
    data: realEstateProperties,
    isLoading,
    isSuccess,
    isError,
  } = marketPlacePropertyQuery;

  return (
    <View width="100%" height="100%" paddingBlock="2rem">
      <Grid columnGap="1rem" rowGap="1rem" templateColumns="1fr 1fr 1fr">
        <Card columnStart="1" columnEnd="-1">
          <SearchField
            label="Search"
            placeholder="Search for your preferred locality/city"
          />
        </Card>
        <Card columnStart="1" columnEnd="2">
          <View paddingBlock="1rem">
            <fieldset>
              <Text variation="primary">Select Property Type</Text>
              <View paddingBlock="0.4rem">
                <CheckboxField
                  label="Apartment"
                  name="apartment"
                  value={Propertytype.APARTMENT}
                />
                <CheckboxField
                  label="Villa"
                  name="villa"
                  value={Propertytype.VILLA}
                />
                <CheckboxField
                  label="Plot"
                  name="plot"
                  value={Propertytype.PLOT}
                />
                <CheckboxField
                  label="Commercial"
                  name="commercial"
                  value={Propertytype.COMMERCIAL}
                />
                <CheckboxField
                  label="agricultural"
                  name="agricultural"
                  value={Propertytype.AGRICULTURAL}
                />
              </View>
            </fieldset>
          </View>
          <View paddingBlock="1rem">
            <fieldset>
              <Text variation="primary">Select Sales Type</Text>
              <View paddingBlock="0.4rem">
                <CheckboxField label="New" name="new" value={Salestype.NEW} />
                <CheckboxField
                  label="Resale"
                  name="resale"
                  value={Salestype.RESALE}
                />
              </View>
            </fieldset>
          </View>
          <SelectField
            label="SalesType"
            placeholder="Select Sales type"
            marginBlock="1rem">
            <option value={Salestype.NEW}>New</option>
            <option value={Salestype.RESALE}>Resale</option>
          </SelectField>

          <StepperField
            max={100}
            min={1}
            defaultValue={2}
            step={1}
            label="Select age of Property"
            marginBlock="1rem"
          />
          <SliderField
            label="Select minimum built up area"
            max={2000}
            min={1}
            marginBlock="1rem"
          />
          <Button marginBlock="1rem"> Apply Filters</Button>
        </Card>
        <Card columnStart="2" columnEnd="-1">
          <ScrollView height="80vh">
            <Flex gap="0.5rem" direction="column">
              {isSuccess &&
                realEstateProperties?.map((property) => (
                  <PropertyCard
                    key={property.id}
                    propertyId={property.id}
                    propertyTitle={property.title}
                    propertyCity={property.city}
                    propertyBuiltUpArea={property.builtUpArea}
                    propertyPrice={property.price}
                    propertyImage={property.propertyImages[0]}
                  />
                ))}
              {isLoading && <ContainerSkeleton className="h-96" />}
              {isError && <div>There was an error</div>}
            </Flex>
          </ScrollView>
        </Card>
      </Grid>
    </View>
  );
}
