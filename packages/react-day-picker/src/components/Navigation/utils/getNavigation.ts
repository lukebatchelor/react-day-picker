import { addMonths, startOfMonth } from 'date-fns';

import { DayPickerProps, defaultProps } from '../../DayPicker';
import { NavigationMonths } from '../types';

/**
 * Return the next and the previous months, according to the DayPicker props.
 */
export function getNavigation(props: DayPickerProps): NavigationMonths {
  const {
    fromMonth,
    toMonth,
    month,
    numberOfMonths = defaultProps.numberOfMonths,
    pagedNavigation
  } = props;

  const add = pagedNavigation ? numberOfMonths : 1;
  const currentMonth = startOfMonth(month || defaultProps.today);

  let prevMonth: Date | undefined;
  if (!fromMonth || currentMonth > startOfMonth(fromMonth)) {
    prevMonth = addMonths(currentMonth, add * -1);
  }

  let nextMonth: Date | undefined;
  if (
    !toMonth ||
    addMonths(currentMonth, numberOfMonths) <= startOfMonth(toMonth)
  ) {
    nextMonth = addMonths(currentMonth, add);
  }

  return { nextMonth, prevMonth };
}