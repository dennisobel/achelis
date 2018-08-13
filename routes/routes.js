const express = require('express');
const userController = require('../controllers/userController');
// const nodemailer = require('nodemailer')
const mailer = require('../mailer/nodemailer');

let appRouter = (app)=>{
    app.post('/profile',(req,res)=>{    

		console.log(req.body)
          
        let output = `
		<p>You have a new user subscription</p>
		<h3>User Details</h3>
		<ul>
			<li>Name: ${req.body.name}</li>
			<li>Email: ${req.body.email}</li>
			<li>Telephone: ${req.body.telephone}</li>
		</ul>
		<p>Kind Regards,</p>
		<p>Achelis Kenya LTD</p>            
        `
        mailer(output)
    })

    app.post('/rental',(req,res)=>{
        console.log(req.body)
        
        let output = `
		<p>You have a new rental request</p>
		<h3>Rental Details</h3>
		<ul>
			<li>Product: ${req.body.product}</li>
			<li>From: ${req.body.from}</li>
			<li>To: ${req.body.to}</li>
			<li>Name: ${req.body.name}</li>
			<li>Email: ${req.body.email}</li>
			<li>Telephone: ${req.body.telephone}</li>			
		</ul>
		<p>Kind Regards,</p>
		<p>Achelis Kenya LTD</p>            
        `
        
        mailer(output)
    })

    app.post('/bookservice',(req,res)=>{
        console.log(req.body)
        let output = `
		<p>You have a new service order</p>
		<h3>Service Details</h3>
		<ul>
			<li>Product: ${req.body.product}</li>
			<li>From: ${req.body.from}</li>
			<li>To: ${req.body.to}</li>
			<li>Name: ${req.body.name}</li>
			<li>Email: ${req.body.email}</li>
			<li>Telephone: ${req.body.telephone}</li>			
		</ul>
		<p>Kind Regards,</p>
		<p>Achelis Kenya LTD</p>            
        `
        
        mailer(output)        
    })

    app.post('/buyspare',(req,res)=>{
        console.log(req.body)
        
        let output = `
		<p>You have a new spare part order</p>
		<h3>Spare Order Details</h3>
		<ul>
			<li>Product: ${req.body.product}</li>
			<li>Model: ${req.body.model}</li>
			<li>Spare: ${req.body.spare}</li>
			<li>Name: ${req.body.name}</li>
			<li>Email: ${req.body.email}</li>
			<li>Telephone: ${req.body.telephone}</li>			
		</ul>
		<p>Kind Regards,</p>
		<p>Achelis Kenya LTD</p>            
        `
        
        mailer(output) 
        
        
        
    })    
}

module.exports = appRouter