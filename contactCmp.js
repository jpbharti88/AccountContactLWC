import { LightningElement, api } from 'lwc';
import { deleteRecord } from 'lightning/uiRecordApi';

/* eslint-disable no-console */
/* eslint-disable no-alert */
export default class ContactCmp extends LightningElement {
   
    @api index;
    @api contact;

    @api deleteContact(Conrectid){
        console.log('Contact to delete >>'+Conrectid);
        deleteRecord(Conrectid)
        .then(() => {
            const custEvent = new CustomEvent('deletesuccess');
            this.dispatchEvent(custEvent);
        })
        .catch(error => {
            console.log(error);
        });
    }
}