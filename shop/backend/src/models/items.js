import { db } from "../data/connection"

export const items = {
    async myItems(userId){
        const items = await db.query('SELECT * FROM items WHERE user_id = ?', [userId])
        console.log(items)
        return items
    }
}