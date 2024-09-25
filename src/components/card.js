import { Card } from '@/shadcn/ui/card';
import React from 'react';

const CardComponent = ({ children, className }) => {
  return (
    <Card
      className={`flex flex-col lg:items-start  lg:justify-start rounded-3xl border-[#e9f0ff] bg-[#f9fbff] gap-4 lg:p-12 w-full md:p-6 ${className}`}>
      {children}
    </Card>
  );
};

export default CardComponent;
