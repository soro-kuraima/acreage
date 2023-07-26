/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from 'react';
import { getOverrideProps } from '@aws-amplify/ui-react/internal';
import { Icon, View } from '@aws-amplify/ui-react';
export default function Arrowleftline(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="24px"
      height="24px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, 'Arrowleftline')}
      {...rest}>
      <View
        padding="0px 0px 0px 0px"
        width="24px"
        height="24px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        {...getOverrideProps(overrides, 'Group')}>
        <Icon
          width="24px"
          height="24px"
          viewBox={{ minX: 0, minY: 0, width: 24, height: 24 }}
          paths={[]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0%"
          bottom="0%"
          left="0%"
          right="0%"
          {...getOverrideProps(overrides, 'Vector21737')}></Icon>
        <Icon
          width="16px"
          height="15.56px"
          viewBox={{ minX: 0, minY: 0, width: 16, height: 15.55596923828125 }}
          paths={[
            {
              d: 'M3.828 6.778L16 6.778L16 8.778L3.828 8.778L9.192 14.142L7.778 15.556L0 7.778L7.778 0L9.192 1.414L3.828 6.778Z',
              fill: 'rgba(3,5,61,1)',
              fillRule: 'nonzero',
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="17.59%"
          bottom="17.59%"
          left="16.67%"
          right="16.67%"
          {...getOverrideProps(overrides, 'Vector21738')}></Icon>
      </View>
    </View>
  );
}
