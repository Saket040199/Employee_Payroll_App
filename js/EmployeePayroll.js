class EmployeePayRoll{

    id;

    get name(){ return this._name;}
    set name(name) {
         let nameRegex=RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
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
         let now=new Date();
         if (startDate > now) throw 'Start date is a Future Date!';
        // var diff = Math.abs(now.getTime() - startDate.getTime());
        // if (diff / (1000 * 60 * 60 *24) > 120)
        //    throw 'Start ate is Beyong 120 Days!';
        else
        this._startDate = startDate;
    }

    get notes(){ return this._notes;}
    set notes(notes){
        this._notes = notes;
    }

    toString() {
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
      //  const empDate = !this.startDate ? "undefined" : new Date(Date.parse(this.startDate)).toLocaleDateString("en-US", options);
        const empDate = !this.startDate ? "undefined" :
                         this.startDate.toLocaleDateString("en-GB", options);
        return "id = " + this.id + ", name = " + this.name + ", gender = " + this.gender + ", profile picture = " + this.profile + ", department = " + this.department + ", salary = " + this.salary + ", startDate = " + empDate + ", note = " + this.notes;
    }
    
}

