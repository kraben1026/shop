import { db } from "../data/connection"

export const items = {
    async myItems(userId){
        console.log(userId)
        const items = await db.query('SELECT * FROM items WHERE id = ?', [userId])
        return items
    }
}