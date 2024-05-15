import clsxm from '../utilities/clsxm';
import React from 'react';

interface TableRowProps {
  className?: string;
  index?: number;
  children: React.ReactNode;
}

export default function TableRow({
  className,
  index,
  children,
}: TableRowProps) {
  return (
    <tr
      className={clsxm(
        index == null
          ? 'bg-gray-300'
          : index % 2 == 0
          ? 'bg-white'
          : 'bg-gray-100',
        className,
      )}
    >
      {children}
    </tr>
  );
}
