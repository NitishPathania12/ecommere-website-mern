const mongoose=require("mongoose")
//Connection
const url="mongodb://127.0.0.1:27017/Project"
const option={ useNewUrlParser: true, useUnifiedTopology: true }
const mongoosedb=()=>
{
  mongoose.connect(url, option).then((res)=>{
    if(res){
      console.log("connected")
      const fetchingdata=mongoose.connection.db.collection("Food")
     fetchingdata.find({}).toArray().then((res)=>{
  
      const foodCategory=mongoose.connection.db.collection("Foodcategory")
      foodCategory.find({}).toArray().then((catdata)=>{
            
if(res){
  global.food_items=res
  global.foodCategory=catdata
  // console.log( global.foodCategory)
  }
  else{
    console.log("err")
  }

      })

    })
   
     
    }
    

  })






 

    }
    module.exports=mongoosedb()