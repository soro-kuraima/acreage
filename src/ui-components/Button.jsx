/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from 'react';
import {
  getOverrideProps,
  getOverridesFromVariants,
  mergeVariantsAndOverrides,
} from '@aws-amplify/ui-react/internal';
import { Text, View } from '@aws-amplify/ui-react';
export default function Button(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: { '\u270F\uFE0F Label': {}, Button: {} },
      variantValues: { type: 'Default', style: 'Primary', state: 'Active' },
    },
    {
      overrides: {
        '\u270F\uFE0F Label': { color: 'rgba(0,40,107,1)' },
        Button: { backgroundColor: 'rgba(255,255,255,1)' },
      },
      variantValues: { type: 'Default', style: 'White', state: 'Active' },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <View
      width="315px"
      height="50px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      borderRadius="10px"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(0,40,107,1)"
      {...getOverrideProps(overrides, 'Button')}
      {...rest}>
      <Text
        fontFamily="Lato"
        fontSize="14px"
        fontWeight="600"
        color="rgba(255,255,255,1)"
        lineHeight="16.80000114440918px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="calc(50% - 8.5px - -0.5px)"
        left="calc(50% - 28.5px - 0px)"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Continue"
        {...getOverrideProps(overrides, '\u270F\uFE0F Label')}></Text>
    </View>
  );
}
