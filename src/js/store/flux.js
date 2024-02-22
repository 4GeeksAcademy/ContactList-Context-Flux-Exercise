const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: []
		},
		actions: {
			getAgenda: () => {
				fetch("https://playground.4geeks.com/apis/fake/contact/agenda/my_super_agenda")
					.then(response => response.json())
					.then(data => setStore({ contacts: data }))
					.catch(error => console.log(error));
			},

			createContact: () => {
				fetch("https://playground.4geeks.com/apis/fake/contact/", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify([
						{
							full_name: "Dave Bradley",
							email: "dave@gmail.com",
							agenda_slug: "my_super_agenda",
							address: "47568 NW 34ST, 33434 FL, USA",
							phone: "7864445566"
						}
					])
				})
					.then(response => response.json())
					.then(data => console.log({ contacts: data }))
					.catch(error => console.log(error));
			}
		}
	};
};

export default getState;
