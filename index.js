const contacts = require('./contacts')

const invokeAction = async({action, id, name, email, phone})=> {
    switch (action){
        case 'listContacts':
            const allContacts = await contacts.listContacts()
            console.log(allContacts);
            break;
        case 'getContactById':
            const singleContact = await contacts.getContactById(id);
            console.log(singleContact);
            break;
        
        case 'removeContact':            
            const removedContact = await contacts.removeContact(id);
            console.log(removedContact);
            
        break;
        
        case 'addContact':
            const newContact = await contacts.addContact({name, email, phone})
            console.log(newContact);
            break;

        default:
            console.log('unknown action');
    }

}

//invokeAction({action: 'listContacts'})
// invokeAction({action: 'getContactById', id:'drsAJ4SHPYqZeG-83QTVW'})
//invokeAction({action: 'addContact', name:'Max', email: 'max@max.com', phone: '+380'})
//invokeAction({action: 'removeContact', id:"3b77a997-f622-40e0-a74e-48738922cabb"})

console.log(process.argv);

