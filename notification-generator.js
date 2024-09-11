
function sendNotification(email) {
 
    if (typeof email !== 'string' || email.includes("@") !== true) {
        return "Invalid Email";
    }
    const userNameLen = email.indexOf("@");
    const domainNameLen = email.indexOf("@") + 1;

    const userName = email.slice(0, userNameLen);
    const domainName = email.slice(domainNameLen);
    
    return `${userName} sent you an email from ${domainName}`;
};



const result = sendNotification('nadim.naem5@outlook.com');
console.log(result);

