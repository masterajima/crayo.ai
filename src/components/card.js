import { Card } from '@/shadcn/ui/card';
import React from 'react';

const CardComponent = ({ children, className }) => {
  return (
    <Card
      className={`flex flex-col items-start justify-start rounded-3xl border-[#e9e9fd] bg-[#f9f9ff] gap-4 lg:p-12 w-full md:p-6 ${className}`}>
      {children}
    </Card>
  );
};

export default CardComponent;
