/**
 * Formats a given Date object into a string based on the specified locale and formatting options.
 *
 * @param {string} locale - A string with a BCP 47 language tag, or an array of such strings.
 *This parameter determines the locale whose formatting conventions should be used.
 *
 * @param {Intl.DateTimeFormatOptions} options - An object with configuration options for the
 *date formatting. This can include properties such as year, month, day, hour, minute, second, and more to specify the desired date and time components in the output string.
 *
 * @param {Date} date - The Date object to be formatted.
 *
 * @returns {string} - A string representing the formatted date according to the specified locale and options.
 *
 * @example
 * const locale = 'en-PH';
 * const options = { year: 'numeric', month: 'long', day: 'numeric' };
 * const date = new Date('2023-07-04');
 *
 * console.log(dateFormatter(locale, options, date));
 * // Output: "July 4, 2023"
 */
const dateFormatter = (
  locale: string,
  options: Intl.DateTimeFormatOptions,
  date: Date
): string => {
  return new Intl.DateTimeFormat(locale, options).format(date);
};

export default dateFormatter;
