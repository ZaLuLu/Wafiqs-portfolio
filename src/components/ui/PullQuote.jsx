import React from 'react';

export default function PullQuote({ children }) {
  return (
    <div className="pull-quote">
      <blockquote className="pull-quote-text">{children}</blockquote>
    </div>
  );
}
