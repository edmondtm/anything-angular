import {Products} from "./products";

 export const PRODUCTS : Products[] = [ 
    {
      id: 1,
      name: 'Pyrex Low Form Beaker',
      brand: 'Pyrex',
      vendor: 'ABC Scientific Sdn Bhd',
      image : ['/assets/images/product/1000.jpg','/assets/images/product/1003.jpg','/assets/images/product/1015.jpg'],
      category : ['Home','Glassware','Beaker'],
      categoryPath : ['/','/glassware'],
      shortDescription : `
                            <ul>
                              <li>Complies with ISO 3819 and DIN 12331</li>
                              <li>Manufactured from Pyrex® borosilicate glass</li>
                              <li>Excellent thermal performance</li>
                              <li>High resistance to chemical attack</li>
                              <li>Printed with Trace Code for downloadable batch certificate</li>
                              <li>Batch certificate available to download from www.scilabware.com</li>
                              <li>White graduations and marking spot</li>
                            </ul>
                          `,
      tableHeader : {itemCode:'Item Code', attributes:['Capacity (ml)','Height (mm)'], price:'Price (MYR)', delivery:'Delivery'},
      variations :[{itemCode:'1000/03M', attributes:['5','30','22'] , price:['MYR',10], delivery:[4,'days'],inventory:30,backorder:[2,'weeks']},
                    {itemCode:'1000/05M', attributes:['5' ,'30','22'] , price:['MYR',12], delivery:[4,'days'],inventory:30,backorder:[2,'weeks']}
                  ]
    },
    {
      id: 2,
      name: 'Pyrex Tall Form Beaker',
      brand: 'Pyrex',
      vendor: 'ABC Scientific Sdn Bhd',
      image : ['/assets/images/product/1015.jpg'],
      category : ['Home','Glassware','Beaker'],
      categoryPath : ['/','glassware'],
      shortDescription : `
                            <ul>
                              <li>Complies with ISO 3819 and DIN 12331</li>
                              <li>Manufactured from Pyrex® borosilicate glass</li>
                              <li>Excellent thermal performance</li>
                              <li>High resistance to chemical attack</li>
                              <li>Printed with Trace Code for downloadable batch certificate</li>
                              <li>Batch certificate available to download from www.scilabware.com</li>
                              <li>Tall form with spout</li>   
                              <li>White graduations and marking spot</li>
                            </ul>
                          `,
      tableHeader : {itemCode:'Item Code', attributes:['Capacity(ml)','Height(mm)','Outside Diameter(mm)'], price:'Price (MYR)', delivery:'Delivery'},
      variations :[{itemCode:'1015/03M', attributes:['5','30','22'] , price:['MYR',10], delivery:[4,'days'],inventory:30,backorder:[2,'weeks']}]
    }    
    ];

  //tableHeader: ['ItemCode','Capacity (ml)','Height(mm)','Outside Diameter(mm)','Price','Delivery'],
    //variations:  ['1000/02M',['5','30','22'],['MYR',11],[4,'days'],30,[2,'weeks']],
    