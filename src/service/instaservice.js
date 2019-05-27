export default class {
	constructor() {
		this.items = this.getResource('posts/').then(r => r);
	}

	getResource = async url => {
		const res = await fetch(`http://localhost:3001/${url}`);
		if (!res.ok) throw new Error(`Could not fetch ${url}, recived ${res.status}`);
		return res.json();
	};

	getAllPosts = () => this.items;
	getAllImages = async () =>
		(await this.items).map(({ src, altname, id }) => {
			return { src, altname, id };
		});
	getAllUsers = async () =>
		(await this.items).map(({ photo, altname, id }) => {
			return { photo, altname, id };
		});
}
