const zipCode = document.getElementById('zipCode');

zipCode.addEventListener("focusout", () => {searchAddress(zipCode.value)});

async function searchAddress(zipcode) {
    const errorMessageZC = document.getElementById('errorZipCode');
    errorMessageZC.innerHTML = "";
    const errorMessageCity = document.getElementById('errorCity');
    errorMessageCity.innerHTML = "";
    try {
        const queryZipCode = await fetch(`https://api.zippopotam.us/us/${zipcode}`);
        const queryZipCodeConverted = await queryZipCode.json();

        const city = document.getElementById('city-client');
        const state = document.getElementById('state-client');

        city.value = queryZipCodeConverted.places[0]['place name'];
        state.value = queryZipCodeConverted.places[0].state;

        if (city.value != "Atlanta" && city.value != "Alpharetta" && city.value != "Roswell" && city.value != "Cumming" && city.value != "Suwanee" && city.value != "Johns Creek" && city.value != "Braselton" && city.value != "Sandy Springs" && city.value != "Duluth" && city.value != "Lawrenceville" && city.value != "Tucker" && city.value != "Marietta" && city.value != "Smyrna" && city.value != "Avondale Estates" && city.value != "Decatur" && city.value != "Scottdale" && city.value != "Gainesville" && city.value != "Buford" && city.value != "Hoschton" && city.value != "Clarkston" && city.value != "Stone Mountain" && city.value != "Kennesaw" && city.value != "Norcross" && city.value != "Lilburn" && city.value != "Canton") {
            errorMessageCity.innerHTML = `<p>* For now, we only serve Atlanta Metropolitan Area</p>`
        }

        return queryZipCodeConverted;
    } catch (error) {
        errorMessageZC.innerHTML = `<p>Invalid zip code.</p>`;
    }
}