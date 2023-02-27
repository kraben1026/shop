import { db } from "../data/connection";

export const getItems = {
    async getItems(){
        const response = db.query('SELECT * FROM items')
        return response
    }

}