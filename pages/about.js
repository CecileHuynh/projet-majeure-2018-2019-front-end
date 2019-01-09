import React from 'react';

import Wrapper from '../src/helpers/Wrapper';
import DynamicHead from '../src/components/DynamicHead';

const About = () => (
  <div>
    <DynamicHead
      title="About"
      description="About page | School project"
      keywords="About school project CPE"
    />
    <p className="example">About NextJS</p>
  </div>
);

export default Wrapper(About);
