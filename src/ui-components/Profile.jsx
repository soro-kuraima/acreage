/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from 'react';
import { getOverrideProps } from '@aws-amplify/ui-react/internal';
import { Image, Text, View } from '@aws-amplify/ui-react';
export default function Profile(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="315px"
      height="89px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(25,61,122,1)"
      {...getOverrideProps(overrides, 'Profile')}
      {...rest}>
      <Image
        width="50px"
        height="50px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="20px"
        left="30px"
        borderRadius="15px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        {...getOverrideProps(overrides, 'Image')}></Image>
      <Text
        fontFamily="Lato"
        fontSize="14px"
        fontWeight="400"
        color="rgba(190,200,218,1)"
        lineHeight="16.80000114440918px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="22px"
        left="93px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Welcome back,"
        {...getOverrideProps(overrides, '\u270F\uFE0F Greeting')}></Text>
      <Text
        fontFamily="Inter"
        fontSize="20px"
        fontWeight="700"
        color="rgba(255,255,255,1)"
        lineHeight="24.204544067382812px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="44px"
        left="93px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Alexander Smith"
        {...getOverrideProps(overrides, '\u270F\uFE0F Name')}></Text>
    </View>
  );
}
