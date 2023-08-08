export async function fetchCars() {
  const headers = {
    'X-RapidAPI-Key': '2a703a472cmsh62962566304d600p1da11djsn269a42f08855',
    'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
  }

  try {
      const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars', {
        headers: headers,
      });
      const result = await response.json();
      console.log(result);
      return result;
  } catch (error) {
      console.error(error);
  }

}