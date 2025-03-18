export class Isikukood{
    constructor (protected kood:string){}
    sugu(){
        return parseInt(this.kood[0]) % 2==0? "N": "M";
    }

    //Determine the birth year from the personal code
    synniaasta(): number {
        const firstDigit = parseInt(this.kood[0]);
        const yearPart = parseInt(this.kood.slice(1,3));

        let birthYear =0;

        //Determine the birth year based on th first digit
        if(firstDigit===1|| firstDigit===2){
            birthYear=1800+ yearPart;

        }else if(firstDigit===3 || firstDigit===4){
            birthYear = 1900+yearPart;
        } else if(firstDigit===5 || firstDigit===6) {
            birthYear=2000+ yearPart;
        }
        return birthYear;
    }
}