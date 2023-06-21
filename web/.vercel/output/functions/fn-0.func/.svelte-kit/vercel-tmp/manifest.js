export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["convert.png","favicon.ico","images/drag_background.png","images/paper_folder.png","landing.png"]),
	mimeTypes: {".png":"image/png",".ico":"image/vnd.microsoft.icon"},
	_: {
		client: {"start":"_app/immutable/entry/start.fca9d7f6.js","app":"_app/immutable/entry/app.90e2c862.js","imports":["_app/immutable/entry/start.fca9d7f6.js","_app/immutable/chunks/index.f5466b25.js","_app/immutable/chunks/singletons.f98be855.js","_app/immutable/chunks/index.9c5823de.js","_app/immutable/entry/app.90e2c862.js","_app/immutable/chunks/index.f5466b25.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('../output/server/nodes/0.js'),
			() => import('../output/server/nodes/1.js'),
			() => import('../output/server/nodes/2.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
