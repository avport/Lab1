"use strict"; 

class Contact {
    constructor(name, email, phone, relation) {
        this.name = name; 
        this.email = email; 
        this.phone = phone; 
        this.relation = relation; 
    }
}

class AddressBook {
    constructor () {
    this.contacts = []; 
    }

    add(info) {
        let newContact = new Contact (info.name, info. email, info.phone, info.relation); 
        this.contacts.push(newContact); 
        console.log (this.contacts); 
    }
    removeAt(index) {
        this.contacts.splice(index, 1); 
        
    }
    print() {
        console.log (this.contacts); 
    }
}

const address = new AddressBook(); 
while (true) {
    let greeting = prompt ("Would you like to add, remove, print or quit?"); 
    if (greeting === "add") {
    let info = {
    name: prompt("Name?"), 
    email: prompt("Email?"), 
    phone: prompt("Phone?"), 
    relationship: prompt("Relation?")
    }; 

    address.add(info); 
}
if (greeting === "remove") {
    let removeGreeting = prompt ("What would you like to delete"); 
    address.removeAt(removeGreeting); 
}
if (greeting === "print") {
  address.print();
}

if (greeting === "quit") {
    console.log ("Good bye"); 
  break;
}
} 