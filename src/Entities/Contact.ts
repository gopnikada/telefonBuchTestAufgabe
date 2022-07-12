class Contact{
    name: string;
    phone: string;

    constructor(_name:string, _phone:string) {
        this.name = _name;
        this.phone = _phone;
    }


    static ReadContactsFromFile(contactsJson: {}):Array<Contact> {

        const c1:Contact = new Contact("1", "2");
        const contacts: Array<Contact> = new Array<Contact>()
        contacts.push(c1)
        return contacts
    }
}
export default Contact;