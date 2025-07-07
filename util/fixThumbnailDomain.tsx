export function fixThumbnailDomain(url: string): string {
    if (!url) return "";
    return url.replace(/^https?:\/\/(www\.)?tech2globe\.com(\/blog)?/, 'https://blog.tech2globe.com');
}
