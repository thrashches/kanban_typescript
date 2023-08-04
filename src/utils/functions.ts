export function fromCamel(str: string): string {
    // Переводит из camelCase в Normal case
    let result = str.replace(/([A-Z])/g, ' $1');
    result = result.trim();
    result = result.toLowerCase();
    result = result.charAt(0).toUpperCase() + result.slice(1);
    return result;
}