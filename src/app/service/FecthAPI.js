
class FetchAPI {
  #host = process.env.NEXT_PUBLIC_API_HOST;
  async getAllRemunerationByMonth() {
    try {
      const response = await fetch(`${this.#host}/api/remuneration/get-all`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          month: 5,
          year: 2024
        }),
      });

      const data = await response.json();
      console.log(data)

      if (data.status === 'success') {
        const receivements = data.data.map((receivement) => {
          return receivement.value;
        });

        const totalReceive = receivements.reduce((acc, value) => {
          return acc + value;
        })

        // console.log(totalReceive);

        return {
          receivements,
          totalReceive: totalReceive.toFixed(2).replace('.', ',')
        };
      } else {
        console.error(data);
        throw new Error('Error on fetchAPI.getAllRemunerationByMonth');
      }
    } catch (error) {
      console.error('Error on fetchAPI.getAllRemunerationByMonth', error);
    }
  }

  async getAllRemunerationByYear() {
    try {
      const response = await fetch(`${this.#host}/api/remuneration/get-all-by-year`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          year: 2024
        }),
      });

      const data = await response.json();
      console.log(data)

      if (data.status === 'success') {
        const receivements = data.data.map((receivement) => {
          return receivement.value;
        });

        const totalReceive = receivements.reduce((acc, value) => {
          return acc + value;
        })

        console.log(totalReceive);

        return {
          receivements,
          totalReceive: totalReceive.toFixed(2).replace('.', ',')
        };
      } else {
        console.error(data);
        throw new Error('Error on fetchAPI.getAllRemunerationByYear');
      }
    } catch (error) {
      console.error('Error on fetchAPI.getAllRemunerationByYear', error);
    }
  }
};

const fetchAPI = new FetchAPI();
export default fetchAPI;
