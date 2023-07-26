{/* <div class="customer">
<h2>Krin Oliver</h2>
<p>krin.oliver@example.com</p>
<p>9294 Stevens Creek Blvd Hampton, NV 48932</p>
<p>DOB: Jul 22, 1965</p>
<p>Customer Since: Jul 28, 2011</p>
</div> */}

const mainContainer = document.querySelector('#mainContainer')

for (let customer of customers) {
    console.log(mainContainer)
    let customerDiv = document.createElement('div')
    let nameDiv = document.createElement('h2')
    nameDiv.innerText = `${customer.name.first} ${customer.name.last}`
    customerDiv.appendChild(nameDiv)
    
    let emailDiv = document.createElement('p')
    emailDiv.innerText = customer.email
    customerDiv.appendChild(emailDiv)
    
    let locationDiv = document.createElement('p')
    locationDiv.innerText = `${customer.location.street} ${customer.location.number} ${customer.location.name}`
    customerDiv.appendChild(locationDiv)

    let dobDiv = document.createElement('p')
    dobDiv.innerText = `${customer.dob.date} ${customer.dob.age}`
    customerDiv.appendChild(dobDiv)

    let registeredDiv = document.createElement('p')
    registeredDiv.innerText = `${customer.registered.date} ${customer.registered.age}`
    customerDiv.appendChild(registeredDiv)
    
    mainContainer.appendChild(customerDiv)
}