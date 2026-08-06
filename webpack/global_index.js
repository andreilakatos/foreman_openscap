import React from 'react';
import { addGlobalFill } from 'foremanReact/components/common/Fill/GlobalFill';
import HostKebabItems from './components/HostExtentions/HostKebabItems';

const OPENSCAP_KEBAB_WEIGHT = 400;

addGlobalFill(
  'host-details-kebab',
  `openscap-kebab-items`,
  <HostKebabItems key="openscap-host-kebab" />,
  OPENSCAP_KEBAB_WEIGHT
);
