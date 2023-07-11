export async function fetchCars() {
    const headers = {
            'X-RapidAPI-Key': 'aca8ddfae3mshc7b114110d6fd47p199982jsneb68fbb1d89b',
            'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }

    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', {
        headers: headers,
    });

    const result = await response.json()

    return result;

}

export const calculateCarRent = (city_mpg: number, year: number) => {
    const basePricePerDay = 50; // base rental price per day
    const mileageFactor = 0.1; // additional rate per mile driven
    const ageFactor = 0.05; // additional rate per year of vehicle age

    // calculate additional rate based on mileage and age
    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year ) * ageFactor;

    // calculate total rent per day
    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

    return rentalRatePerDay.toFixed(0);
}