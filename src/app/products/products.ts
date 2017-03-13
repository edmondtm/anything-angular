export class Products {
    id : number; 
    name : string;
    brand : string;
    vendor : string;
    image : Array<string>;
    category : Array<string>;
    categoryPath : Array<string>;
    shortDescription : string;    
    tableHeader : {itemCode:string,attributes:Array<string>,price:string,delivery:string};
    variations :[{itemCode:string, attributes:Array<string> , price:[string,number], delivery:[number,string],inventory:number,backorder:[number,string]}];
    
};

//brand : string;
    //vendor: string
    //tableHeader: [string];
// [itemCode,[attributes],[price],[delivery,days/weeks],inventory,[backorder,days/weeks]]