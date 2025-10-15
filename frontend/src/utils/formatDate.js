const DATE_ONLY_REGEX = /^\d{4}-\d{2}-\d{2}$/;

export function parseDateValue(value) {
  if (!value) {
    return null;
  }

  if (typeof value === "string" && DATE_ONLY_REGEX.test(value.trim())) {
    const [year, month, day] = value.split("-").map((segment) => Number.parseInt(segment, 10));
    if ([year, month, day].some((part) => Number.isNaN(part))) {
      return null;
    }
    return new Date(year, month - 1, day);
  }

  const parsed = new Date(value);
  return Number.isNaN(parsed.getTime()) ? null : parsed;
}

export function formatReadableDate(value, locale = "en-US", options) {
  if (!value) {
    return "";
  }

  const date = parseDateValue(value);
  if (!date) {
    return value;
  }

  const fallbackOptions = { month: "long", day: "numeric", year: "numeric" };
  return date.toLocaleDateString(locale, options ?? fallbackOptions);
}
