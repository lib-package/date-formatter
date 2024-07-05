# Date Formatter

`dateFormatter` is a simple utility function to format JavaScript `Date` objects into readable strings based on specified locales and formatting options. It leverages the `Intl.DateTimeFormat` API to provide flexible and locale-aware date formatting.

## Installation

Use with npm:

```bash
npx jsr add @jhenbert/date-formatter
```

## Usage

```bash
import * as mod from "@jhenbert/date-formatter"
```

## Example

```typescript

// Format a date as "July 4, 2023" in US English locale
const locale = "en-US";
const options = { year: "numeric", month: "long", day: "numeric" };
const date = new Date("2023-07-04");

console.log(mod.default(locale, options, date));
// Output: "July 4, 2023"

// Format a date as "Hulyo 4, 2023" in Philippines locale
const localePh = "fil-PH";
const optionsPh = { year: "numeric", month: "long", day: "numeric" };
const datePh = new Date("2023-07-04");

console.log(mod.default(localePh, optionsPh, datePh));
// Output: "Hulyo 4, 2023"

```
