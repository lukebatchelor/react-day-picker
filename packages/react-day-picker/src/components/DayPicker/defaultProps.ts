import english from 'date-fns/locale/en-US';

import { Caption } from '../Caption/Caption';
import { Day } from '../Day';
import { Navigation } from '../Navigation';
import { NextIcon } from '../NextIcon';
import { PrevIcon } from '../PrevIcon';
import { WeekNumber } from '../WeekNumber';
import { formatCaption } from './formatters/formatCaption';
import { formatDay } from './formatters/formatDay';
import { formatWeekdayName } from './formatters/formatWeekdayName';
import { formatWeekNumber } from './formatters/formatWeekNumber';
import classNames from './defaultClassNames';

export const defaultProps = {
  enableOutsideDaysClick: false,
  classNames,
  className: '',
  components: {
    Caption,
    Day,
    Navigation,
    WeekNumber,
    NextIcon,
    PrevIcon
  },
  fixedWeeks: false,
  formatCaption,
  formatDay,
  formatWeekdayName,
  formatWeekNumber,
  initialMonth: new Date(),
  locale: english,
  modifiersClassNames: {},
  month: new Date(),
  numberOfMonths: 1,
  pagedNavigation: false,
  reverseMonths: false,
  showCaption: true,
  showHead: true,
  showNavigation: true,
  showOutsideDays: false,
  showWeekNumber: false,
  today: new Date()
};