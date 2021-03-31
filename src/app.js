const express = require("express");
const app = express();
const path = require("path");
const html = require("html");
const { json } = require("express");
require("./db/conn");
const Volunteer = require("./models/Volunteers");
const Ngo = require("./models/Ngos");
const Donate = require("./models/Donates");
const Contact = require("./models/Contacts");
const port =process.env.PORT || 3000;
const static_path=path.join(__dirname,"../public");
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(express.static(static_path));

app.get("/",(req,res)=>{
    res.sendFile("C:/Users/DELL/Desktop/TECHY/all_experiments/solution_challenge/beathunger-google-solution-challengelenge-main/templates/index.html")
});

app.get("/blog",(req,res)=>{
    res.sendFile("C:/Users/DELL/Desktop/TECHY/all_experiments/solution_challenge/beathunger-google-solution-challengelenge-main/templates/blog.html");
});

app.get("/volunteer",(req,res)=>{
    res.sendFile("C:/Users/DELL/Desktop/TECHY/all_experiments/solution_challenge/beathunger-google-solution-challengelenge-main/templates/volunteer.html");
});

app.get("/login",(req,res)=>{
    res.sendFile("C:/Users/DELL/Desktop/TECHY/all_experiments/solution_challenge/beathunger-google-solution-challengelenge-main/templates/login.html");
});

app.get("/ngo",(req,res)=>{
    res.sendFile("C:/Users/DELL/Desktop/TECHY/all_experiments/solution_challenge/beathunger-google-solution-challengelenge-main/templates/ngo.html");
});

app.get("/volunteerl",(req,res)=>{
    res.sendFile("C:/Users/DELL/Desktop/TECHY/all_experiments/solution_challenge/beathunger-google-solution-challengelenge-main/templates/volunteerl.html");
});

app.get("/signup",(req,res)=>{
    res.sendFile("C:/Users/DELL/Desktop/TECHY/all_experiments/solution_challenge/beathunger-google-solution-challengelenge-main/templates/signup.html");
});

app.get("/contactus",(req,res)=>{
    res.sendFile("C:/Users/DELL/Desktop/TECHY/all_experiments/solution_challenge/beathunger-google-solution-challengelenge-main/templates/contactus.html");
});
app.get("/aboutus",(req,res)=>{
    res.sendFile("C:/Users/DELL/Desktop/TECHY/all_experiments/solution_challenge/beathunger-google-solution-challengelenge-main/templates/aboutus.html");
});

app.get("/donate",(req,res)=>{
    res.sendFile("C:/Users/DELL/Desktop/TECHY/all_experiments/solution_challenge/beathunger-google-solution-challengelenge-main/templates/donate.html");
});
app.post("/volunteerl",async(req,res)=>{
   try {
       const registerEmployee = new Volunteer({
           fname:req.body.fname,
           mnumber:req.body.mnumber,
           email:req.body.email,
           add:req.body.add
           
       })
       const registered = await registerEmployee.save();
       res.status(201).redirect("/");
   } catch (error) {
       res.status(400).send(error);
   }
});

app.post("/ngo",async(req,res)=>{
   try {
       const registerEmployee = new Ngo({
           fname:req.body.fname,
           mnumber:req.body.mnumber,
           email:req.body.email,
           add:req.body.add
           
       })
       const registerngo = await registerEmployee.save();
       res.status(201).redirect("/");
   } catch (error) {
       res.status(400).send(error);
   }
});
app.post("/donate",async(req,res)=>{
   try {
       const registerEmployee = new Donate({
           fname:req.body.fname,
           mnumber:req.body.mnumber,
           email:req.body.email,
           add:req.body.add,
           padd:req.body.padd
           
       })
       const registerdoner = await registerEmployee.save();
       res.status(201).redirect("/");
   } catch (error) {
       res.status(400).send(error);
   }
});

app.post("/contactus",async(req,res)=>{
   try {
       const registerEmployee = new Donate({
           name:req.body.name,
           
           email:req.body.email,
           message:req.body.message,
           
       })
       const registercontact = await registerEmployee.save();
       res.status(201).redirect("/");
   } catch (error) {
       res.status(400).send(error);
   }
});

app.listen(port ,()=>{
    console.log(`Server is Running at port no ${port}`);
});
