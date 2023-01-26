const teste = {

list: (req:any, res:any) => {
    res.send("List books")
},

create: (req:any, res:any) =>{
    res.send("book successfully added")
},

update: (req:any, res:any) =>{
    res.send("the book has been updated")
},

detail: (req:any, res:any) =>{
    res.send("book datail")
},

delete: (req:any, res:any) =>{
    res.send("the book has been deleted")
}

}

export default teste