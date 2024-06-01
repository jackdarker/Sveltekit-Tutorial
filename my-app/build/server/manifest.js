const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.1f28ba19.js","app":"_app/immutable/entry/app.a9ce80ac.js","imports":["_app/immutable/entry/start.1f28ba19.js","_app/immutable/chunks/scheduler.55267da8.js","_app/immutable/chunks/singletons.13b2bb7f.js","_app/immutable/chunks/index.9b1262e1.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/entry/app.a9ce80ac.js","_app/immutable/chunks/scheduler.55267da8.js","_app/immutable/chunks/index.102465cc.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./chunks/0-780c6a76.js')),
			__memo(() => import('./chunks/1-d01d9914.js')),
			__memo(() => import('./chunks/2-f8de29aa.js')),
			__memo(() => import('./chunks/3-f0aae6b0.js')),
			__memo(() => import('./chunks/4-d1a76c8a.js')),
			__memo(() => import('./chunks/5-cde8e270.js')),
			__memo(() => import('./chunks/6-e6562ba9.js')),
			__memo(() => import('./chunks/7-6969d48d.js')),
			__memo(() => import('./chunks/8-169ad076.js')),
			__memo(() => import('./chunks/9-07dca08f.js')),
			__memo(() => import('./chunks/10-a83bb348.js')),
			__memo(() => import('./chunks/11-04bb9023.js')),
			__memo(() => import('./chunks/12-dfce729f.js')),
			__memo(() => import('./chunks/13-37a877b8.js'))
		],
		routes: [
			{
				id: "/(group0)",
				pattern: /^\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/(group0)/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/api",
				pattern: /^\/api\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-64a512bd.js'))
			},
			{
				id: "/(group0)/blog",
				pattern: /^\/blog\/?$/,
				params: [],
				page: { layouts: [0,2,3,], errors: [1,,,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/(group0)/blog/[slug]",
				pattern: /^\/blog\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,3,4,], errors: [1,,,,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/(group1)/browser/[[page]]",
				pattern: /^\/browser(?:\/([^/]+))?\/?$/,
				params: [{"name":"page","optional":true,"rest":false,"chained":true}],
				page: { layouts: [0,5,], errors: [1,,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/(group0)/chart",
				pattern: /^\/chart\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/(group1)/tagger",
				pattern: /^\/tagger\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/(group1)/viewer",
				pattern: /^\/viewer\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 13 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();

const prerendered = new Set([]);

export { manifest, prerendered };
//# sourceMappingURL=manifest.js.map
