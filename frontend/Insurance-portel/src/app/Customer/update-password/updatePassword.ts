export class UpdatePassword{
    oldPassword:String;
    newPassword:String;
    confirmPassword:String;
    constructor(oldPassword:String,newPassword:String,confirmPassword:String){
        this.oldPassword=oldPassword;
        this.newPassword=newPassword;
        this.confirmPassword=confirmPassword;
    }

}