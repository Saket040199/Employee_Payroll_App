const stringifyDate = (date) => {
    const options = { day:'numeric',month:'short',year:'numeric'};
    const newDate = !date ? "undefined" : 
                    new Date(Date.parse(date)).toLocaleTimeString('en-GB',options);
    return newDate;                
}