export default class InstaService {
	constructor() {
		this._apiBse = 'http://localhost:3000/';
	}

	getResource = async url => {
		const res = await fetch(`${this._apiBse}${url}`);
		if (!res.ok) throw new Error(`Could not fetch ${url}, recived ${res.status}`);
		return res.json();
	};

	getAllPosts = async () => await this.getResource('posts/');
}
