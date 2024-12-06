const displayMsg=(msg,id,colorname)=>{
    document.getElementById(id).innerHTML=msg
    document.getElementById(id).style.color=colorname
}

const fnameValidate=()=>{
const first_name=document.getElementById('fname').value
if(first_name=='')
{
    displayMsg('First name is mandatory','fnameMsg','red')
    return false
}
else if(!first_name.match(/^([a-zA-Z])+$/))
{
displayMsg('First name must contain alphabets only','fnameMsg','red')
}

else if(first_name.length<3)
{
    displayMsg('First name must be at least of 3 character.','fnameMsg','red')
}
else
{
    displayMsg('Valid First Name','fnameMsg','green')
    return true
}


}

const lnameValidate=()=>{
    const last_name=document.getElementById('lname').value
    if(last_name=='')
    {
        displayMsg('Last name is mandatory','lnameMsg','red')
        return false
    }
    else if(!last_name.match(/^([a-zA-Z])+$/))
        {
        displayMsg('Last name must contain alphabets only','lnameMsg','red')
        }
    else if(last_name.length<3)
        {
            displayMsg('Last name must be at least of 3 character.','lnameMsg','red')
        }
    else
    {
        displayMsg('Valid Last Name','lnameMsg','green')
        return true
    }
    
    
    }

    
const emailValidate=()=>{
    const email_name=document.getElementById('email').value
    if(email_name=='')
    {
        displayMsg('Email name is mandatory','emailMsg','red')
        return false
    }
    else if(!email_name.match(/^([a-z0-9])[a-z0-9A-Z\_\?]+\@+([a-z])+\.+([a-z])+$/))
    {
        displayMsg('Invalid email format','emailMsg','red')
        return false
    }
    else
    {
        displayMsg('Valid Last Name','emailMsg','green')
        return true
    }
    
    
    }

    
const pwdValidate=()=>{
    const password_name=document.getElementById('password').value
    if(password_name=='')
    {
        displayMsg('Password is mandatory','passwordMsg','red')
        return false
    }
    else if(!password_name.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[\@\#\$\?\_]).{8,20}$/))
    {
        displayMsg('Pasword must contain at least one uppercase,lowercase , a special character and a numeric value and it must be more than or equals to 8 character','passwordMsg','red')
        return false
    }
    else
    {
        displayMsg('Valid passsword','passwordMsg','green')
        return true
    }
    
    
    }
    const validForm=()=>{
        if(fnameValidate()&& lnameValidate()&& emailValidate()&& pwdValidate())
        {
            
        }
    }










    /*
    regular expressions:

    /regular expression goes inside this/
    ^ -> checks from th start
    $ -> checks from the last

    [a-z] -> to match lowercase alphabets
    [A-Z] -> to match uppercase alphabets
    [a-zA-Z]-> matches all the alphabets

    [0-9] -> to match numeric values
    [a-z 0-9] -> to match alphanumeric values

    # to match special characters we have to use \ :eg: \@,\_,\?
    {minvalue,maxvalue}-> eg : {8,40}

    ?= -> position doesnt matter
    . -> checks single character
    * -> checks the preceeding character.
    */