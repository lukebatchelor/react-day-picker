import { ModifierStatus } from './ModifierStatus';

/**
 * Represent the event handler when a day is clicked.
 */
export type DayClickEventHandler = (
  day: Date,
  modifiers: ModifierStatus,
  e: React.MouseEvent
) => void;
