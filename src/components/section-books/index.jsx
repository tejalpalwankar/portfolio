import React from 'react';

import Section from '../section';
import SummaryItem from '../summary-item';

const Sectionbooks = ({ books }) => {
  if (!books.length) return null;

  return (
    <Section title="books">
      {books.map((item) => (
        <SummaryItem
          key={item.name}
          name={item.name}
          description={item.description}
          link={item.link}
        />
      ))}
    </Section>
  );
};

export default Sectionbooks;
