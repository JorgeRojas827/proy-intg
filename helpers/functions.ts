
export const firstLetterUppercase = (s: string) => {
    return s.charAt(0).toUpperCase() + s.slice(1)
}

export const removeLastLetter = (s: string) => {
    if (s.charAt(s.length - 1) == 's') {
        return s.substring(0, s.length - 1)
    } else {
        return s;
    }
}
