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
      
      className='block h-12 w-full max-w-96  rounded border border-gray-200 px-2 text-gray-600 outline-none focus:right-0 active:ring-0'
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
