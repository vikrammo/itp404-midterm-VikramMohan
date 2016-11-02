//Question #2:

var users = [{
    name: 'David',
    address: {
        state: 'CA'
    }
}, {
    name: 'Jeff',
    address: {
        state: 'TX'
    }
}, {
    name: 'Sandra',
    address: {
        state: 'NY'
    }
}, {
    name: 'Nevil',
    address: {
        state: 'CA'
    }
}];

function filterUsersByState(users, state) {

    var userState = users.filter(function(person) {

        if (person.address.state == state) {

            return person;
        }

    });

    return userState;

}


var usersInCA = filterUsersByState(users, 'CA');
console.log(usersInCA);



module.exports = usersInCA;
