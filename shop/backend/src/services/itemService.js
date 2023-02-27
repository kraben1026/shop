import { addItem} from "../models/addItem";
import { buyItem } from "../models/buyItem";

export const itemService = {
    async addItem(itemData){
        const response = await addItem.addItem(itemData);
        return response
    },
    async buy(itemId){
        const response = await buyItem.buy(itemId);
        return response
    }
} 