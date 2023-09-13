import { LightningElement, api, track, wire } from 'lwc';
import retrieveContactRecords from '@salesforce/apex/AccountRelatedObjects.retrieveContactRecords';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { refreshApex } from '@salesforce/apex';
/* eslint-disable no-console */
/* eslint-disable no-alert */
export default class AccountParentCmp extends LightningElement {
    
    @api recordId;
    @track forDeletion;
    indexmap={};
    wiredContactResult;
    @track contacts;
    @track error;
    
    @wire(retrieveContactRecords, {accId:'$recordId'})
    wiredContacts( result ) {
        this.wiredContactResult=result;
        if (result.data) {
            this.contacts = result.data;
            this.error = undefined;

            this.indexmap = new Map();
                for(let key in this.contacts) {
                    if (this.contacts.hasOwnProperty(key)) { 
                        this.indexmap.set(key, this.contacts[key].Id);
                    }
                }

        } else if (result.error) {
            this.contacts = undefined;
            this.error = result.error;
        }
        console.log('map >>'+JSON.stringify(this.mapData));
    }

    handleContactDeletion(){
        let idx = this.indexmap.get(this.forDeletion);
        if(idx === undefined){
            console.log('This is incorrect Index!!');
            this.fireToast('Attention','Please provide valid contact Index','warning');
        }else{
            const objChild = this.template.querySelector('c-contact-cmp');
            objChild.deleteContact(idx);   
            console.log('This is correct Index!!');
        }
     }

    deleteValueChange(event){
        this.forDeletion = event.target.value;           
    }
    
    deletesuccessdone(){
        this.fireToast('Success','Contact Record deleted successfully','success');
        refreshApex(this.wiredContactResult);
    }

    fireToast(title,msg,variant){
        this.dispatchEvent(
            new ShowToastEvent({
                title: title,
                message: msg,
                variant: variant
            })
        );
    }

}
