const fs = require("fs")


const addPerson = (fname , lname , age , city , id)=>{

    const allData = loadData()

    const dblData = allData.filter((obj)=>{
        return obj.id === id || obj.city=== city
    })
    console.log(dblData)

    if(dblData.length==0){

    allData.push({
        id:id,
        fname: fname ,
        lname: lname,
        age: age,
        city: city
        
    })
    saveAllData(allData)
} else{
    console.log("ERROR DUPLICATED ID OR CITY")
}
}
// //////////////////////////////////


const loadData = ()=>{
  try{
    const dataJson = fs.readFileSync("data10.json").toString()
    return JSON.parse(dataJson)
  } catch {
    return []
  }
}

const saveAllData = (allData)=>{
    const saveAllDataJson = JSON.stringify(allData)
    fs.writeFileSync("data10.json" ,saveAllDataJson )
}

///////////////////////////////////////////////


const deleteData = (id)=>{

    const allData = loadData()
    const dataToKeep = allData.filter((obj)=>{
        return obj.id !== id
    })
    console.log(dataToKeep)

    saveAllData(dataToKeep)

}

//////////////////////////////////////



const readData = (id)=>{
    const allData =loadData()
    const itemNeeded = allData.find((obj)=>{
        return obj.id == id 
    })
    
    if(itemNeeded){
        console.log(itemNeeded)
    }else{
        console.log("this person not found")
    }

}

///////////////////////////////////////////////////node app.js read --id="10"

const listData = ()=>{
    const allData = loadData()
    allData.forEach((obj) => {
        console.log(obj.fname , obj.age , obj.city)
    });
}



module.exports = {
    addPerson,
    deleteData,
    readData,
    listData
}