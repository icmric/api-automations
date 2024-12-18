import { useTool } from './functions.js';
export { reqExport, contextExport };

let reqExport;
let contextExport;

export default (router, context) => {
	router.get('/*', async (req, res) => {
		// Will fail if the user does not have read acsess to both tools and parent collection
		try {
			reqExport = req;
			contextExport = context;
			let finalApiResponse = await useTool(reqExport, contextExport);
			res.send(finalApiResponse);
		} catch (e) {
			res.send('Request failed! ' + e);
		}
	});

	router.post('/*', async (req, res) => {
		// Will fail if the user does not have write acsess to both tools and parent collection
		try {
			reqExport = req;
			contextExport = context;
			let finalApiResponse = await useTool(reqExport, contextExport);
			res.send(finalApiResponse);
		} catch (e) {
			res.send('Request failed! ' + e);
		}
	});
};