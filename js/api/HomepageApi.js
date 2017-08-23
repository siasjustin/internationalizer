import 'whatwg-fetch'; 
class HomePageApi {
	static getAllHomePageData(){
		return fetch('../../locales/en.json').then(response => {
			return response.json();
		}).catch(error => {
			return error;
		});
	}
}

export default HomePageApi;