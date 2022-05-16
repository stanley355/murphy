import React from 'react';
import Link from 'next/link';

interface ICloudProductDescription {
  title: string;
  desc: string;
  url: string;
}

const CloudProductDescription = (props: ICloudProductDescription) => {
  const { title, desc, url } = props;

  if (desc.length > 200) {
    return (
      <div>
        <span>{desc.substring(0, 200).concat('...')}</span>
        <span style={{ textDecoration: 'underline' }}>
          <Link href={url}>
            <a title={title}>See More</a>
          </Link>
        </span>
      </div>
    );
  }
  return <div>{desc}</div>;
};

export default CloudProductDescription;
