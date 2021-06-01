class EmployeePayRoll{

    
    get id(){return this._id}
    set id(id){
        this._id=id;
    }

    get name(){ return this._name;}
    set name(name) {
        let nameRegex=RegExp('^[A-Z]{1}[a-z]{2,}\\s[A-Za-z]{3,}$');
        if(nameRegex.test(name))
           this._name=name;
        else throw 'Name is Incorrect';
    }

    get profile(){ return this._profile;}
    set profile(profile){
        this._profile=profile;
    }

    get gender(){ return this._gender;}
    set gender(gender){
        this._gender=gender;
        
    }

    get department(){ return this._department;}
    set department(department){
        this._department=department;
    }

    get salary(){ return this._salary;}
    set salary(salary){
        this._salary=salary;
    }

    get startDate(){ return this._startDate;}
    set startDate(startDate){
        startDate = startDate.getTime() + (30 * 24 * 60 * 60 * 1000);
        let today = new Date().getTime() + (30 * 24 * 60 * 60 * 1000);
        if (today >= startDate) {
            this._startDate = startDate;
        } else {
            ("Invalid date! Please give proper date");
        }
    }

    get notes(){ return this._notes;}
    set notes(notes){
        this._notes = notes;
    }

    toString(){
        const options={ year:'numeric', month:'long',day:'numeric'};
        const empDate= !this.startDate ? "undefined":
                        this.startDate.toLocalDateString("en-US",options);
        return "id: "+this.id +" name: "+this.name +" gender: "+this.gender +
               " profilePic: "+this.profile +" department: "+this.department +
               " salary: "+this.salary +" startDate: "+this.startDate +
               " notes: "+this.notes;
             
    }
}

