
   export const checkvaliddata=(email,password,name,setissigninform)=>{

    // regex for email validation, it will retuen true or false
 const isemailvalid= /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
 const ispswrdvalid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

     const isnamevalid =/^[A-Z][a-zA-Z '.-]*[A-Za-z][^-]$/.test(name);
  if(!isnamevalid && setissigninform) return "Enter a valid Name ";
 if (!isemailvalid) return "Email ID is not valid";
 if(!ispswrdvalid) return "Invalid Password";
 return  null;

};