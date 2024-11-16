import React from 'react';
import { ShopButton, DocButton } from './button';

interface Props {
  children?: React.ReactNode;
  link: string;
  docs?: string;
}

const ResourceLinks = ({ link, docs }: Props) => {
  return (
    <div className="flex flex-wrap gap-1">
      {link && <ShopButton link={link} />}
      {docs && <DocButton link={docs} />}
    </div>
  );
};

export default ResourceLinks;