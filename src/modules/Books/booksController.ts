import { Request, Response } from "express"

const books = {

list: (req: Request, res:Response) => {

    res.send("List books")
},

create: (req: Request, res:Response) =>{

    res.send("book successfully added")
},

update: (req:Request , res:Response) =>{
    res.send("the book has been updated")
},

detail: (req:Request , res:Response) =>{
    let {id} = req.params
    res.send("book datail:" + id)
},

delete: (req:Request , res:Response) =>{
    res.send("the book has been deleted")
}

}

export default books