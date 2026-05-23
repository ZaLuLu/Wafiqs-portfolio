import React from 'react';

export default function ColumnRule({ vertical = false }) {
  if (vertical) {
    return <div className="column-rule--vertical" style={{ minHeight: '100%' }} />;
  }
  return <div className="column-rule" />;
}
