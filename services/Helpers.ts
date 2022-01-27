export const genID = (length: number) => {
    const id = () => {
        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    }

    let i = 0;
    let finalID = id();

    while (i < length-1) {
        finalID = finalID + '-' + id();

        i++;
    }

    return finalID;
}

export const sanitize = (text: string) => {
    const regex = /<script\b[^>]*>([\s\S]*?)<\/script>/gm;
    return text.replace(regex, ' ');
}