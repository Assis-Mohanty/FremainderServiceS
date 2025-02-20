const { response } = require("express");
const TicketService = require("../services/email-service")

const create=async (req,res)=>{
    try {
        const response =await TicketService.createNotification(req.body)
        return res.status(201).json({
            success:true,
            data:response,
            err:{},
            message:"Sucessfully registered an email remainder"
        });
    } catch (error) {
        return res.status(500).json({
            success:false,
            data:response,
            err:error,
            message:"Unable to register an email remainder"
        });
    }
}

module.exports={
    create
}