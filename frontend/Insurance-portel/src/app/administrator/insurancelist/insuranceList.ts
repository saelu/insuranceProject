export class InsuranceDetails{
    insuranceId:String;
    insuranceType:String;
    insuranceCategory:String;
    coveragePeriod :BigInteger;
    amount:DoubleRange;


constructor( insuranceId:String,insuranceType:String,insuranceCategory:String,coveragePeriod :BigInteger,amount:DoubleRange){
    this.insuranceId=insuranceId;
    this.insuranceCategory=insuranceCategory;
    this.insuranceType=insuranceType;
    this.amount=amount;
    this.coveragePeriod=coveragePeriod;
}

}