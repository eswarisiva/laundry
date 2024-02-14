export const stringToDate : any = (params : any) =>  {
    let localTimezone = null;
    let localDate = null;
    localTimezone = new Date(params);

    let date = localTimezone.getDate();
    let month = localTimezone.getMonth() + 1 ;
    let year = localTimezone.getFullYear();

    localDate = `${date}/${month}/${year}`;
    return localDate;
}