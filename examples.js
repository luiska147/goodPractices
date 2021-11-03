let banks = [
    {bank: 'location one', maxValue: 1000000, minValue: 10000},
    {bank: 'location two', maxValue: 250000, minValue: 50000},
    {bank: 'location three', maxValue: 500000, minValue: 100000}
]

let user =[
{user:'user one', availableAmount: 1000000, selectedBank: 'location two', requestUser: 2000000},
{user:'user two', availableAmount: 700000 , selectedBank:'location one', requestUser: 250000},
{user:'user three', availableAmount: 50000 , selectedBank: 'location three', requestUser: 40000}
]

let bank1 = banks.find(a => a.bank == 'location one') 
let bank2 = banks.find(a => a.bank == 'location two')
let bank3 = banks.find(a => a.bank == 'location three')

let user1 = user.find(a => a.user == 'user one')
let user2 = user.find(a => a.user == 'user two')
let user3 = user.find(a => a.user == 'user three')

function amountLeft ({user, availableAmount, requestUser},{bank}){
    let newAmount = availableAmount - requestUser
    console.log(`Hola ${user}, Tu solicitud fue aprobada por el banco ${bank} por el monto de $ ${requestUser}. 
    Tu nuevo monto disponible es ${newAmount}`)
}
function notApproved ({user, availableAmount, requestUser},{bank}) {
    console.log(`Hola ${user}, Tu solicitud fue rechazada por el banco ${bank} por el monto de $ ${requestUser}.`);
}

user1.requestUser <= user1.availableAmount && bank2.minValue <= user1.requestUser && bank2.maxValue >= user1.requestUser ?
    amountLeft(user1, bank2) : notApproved(user1, bank2) 

user2.requestUser <= user2.availableAmount && bank1.minValue <= user2.requestUser && bank1.maxValue >= user2.requestUser ?
    amountLeft(user2, bank1) : notApproved(user2, bank1)

user3.requestUser <= user3.availableAmount && bank3.minValue <= user3.requestUser && bank3.maxValue >= user3.requestUser ?
    amountLeft(user3, bank3) : notApproved(user3, bank3)



