export function formatDate(date : Date) :string {
    return date.toLocaleDateString("en-US");
}

export function slugify(text:string): string{
    return text.trim().toLowerCase().replace(/[^a-z0-9]+/g, "-")
}