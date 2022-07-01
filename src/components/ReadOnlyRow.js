import React from "react";

const  ReadOnlyRow = ({contact , handleEditClick , handleDeleteClick }) => {

    


     return(
        <tr>
        <td>{contact.fullName}</td>
         <td>{contact.address}</td>
          <td>{contact.phoneNumber}</td>
            <td>{contact.email}</td>
             <td>



                <button type = "button"  onClick = {(event) => handleEditClick(event , contact)} > edit </button>
                 <button type = "button" onClick = {() => handleDeleteClick(contact.id)}>delete</button>
             </td>
      </tr>
     );


};











export default ReadOnlyRow;