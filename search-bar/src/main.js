import App from './App.svelte';
import { menuItems } from './data.json'
import { MenuItemsRepository } from './full-text-index';


const menuItemsRepo = new MenuItemsRepository();
menuItemsRepo.init({
	documents: menuItems.map((item, idx) => (
		{
			...item,
			id: String(idx)
		}))
});

const app = new App({
	target: document.body,
	props: {
		menuItemsRepo
	}
});

export default app;