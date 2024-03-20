function myFunction(){
    Parse.serverURL = 'https://parseapi.back4app.com';
    Parse.initialize('N8mGmwDOUCMa8aYAknJ2tbwoxvwXTCT4YM5ZVP4r', 'iBPOD8450vCdh3S6fyGFABzItsdxXeJI2lCgtBwG', 'Yyi8LyrwYndgWVnciMcYWuXNslhLpe3ppa7AISpe');
    
    (async () => {
        const myNewObject = new Parse.Object('Reserva');
        myNewObject.set('Equipamento', 'A string');
        myNewObject.set('Dia', 'A string');
        myNewObject.set('Hora', 'A string');
        myNewObject.set('Pagamento', 'A string');
        try {
          const result = await myNewObject.save();
          // Access the Parse Object attributes using the .GET method
          console.log('Reserva created', result);
        } catch (error) {
          console.error('Error while creating Reserva: ', error);
        }
      })();
    ;
    }
    