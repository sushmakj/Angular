
    import { Product } from './product';

export class ProductData {
    productList : Product[]=[{
        productId:57730, name:"Choclate",brand:"DairyMilk",price:500},
        {productId:57731, name:"Cake",brand:"BakeWell",price:50052},
        {productId:57732, name:"Muffin",brand:"Cakes&more",price:500}
    ,{productId:57732, name:"Muffin",brand:"Cakes&more",price:500}];
        getProductList():Product[] {
            return this.productList;
        }
    }
    
