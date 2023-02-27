import { db } from "../data/connection";    

export const addItem = {
    async addItem(itemData){
        try {
            const newItem = db.query('INSERT INTO items (name, price, user_id) VALUES (?,?,?)', [itemData.name, itemData.price, userId]);
                return 'ok';
        } catch (error) {
            return error
        }
        
    }
}