const stringifyDate = (date) => {
    const options = { day:'numeric',month:'short',year:'numeric'};
    const newDate = !date ? "undefined" : 
                    new Date(Date.parse(date)).toLocaleDateString('en-GB',options);
    return newDate;                
}


const checkName = (name) => {
    let nameRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
    if(!nameRegex.test(name)) throw 'Name is Incorrect!';
}