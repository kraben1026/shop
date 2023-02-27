import { db } from "../data/connection";

export const buyItem = {
    async buy(itemId){
        const response = await db.query('DELETE FROM items WHERE id = ?', [Number(itemId)]);
        return 'ok'
    }
}