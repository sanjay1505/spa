import React from "react";

 function EditableRow({editFormData , handleEditFormChange , handleCancelClick }) {
    return (
        <tr>
            <td>
                <input type = "text" required = "required" placeholder = "enter name" name = "fullName" onChange = {handleEditFormChange} value = {editFormData.fullName} /> 
            </td>
            <td>
            <input type = "text" required = "required" placeholder = "enter address" name = "address" onChange = {handleEditFormChange} value = {editFormData.address} /> 
            </td>
            <td>
            <input type = "text" required = "required" placeholder = "enter number" name = "phoneNumber" onChange = {handleEditFormChange} value = {editFormData.phoneNumber} /> 
            </td>
            <td>
            <input type = "email" required = "required" placeholder = "enter e-mail" name = "email" onChange = {handleEditFormChange} value = {editFormData.email} /> 
            </td>
             

              <td>
                 <button type = "submit"  >save</button>
                  <button type = "button" onClick = {handleCancelClick} > cancel </button>
              </td>

        </tr>
    )
 }







 export default EditableRow;