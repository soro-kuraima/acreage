import React from 'react';

import {
  View,
  Card,
  Grid,
  Flex,
  Text,
  SearchField,
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
  const [maxPrice, setMaxPrice] = React.useState(20000000);
  const [maxAge, setMaxAge] = React.useState(100);
  const [minBuiltUpArea, setMinBuiltUpArea] = React.useState(1);
  const [propertyType, setPropertyType] = React.useState<Propertytype[]>([]);
  const [salesType, setSalesType] = React.useState<Salestype[]>([]);

  const marketPlacePropertyQuery = useQuery({
    queryKey: ['realEstateProperties'],
    queryFn: async () => {
      const response = await DataStore.query(
        Properties,
        (c) =>
          // eslint-disable-next-line @typescript-eslint/no-shadow, arrow-body-style
          c.and((c) => {
            const propertyTypeFilters = propertyType.map((type) =>
              c.propertyType.eq(type)
            );
            const salesTypeFilters = salesType.map((type) =>
              c.salesType.eq(type)
            );

            return [
              ...propertyTypeFilters,
              ...salesTypeFilters,
              c.ageOfProperty.le(maxAge),
              c.price.le(maxPrice),
              c.builtUpArea.ge(minBuiltUpArea),
            ];
          }),
        {
          limit: 15,
          page: 0,
        }
      );

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

  const applyFilters = () => {
    marketPlacePropertyQuery.refetch();
  };

  const resetFilters = () => {
    setMaxPrice(200000000);
    setMaxAge(100);
    setMinBuiltUpArea(1);
    setPropertyType([]);
    setSalesType([]);
    marketPlacePropertyQuery.refetch();
  };

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
          <Text
            variation="primary"
            fontSize="1.5rem"
            fontWeight="bold"
            marginInline="auto">
            Refine your search
          </Text>
          <View paddingBlock="1rem">
            <fieldset>
              <Text variation="primary">Select Property Type</Text>
              <View paddingBlock="0.4rem">
                <CheckboxField
                  label="Apartment"
                  name="apartment"
                  value={Propertytype.APARTMENT}
                  checked={propertyType.includes(Propertytype.APARTMENT)}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setPropertyType([
                        ...propertyType,
                        Propertytype.APARTMENT,
                      ]);
                    } else {
                      setPropertyType(
                        propertyType.filter(
                          (type) => type !== Propertytype.APARTMENT
                        )
                      );
                    }
                  }}
                />
                <CheckboxField
                  label="Villa"
                  name="villa"
                  value={Propertytype.VILLA}
                  checked={propertyType.includes(Propertytype.VILLA)}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setPropertyType([...propertyType, Propertytype.VILLA]);
                    } else {
                      setPropertyType(
                        propertyType.filter(
                          (type) => type !== Propertytype.VILLA
                        )
                      );
                    }
                  }}
                />
                <CheckboxField
                  label="Plot"
                  name="plot"
                  value={Propertytype.PLOT}
                  checked={propertyType.includes(Propertytype.PLOT)}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setPropertyType([...propertyType, Propertytype.PLOT]);
                    } else {
                      setPropertyType(
                        propertyType.filter(
                          (type) => type !== Propertytype.PLOT
                        )
                      );
                    }
                  }}
                />
                <CheckboxField
                  label="Commercial"
                  name="commercial"
                  value={Propertytype.COMMERCIAL}
                  checked={propertyType.includes(Propertytype.COMMERCIAL)}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setPropertyType([
                        ...propertyType,
                        Propertytype.COMMERCIAL,
                      ]);
                    } else {
                      setPropertyType(
                        propertyType.filter(
                          (type) => type !== Propertytype.COMMERCIAL
                        )
                      );
                    }
                  }}
                />
                <CheckboxField
                  label="agricultural"
                  name="agricultural"
                  value={Propertytype.AGRICULTURAL}
                  checked={propertyType.includes(Propertytype.AGRICULTURAL)}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setPropertyType([
                        ...propertyType,
                        Propertytype.AGRICULTURAL,
                      ]);
                    } else {
                      setPropertyType(
                        propertyType.filter(
                          (type) => type !== Propertytype.AGRICULTURAL
                        )
                      );
                    }
                  }}
                />
              </View>
            </fieldset>
          </View>
          <View paddingBlock="1rem">
            <fieldset>
              <Text variation="primary">Select Sales Type</Text>
              <View paddingBlock="0.4rem">
                <CheckboxField
                  label="New"
                  name="new"
                  value={Salestype.NEW}
                  checked={salesType.includes(Salestype.NEW)}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setSalesType([...salesType, Salestype.NEW]);
                    } else {
                      setSalesType(
                        salesType.filter((type) => type !== Salestype.NEW)
                      );
                    }
                  }}
                />
                <CheckboxField
                  label="Resale"
                  name="resale"
                  value={Salestype.RESALE}
                  checked={salesType.includes(Salestype.RESALE)}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setSalesType([...salesType, Salestype.RESALE]);
                    } else {
                      setSalesType(
                        salesType.filter((type) => type !== Salestype.RESALE)
                      );
                    }
                  }}
                />
              </View>
            </fieldset>
          </View>
          <StepperField
            max={100}
            min={1}
            defaultValue={2}
            step={1}
            label="Select age of Property"
            marginBlock="1rem"
            value={maxAge}
            onChange={(e) => setMaxAge(Number(e.target.value))}
          />

          <SliderField
            label="Select minimum built up area"
            max={2000}
            min={1}
            marginBlock="1rem"
            value={minBuiltUpArea}
            onChange={(e) => setMinBuiltUpArea(e)}
          />
          <SliderField
            label="Select maximum price"
            max={200000000}
            min={1}
            marginBlock="1rem"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e)}
          />
          <Flex
            direction="row"
            justifyContent="space-between"
            paddingBlock="1rem">
            <Button onClick={applyFilters} width="48%">
              Apply
            </Button>
            <Button onClick={resetFilters} width="48%">
              Reset
            </Button>
          </Flex>
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
