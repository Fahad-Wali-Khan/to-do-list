const express=require('express')
const bodyParser=require('body-parser')
const date=require(__dirname+'/date.js')
const app=express()
const port=3000
var items=["wake up","take bath","have breakfast"]
let workItems=[];
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public"))
app.get('/',function(req,res)
{
let day=date();
res.render("idd", {listTitle: day, itemh: items})
})
app.post('/', (req, res) => {
  let item=req.body.txt
  if(req.body.list==="Work List")
  {
  workItems.push(item)
  res.redirect('/work')
  }
  else{
  items.push(item)
  res.redirect('/')
  }
})
app.get('/work',function(req,res)
{

res.render("idd", {listTitle: "Work List", itemh: workItems})
})


app.listen(port,function()
{
    console.log("site is running on port 3000")
})