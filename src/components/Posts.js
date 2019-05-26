import React from 'react';
import Post from './Post';

export default class Header extends React.Component {
	render() {
		return (
			<div className="left">
				<Post
					usersrc="https://www.meme-arsenal.com/memes/d08de878aaede7b9de8dfa53106519e3.jpg"
					username="Виктор Россия"
					name="Красивая лужа"
					desc="Значимость этих проблем настолько очевидна, что консультация с широким активом требует от нас
					анализа системы обучения кадров, соответствующей насущным потребностям."
					src="https://womanadvice.ru/sites/default/files/49/articles_main_big/2017-11-10_0900/priroda_kolumbii.jpg"
					alt="nature"
				/>
				<Post
					usersrc="https://steamuserimages-a.akamaihd.net/ugc/955223864095212196/5E51E3F97ACB5D0419C65329BA942434BF81DA6E/"
					username="Ольга Вадим"
					name="Большая яма в Америке"
					desc="Не вызывает сомнений, что рамки и место обучения кадров играет важную роль в формировании систему массового участия."
					src="https://www.outsideonline.com/sites/default/files/styles/full-page/public/2018/11/20/outside-guide-grand-canyon_h.jpg?itok=uTbZlKSn"
					alt="nature"
				/>
			</div>
		);
	}
}
