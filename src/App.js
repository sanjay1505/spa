import React , {useState , Fragment } from "react";
import {nanoid} from "nanoid";

 import ReadOnlyRow from "./components/ReadOnlyRow"; 
 import  EditableRow from "./components/editable"
import './App.css';
import data from "./mock-data.json";
import {CSVLink} from "react-csv";


function App() {

  const [contacts , setContacts] = useState(data);


  
 
   

  const [addFormData,setAddFormData] = useState({
    fullName:"",
    address: "",
     phoneNumber: "",
      email: "",
  });




      const [editFormData , setEditFormData] = useState({
  fullName:"",
    address: "",
     phoneNumber: "",
      email: "",

 })
   const [editContactId , setEditContactId] = useState(null);

  function handleAddFormChange(event) {
     event.preventDefault();

      const fieldName = event.target.getAttribute("name");
         const fieldValue = event.target.value;
          const newFormData = {...addFormData};
          newFormData[fieldName] = fieldValue;
              setAddFormData(newFormData);
  }
   function handleEditFormChange(event) {

     event.preventDefault();

       const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;

           const newFormData = {...editFormData};
             newFormData[fieldName] = fieldValue;
              setEditFormData(newFormData);

   }

   function handleAddFormSubmit(event) {
    event.preventDefault();
     const newContact = {
       id: nanoid(),
      fullName: addFormData.fullName,
       address:  addFormData.address,
        phoneNumber: addFormData.phoneNumber,
         email:    addFormData.email,
     }
         
     const newContacts = [...contacts , newContact];
       setContacts(newContacts);
        
   }
     
   function handleEditFormSubmit(event) {

     event.preventDefault();
      
       const editedContact = {
          
        fullName: editFormData.fullName,
         address: editFormData.address,
           phoneNumber: editFormData.phoneNumber,
             email: editFormData.email,


       }   
         const newContacts = [...contacts];

             const index = contacts.findIndex((contact) => contact.id ===editContactId);
                   

               newContacts[index] = editedContact;
                
                setContacts(newContacts);



                 



                 setEditContactId(null);

               
      }

    function handleEditClick(event , contact) { 
       
       event.preventDefault();
        


        setEditContactId(contact.id);

         const formValues =  {
          fullName: contact.fullName,
           address: contact.address,
             phoneNumber: contact.phoneNumber,
               email: contact.email,
         }

            setEditFormData(formValues);

    }
      function handleCancelClick() {
        setEditContactId(null);
      }
        function handleDeleteClick(contactId) {
          const newContacts = [...contacts];
            

              const index = contacts.findIndex((contact) => contact.id === contactId);
               
               newContacts.splice(index , 1);
                setContacts(newContacts);
            
        }
        const headers = [
          {
          label: "Name" , key:"fullName"
        },
        {
          label:"Adress" , key: "address"
        },
        {
          label:"phone number" , key: "phoneNumber"
        },
        {
          label : "mail" , key: "email"
        }]

         const csvLink = {
          filename:"file.csv",
           headers:headers,
            data:contacts,
            
         }
  return (
    <div className = "app-container" >
      <h1>data table</h1>
       <p>(export to csv)</p>
      <form onSubmit = {handleEditFormSubmit} >
        
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Adress</th>
             <th>Phone Number</th>
              <th>Email</th>
              <th>edit/delete</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact)=> (

            <Fragment>
              {editContactId === contact.id ? (

               
              
            <EditableRow editFormData = {editFormData} handleEditFormChange = {handleEditFormChange} handleCancelClick = {handleCancelClick}   /> ) : (
            
           <ReadOnlyRow contact = {contact}  handleEditClick = {handleEditClick} handleDeleteClick = {handleDeleteClick} /> )}
           </Fragment>

          ) )}
          
        </tbody>
      </table>
      </form>
     
        <form   >
          <input onChange = {handleAddFormChange} type = "text" name="fullName" required = "required" placeholder = "enter new name" />
          <input  onChange = {handleAddFormChange} type = "text" name="address" required = "required" placeholder = "enter new address" />
          <input   onChange = {handleAddFormChange} type = "text" name="phoneNumber" required = "required" placeholder = "enter new number" />
          <input  onChange = {handleAddFormChange} type = "email" name="email" required = "required" placeholder = "enter new email" />

          <button onClick = {handleAddFormSubmit} type = "submit"> add </button>
          



        </form>
        <CSVLink {...csvLink} >export to csv</CSVLink>
       

    </div>
  );
}

export default App;
