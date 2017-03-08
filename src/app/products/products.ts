export class Products {
    _id : number;
    name : string;
    image : [string];
    category : [string];
    brand : string;
    vendor: string;
    tableHeader: [string];
    variations :[string, [string] , [string,number], [number,string],number,[number,string]];
    // [itemCode,[attributes],[price],[delivery,days/weeks],inventory,[backorder,days/weeks]]
}
