const getState = ({ getStore, getActions, setStore }) => {

	const URL_PEOPLE = "https://swapi.dev/api/people/";
	const URL_PLANETS = "https://swapi.dev/api/planets/";

	return {
		store: {
			people: [],
			planets: [],
			favorites: []
		},
		actions: {
			getPeople: () => {
				fetch(URL_PEOPLE)
					.then((response) => {
						console.log(response);
						return response.json();
					})
					.then((data) => {
						console.log(data);
						setStore({ people: data.results })
						localStorage.setItem('people', data.results);
					}).catch(error => {
						console.log(error);
					});
			},

			getPlanets: () => {
				fetch(URL_PLANETS)
					.then((response) => {
						console.log(response);
						return response.json();
					})
					.then((data) => {
						console.log(data);
						setStore({ planets: data.results });
						localStorage.setItem('planets', data.results);
					}).catch(error => {
						console.log(error);
					});
			},

			addFavorite: item => {
				const store = getStore();
				const validate = store.favorites.includes(item);
				if (store.favorites == [] || !validate) {
					setStore({ favorites: [...store.favorites, item] });
				}
			},

			deleteFavorite: id => {
				const store = getStore();
				const updatedList = [...store.favorites];
				updatedList.splice(id, 1);
				setStore({ favorites: [...updatedList] });
			}
		}
	};
};

export default getState;