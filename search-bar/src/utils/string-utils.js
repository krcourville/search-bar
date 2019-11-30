export function isNullOrEmpty(value = null) {
    if (value == null) {
        return true;
    }

    if (typeof value === 'string') {
        return value.trim().length === 0;
    }

    return value;
}