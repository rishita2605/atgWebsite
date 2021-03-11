const { noop } = require("jquery");

const app=require("express")();
const POSRT= process.env.PORT || 3000;
app.get("", (req,res)=>{
    res.send("Hello");
});

app.listen(PORT,()=>{
    console.log(`App up at port ${PORT}`);
});