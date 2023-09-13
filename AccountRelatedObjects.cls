public with sharing class AccountRelatedObjects {
    public AccountRelatedObjects() {

    }

    @AuraEnabled(cacheable=TRUE)
    public static List<Contact> retrieveContactRecords(string accId){
      List<Contact> conObj = new  List<Contact>();
      List<Contact> conList = [SELECT Id, name, FirstName, LastName, Email, Phone, AccountId FROM Contact WHERE AccountId=:accId];
      for(Contact con:conList){
        conObj.add(con);
      }
      return conObj;
    }

}