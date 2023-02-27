import { itemService } from "../services/itemService";

export const itemController ={
    async addItem(req, res){
        const itemData = req.body;
        let response = await itemService.addItem(itemData);
        res.status(200).json(response)
    },
    async buy(req, res){
        const itemId = req.body.id;
        let response = await itemService.buy(itemId)
        res.status(200).json(response)
    }
}