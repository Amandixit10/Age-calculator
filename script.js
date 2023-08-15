function findAge()
{
    let dateImp=document.getElementById('date').value;
    let currDate=new Date();
    if(validate(dateImp,currDate))
    {
    let age=currDate.getFullYear()-parseInt(dateImp.split('-')[0]);
    let span=document.getElementsByTagName('span')[0];
    span.textContent=`Your age is ${age} years`;
    dateImp.value='12-12-2000';
    }
    else{
        alert('Please enter correct Date of Birth');
    }
}

function validate(dateImp,currdate)
{
    let yrImp=dateImp.split('-')[0];
    if(yrImp>currdate.getFullYear())
    {return false;}
    return true;
}