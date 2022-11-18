const getState = ({ getStore, getActions, setStore }) => {

	const URL_PEOPLE = "https://swapi.dev/api/people/";
	const URL_PLANETS = "https://swapi.dev/api/planets/";

	return {
		store: {
			people: [],
			planets: [],
			favorite: []
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
						setStore({ planets: data.results })
					}).catch(error => {
						console.log(error);
					});
			},

			addFavorite: item => {
				const store = getStore();
				if (store.favorite == [] || !store.favorite.includes(item)) {
					setStore({ favorite: [...store.favorite, item] });
				}
			},

			deleteFavorite: id => {
				const store = getStore();
				const updatedList = [...store.favorite];
				updatedList.splice(id, 1);
				setStore({ favorite: [...updatedList] });
			}
		}
	};
};

export default getState;