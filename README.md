# AccountContactLWC
Delete functionality of associated Contacts to Account 

**Requirement:**
Create LWC component which will be added to Account Detail Page.
this will have 2 sections.
Section one-
  Will have an Inputbox and Button labeled as 'Delete'.
  enter index 
Section two-
Will list all the associated contacts of the Acount.(Do not use DataTable)
Each Contact will be given an index number.
Each contact should be added as a seperate component in this section. i.e a child component.

Functiality:
  In parent component's input filed we can enter the index number on the contact.
  On click of Delete, Contact should be delete from backend. 
  Once the contact is deleted, component should show only remaining contacts of the account.

  Method to fetch contacts will be in parent component.
  Method to delete Contact will be in Child Component.

  

Solution:
Here i have created 
