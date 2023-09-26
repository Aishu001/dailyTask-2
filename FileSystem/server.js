const express = require('express');

// for creating the folder, file and mention the path
const fs = require('fs');
const path = require('path')


// giving the name for folder
const outputFolderName = './output'

// check if the folder is existing or not 
//    it convert from false into true , so that excute into  if block code
if(!fs.existsSync(outputFolderName )){
    //  its used for making directory for the folder
fs.mkdirSync(outputFolderName )
}


app = express();
PORT = 3000

// read the current date and time
// http://localhost:3000/currentDateAndTimes
app.get('/currentDateAndTimes',(req,res) => {
    
    //assign the Date ()  constructor to the variable
 const currentDateAndTime = new Date();

//  extract the  all current date and time seperately which is mentioned in the variable names below
 const year = currentDateAndTime.getFullYear().toString();
 const month = (currentDateAndTime.getMonth() + 1).toString();
 const date = currentDateAndTime.getDate().toString();
 const hours = currentDateAndTime.getHours().toString();
 const mins = currentDateAndTime.getMinutes().toString();
 const secs = currentDateAndTime.getSeconds().toString();

//  this is for creating the file name as current date and time
 const dateTimeForFileName = `${year}-${month}-${date}-${hours}-${mins}-${secs}.txt`;

//  this is helps to create a path for a  text file 
const filePath = path.join(outputFolderName ,dateTimeForFileName);
console.log(filePath);

// its for write the text file , if the file is not , it create a file and write content by  itself
//methodname( filePathName, Content eg:"guvi" , catch if errror    )
fs.writeFile(filePath,currentDateAndTime.toISOString(),(error) => {
    if(error){
        res.status(500).send("its error")
    }
    // sent the filePath value 
    res.send(`File created successfully at: ${filePath}`);
})
})

// this is for read or get all the list of files which  has created
app.get('/getAllFiles' , (req,res) => {
    // readdir() is used to read all the files
fs.readdir(outputFolderName , (err , allFiles) => {
    //  if its error
    if(err){
        res.status(500).send(`error is ${err}`);
        return
    }
//  if the statment is false , then filter only the text file 

const filterTextFile = allFiles.filter((checkFileExtension) => {
    // filter only the text file .txt for that extname(passFileName)
   return  path.extname(checkFileExtension) === ".txt"
})
res.json(filterTextFile)
    
})


})




app.listen(PORT , () => {
    console.log("port is running ", PORT);
})