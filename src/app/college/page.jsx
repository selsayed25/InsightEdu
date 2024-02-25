fetch('../../../public/data/tuitioncost.json')
    .then(response => response.json)
    .then (value => console.log(value))