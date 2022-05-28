export function convertStringToDate(dateStr: string) {
    const dateParts = dateStr.split('/');
    return new Date(Number(dateParts[2]), Number(dateParts[1])-1, Number(dateParts[0]))
}