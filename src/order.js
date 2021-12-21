export const orderFunction = (a, b) => {
    if (a.name.official < b.name.official) {
        return -1;
    }
    if (a.name.official > b.name.official) {
        return 1;
    }
    return 0;
}

export const order = (a, b) => {
    if (a < b) {
        return -1;
    }
    if (a > b) {
        return 1;
    }
    return 0;
}
