const {User} =require ('../DB_connection')

const nombre= async (req,res)=>{
    try{
 
   const nombre= await User.findOne({where:{name},
})


    return res.status(200).json(name)

    }catch(error){
        return res.satus(500).json("Estimado/a")
    }

}

module.exports=nombre;