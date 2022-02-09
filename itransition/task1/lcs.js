function lcs(str) {
    if (!str.length || process.argv.slice(2).length > 64 || str.join(" ").search(" ") > 256 || !str.join(" ").match(/\w/)) {
        return ""
    };
    let short = str.reduce((a, b) => a.length <= b.length ? a : b),
        maxlen = short.length;

    for (let i = maxlen; i > 0; i--) {
        for (let start = 0; start <= maxlen - i; start++) {
            let substr = short.substring(start, start + i);
            if (str.every(elem => elem.includes(substr)))
                return substr;
        }
    }
    return "";
}

console.log(lcs(process.argv.slice(2)));