function myself(fname,lname,oppa){
    fullname = fname+" "+lname;
    oppa(fullname);
}

function log(data){
    console.log("full name is ",data);
}

myself("siddhant","Angane",log);
myself("Tony","Stark",log);