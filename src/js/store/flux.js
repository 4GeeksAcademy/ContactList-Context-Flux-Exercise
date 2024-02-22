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
            }
        }
    };
};
export default getState;