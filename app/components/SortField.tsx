import { SortOption } from '@/constants';
import type { Dispatch, SetStateAction } from 'react';

/**
 * Make the select input reusable by passing value and options as props
 */
function Sort({
  sortCriteria,
  onHandleSort,
  options,
}: {
  sortCriteria: string;
  onHandleSort: Dispatch<SetStateAction<string>>;
  options: SortOption[];
}) {
  return (
    <select
      onChange={(e) => onHandleSort(e.target.value)}
      value={sortCriteria}
      
      className='px-2 w-full block max-w-96  h-12 rounded border border-gray-200 text-gray-600 active:ring-0 focus:right-0 outline-none'
    >
      <option hidden value=''>Select Sort Criteria</option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
export default Sort;
