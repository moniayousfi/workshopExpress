const auth=(req,res,next)=>{
let aut=false
aut? 
next()
:
res.send("don''t have permissions")
}
module.exports=auth