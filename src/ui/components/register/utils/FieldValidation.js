export function emailValidation(value) {
    const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
    if (emailRegex.test(value) || value.length === 0) {
        return [false, value];
    } else {
        return [true, ''];
    }
}

export function passwordValidation(value) {
    if (value.length >= 6 || value.length === 0) {
        return [false, value];
    } else {
        return [true, ''];
    }
}

export function repasswordValidation(value, valuePassword) {
    if ( valuePassword !== null) {
        if (value === valuePassword || value.length === 0) {
            return [false, value];
        } else {
            return [true, ''];
        }
    }
}