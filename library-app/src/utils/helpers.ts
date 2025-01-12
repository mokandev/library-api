export function formatDate(dateStr: string) {
  return new Intl.DateTimeFormat("en", {
    dateStyle: "long",
  }).format(new Date(dateStr));
}
