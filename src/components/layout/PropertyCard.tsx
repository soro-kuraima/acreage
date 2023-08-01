import React from 'react';

import {
  Card,
  Flex,
  Image,
  Text,
  Button,
  View,
  useTheme,
} from '@aws-amplify/ui-react';
import { useQuery } from '@tanstack/react-query';
import { Storage } from 'aws-amplify';
import { useNavigate } from 'react-router-dom';

import { ContainerSkeleton } from 'components/common';

interface PropertyCardProps {
  propertyId: string;
  propertyTitle: string;
  propertyCity: string;
  propertyBuiltUpArea: number;
  propertyPrice: number;
  propertyImage: string | unknown;
}

export function PropertyCard({
  propertyId,
  propertyTitle,
  propertyCity,
  propertyBuiltUpArea,
  propertyPrice,
  propertyImage,
}: PropertyCardProps) {
  const { tokens } = useTheme();

  const navigate = useNavigate();

  const imageFetchQuery = useQuery({
    queryKey: ['propertyImage', propertyImage],
    queryFn: async () => {
      const imageKey = propertyImage as string;
      const imageURL = await Storage.get(imageKey);

      return imageURL;
    },
  });

  const { data: imageUrl, isLoading, isSuccess } = imageFetchQuery;

  return (
    <Card>
      <Flex direction="row" gap="0">
        {isLoading && <ContainerSkeleton className="h-48" />}
        {isSuccess && (
          <Image
            loading="lazy"
            width="50%"
            height="280px"
            objectFit="cover"
            src={imageUrl as unknown as string}
            alt={propertyTitle}
          />
        )}
        <View
          width="50%"
          backgroundColor={tokens.colors.background.secondary}
          paddingBlock="0.5rem"
          paddingInline="1rem">
          <Flex direction="column">
            <Text variation="primary" fontWeight={600} fontSize="1.6rem">
              {propertyPrice}
            </Text>
            <Text variation="primary" fontWeight={400} fontSize="0.8rem">
              {propertyTitle}
            </Text>
            <Text variation="primary" fontWeight={400} fontSize="0.8rem">
              {propertyCity}
            </Text>
            <Text variation="primary" fontWeight={400} fontSize="0.8rem">
              {propertyBuiltUpArea}
            </Text>
            <Button
              onClick={() => navigate(`/app/market/property/${propertyId}`)}>
              View Property
            </Button>
          </Flex>
        </View>
      </Flex>
    </Card>
  );
}
