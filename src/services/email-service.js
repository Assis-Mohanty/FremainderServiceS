const sender=require("../config/emailConfig");
const TicketRepository=require("../repository/ticket-repository")
const repo = new TicketRepository();
const sendBasicEmail=(mailFrom,mailTo ,mailSubject,mailBody)=>{
    sender.sendMail({
        from:mailFrom,
        to:mailTo,
        subject:mailSubject,
        text:mailBody
    })
}

const fetchPendingEmails=async(timestamp)=>{
    try {
        const response=await repo.get({status:"PENDING"});
        return response;
        
    } catch (error) {
        console.log(error);
    }
}

const updateTicket=async(status)=>{
    try {
        
        const response=await repo.update(data,ticketId)
        return response;
    } catch (error) {
        console.log(error)
    }
}

const createNotification =async (data)=>{
    try {
        const response=repo.create(data)
        return response
    } catch (error) {
        console.log(error)
    }
}



module.exports={
    sendBasicEmail,
    fetchPendingEmails,
    createNotification,
    updateTicket
}