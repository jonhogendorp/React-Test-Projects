import clsxm from '../utilities/clsxm';
import React from 'react';

interface TableDataCellProps {
  className?: string;
  children?: React.ReactNode;
}

export default function TableDataCell({
  className,
  children,
}: TableDataCellProps) {
  return (
    <td
      className={clsxm(
        'px-6 py-3 text-sm font-medium text-base-content',
        className,
      )}
    >
      {children}
    </td>
  );
}
