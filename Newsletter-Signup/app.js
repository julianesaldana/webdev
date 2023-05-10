// //jshint esversion: 6
// const express = require("express");
// const bodyParser = require("body-parser");
// const request = require("request");
// const https = require("https");

// const app = express();

// app.use(express.static("public"));
// app.use(bodyParser.urlencoded({ extended: true }));

// app.get("/", function (req, res) {
//     res.sendFile(__dirname + "/signup.html");
// });

// app.post("/", function (req, res) {     // had to update API, udemy video outdated
//     const client = require("@mailchimp/mailchimp_marketing");
//     const listId = "06fdbe3005";

//     client.setConfig({
//         apiKey: "d27c60c6fa9f0c0a940637caa8b6aa39",
//         server: "us9",
//     });

//     const fN = req.body.fname;
//     const lN = req.body.lname;
//     const em = req.body.email;
//     const subscribingUser = {
//         firstName: fN,
//         lastName: lN,
//         email: em
//     };

//     const run = async () => {
//         const response = await client.lists.addListMember(listId, {
//             email_address: subscribingUser.email,
//             status: "subscribed",
//             merge_fields: {
//                 FNAME: subscribingUser.firstName,
//                 LNAME: subscribingUser.lastName
//             }
//         });

//         if (response.statusCode == 200) {       // code for subscription
//             res.sendFile(__dirname + "/success.html");        // sends http response
//             console.log(`Successfully added contact as an audience member. The contact's id is ${response.id}.`);
//         } else {
//             res.sendFile(__dirname + "/failure.html");
//         }
//     };
//     run();
// });

// app.listen(3000, function () {
//     console.log("Server is running on port 3000");
// });


// // audience id
// // 06fdbe3005

// // api key
// // d27c60c6fa9f0c0a940637caa8b6aa39-us9


const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");
const app = express();
 
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
 
app.get("/", function(req, res){
    res.sendFile(__dirname + "/signup.html");
});
 
app.post("/", function(req, res){
 
    const firstName = req.body.fname;
    const lastName = req.body.lname;
    const email = req.body.email;
 
    const data = {
        members: [
            {
                email_address: email,
                status: "subscribed",
                merge_fields: {
                    FNAME: firstName,
                    LNAME: lastName
                }
            }
        ]
    };
 
    const jsonData = JSON.stringify(data);
 
    const url = "https://us9.api.mailchimp.com/3.0/lists/06fdbe3005";
 
    const options = {
        method: "POST",
        auth: "julianesaldana@gmail.com:d27c60c6fa9f0c0a940637caa8b6aa39-us9"
    };
 
    const request = https.request(url, options, function(response){
 
        if (response.statusCode === 200) {
            res.sendFile(__dirname + "/success.html")
        } else {
            res.sendFile(__dirname + "/failure.html");
        }
 
        response.on("data", function(data){
            console.log(JSON.parse(data));
        });
    });
 
    request.write(jsonData);
    request.end();
});

app.post("/failure", function(req, res) {
    res.redirect("/");
});
 
app.listen(3000, function(){
    console.log("Server is running on port 3000.");
});