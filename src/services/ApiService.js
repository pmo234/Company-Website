

const ApiService = {
  fetchCarouselData: (setData) => {
    const url = `https://interview-assessment.api.avamae.co.uk/api/v1/home/banner-details`; 
    return fetch(url)
      .then(response => response.json())
      .then(data => {
        setData(data);
      })
      .catch(error => {
        console.error('Error fetching carousel data:', error);
      });
  },

};

export default ApiService;
