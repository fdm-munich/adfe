import { events_2023 } from "./2023";
import { events_2024 } from "./2024";
import { events_2025 } from "./2025";

/**
 *  Make sure to list the events chronologically so it will appear from the nearest to the oldest in the history tab
 */
const history = {
  2025 : events_2025.filter( e => e.past ).reverse(),
  2024 : events_2024.filter( e => e.past ).reverse(),
  2023 : events_2023.filter( e => e.past ).reverse(),
};

const events = {
  2025 : events_2025,
  2024 : events_2024,
  2023 : events_2023
};

export function findEventByYearAndId( { id, year } ) {
  const event = events[year].find( e => e.id === id );
  return event;
}

export default history;
