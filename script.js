function findAge()
{
    let dateImp=document.getElementById('date').value;
    let currDate=new Date();
    if(validate(dateImp,currDate))
    {
    let age=currDate.getFullYear()-parseInt(dateImp.split('-')[0]);
    let mnth=currDate.getMonth()-parseInt(dateImp.split('-')[1])
    if(mnth<0||
        mnth==0&&(currDate.getDate()<dateImp.split('-')[2]))
        {
            age--;
        }
    let span=document.getElementsByTagName('span')[0];
    span.textContent=`Your age is ${age} years`;
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