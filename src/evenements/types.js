/**
 * Represents an event.
 *
 * @typedef {Object} FDMEvent
 * @property {string} id - A unique identifier for the event.
 * @property {number} year - The year the event takes place.
 * @property {string} title - The title of the event.
 * @property {(string|JSX.Element)} [Actor] - The actor associated with the event, can be a name or a JSX component.
 * @property {string} date - The date and time of the event.
 * @property {(string|JSX.Element)} description - A detailed description of the event.
 * @property {(string|JSX.Element)} Location - The location of the event, can be a URL or JSX component.
 * @property {boolean} past - Indicates if the event has already occurred.
 * @property {Object} [price] - An object detailing different prices for the event.
 * @property {number} [price.adherents] - Price for adherents.
 * @property {number} [price.nonadh] - Price for non-adherents.
 * @property {number} [price.default] - A default price.
 * @property {number} [price.children] - Price for children.
 */
