
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

      const content = await response.json();
      // console.log(content)

      if (content.status === 'success') {
        const receivementsByMonth = {};

        content.data.forEach((receivement) => {
          const monthAndYear = receivement.create_at
            .split('T')[0]
            .split('-')
            .slice(0, 2)
            .join('-');

          if (!receivementsByMonth[`${monthAndYear}`])
            receivementsByMonth[`${monthAndYear}`] = [];

          receivementsByMonth[`${monthAndYear}`].push(receivement.value);
        });

        const allMonths = {
          '01': 'Janeiro',
          '02': 'Fevereiro',
          '03': 'Março',
          '04': 'Abril',
          '05': 'Maio',
          '06': 'Junho',
          '07': 'Julho',
          '08': 'Agosto',
          '09': 'Setembro',
          '10': 'Outubro',
          '11': 'Novembro',
          '12': 'Dezembro',
        }

        for (const month in receivementsByMonth) {
          const monthName = allMonths[month.split('-')[1]];
          const total = receivementsByMonth[month].reduce((acc, value) => {
            return acc + value;
          }, 0);

          delete receivementsByMonth[month];
          receivementsByMonth[monthName] = total;
        }
        // console.log(receivementsByMonth)

        return {
          receivementsByMonth,
          labels: Object.keys(receivementsByMonth),
          data: Object.values(receivementsByMonth)
        };
      } else {
        throw new Error('Error on fetchAPI.getAllRemunerationByYear');
      }
    } catch (error) {
      console.error('Error on fetchAPI.getAllRemunerationByYear', error);
    }
  }

  async getAllExpenseByYear() {
    try {
      const response = await fetch(`${this.#host}/api/expense/get-all-by-year`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          year: 2024
        }),
      });

      const content = await response.json();

      if (content.status === 'success') {
        const expenseByMonth = {};

        content.data.forEach((receivement) => {
          const monthAndYear = receivement.create_at
            .split('T')[0]
            .split('-')
            .slice(0, 2)
            .join('-');

          if (!expenseByMonth[`${monthAndYear}`])
            expenseByMonth[`${monthAndYear}`] = [];

          expenseByMonth[`${monthAndYear}`].push(receivement.value);
        });

        const allMonths = {
          '01': 'Janeiro',
          '02': 'Fevereiro',
          '03': 'Março',
          '04': 'Abril',
          '05': 'Maio',
          '06': 'Junho',
          '07': 'Julho',
          '08': 'Agosto',
          '09': 'Setembro',
          '10': 'Outubro',
          '11': 'Novembro',
          '12': 'Dezembro',
        }

        for (const month in expenseByMonth) {
          const monthName = allMonths[month.split('-')[1]];
          const total = expenseByMonth[month].reduce((acc, value) => {
            return acc + value;
          }, 0);

          delete expenseByMonth[month];
          expenseByMonth[monthName] = total;
        }
        // console.log('expense', expenseByMonth)

        return {
          expenseByMonth,
          labels: Object.keys(expenseByMonth),
          data: Object.values(expenseByMonth)
        };
      } else {
        throw new Error('Error on fetchAPI.getAllExpenseByYear');
      }
    } catch (error) {
      console.error('Error on fetchAPI.getAllExpenseByYear', error);
    }
  }

  async saveExpense(data) {
    try {
      const response = await fetch(`${this.#host}/api/expense/create`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: data.description,
          user_id: 1,
          value: data.value,
          recurrence_id: 1
        }),
      });

      return response.json()

    } catch (error) {
      console.error('Error on fetchAPI.getAllRemunerationByMonth', error);
    }
  }
}

const fetchAPI = new FetchAPI();
export default fetchAPI;
