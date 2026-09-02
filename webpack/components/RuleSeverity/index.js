import React from 'react';
import PropTypes from 'prop-types';

import SeverityCritical from './i_severity-critical.svg';
import SeverityHigh from './i_severity-high.svg';
import SeverityMedium from './i_severity-med.svg';
import SeverityLow from './i_severity-low.svg';
import SeverityUnknown from './i_unknown.svg';

import './RuleSeverity.scss';

const RuleSeverity = props => {
  const propsMapping = {
    low: { alt: 'Low Severity', src: SeverityLow },
    medium: { alt: 'Medium Severity', src: SeverityMedium },
    high: { alt: 'High Severity', src: SeverityHigh },
    critical: {
      alt: 'Critical Severity',
      src: SeverityCritical,
    },
    unknown: { alt: 'Unknown Severity', src: SeverityUnknown },
  };

  const imgProps = propsMapping[props.severity] || propsMapping.unknown;
  // eslint-disable-next-line jsx-a11y/alt-text
  return <img {...imgProps} className="severity-img" />;
};

RuleSeverity.propTypes = {
  severity: PropTypes.string.isRequired,
};

export default RuleSeverity;
