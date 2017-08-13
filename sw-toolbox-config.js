// sw-toolbox

/*
urlPattern: express like routing
Methods: get, post, delete, post
Handlers : [networkFirst, cacheFirst, fastest, cacheOnly, networkOnly]
Options : 
	networkTimeoutSeconds [Number] => A timeout that applies to the toolbox.networkFirst built-in handler. If networkTimeoutSeconds is set, then any network requests that take longer than that amount of time will automatically fall back to the cached response if one exists. When networkTimeoutSeconds is not set, the browser’s native networking timeout logic applies.
	cache [Object] => Various properties of cache control the behavior of the default cache when set via toolbox.options.cache, or the cache used by a specific request handler.
	cache.name [String] => The name of the Cache used to store Response objects. Using a unique name allows you to customize the cache’s maximum size and age of entries.
	cache.maxEntries [Number] => Imposes a least-recently used cache expiration policy on entries cached via the various built-in handlers. You can use this with a cache that’s dedicated to storing entries for a dynamic set of resources with no natural limit. Setting cache.maxEntries to, e.g., 10 would mean that after the 11th entry is cached, the least-recently used entry would be automatically deleted. The cache should never end up growing beyond cache.maxEntries entries. This option will only take effect if cache.name is also set. It can be used alone or in conjunction with cache.maxAgeSeconds.
	cache.maxAgeSeconds [Number] => Imposes a maximum age for cache entries, in seconds. You can use this with a cache that’s dedicated to storing entries for a dynamic set of resources with no natural limit. Setting cache.maxAgeSeconds to, e.g., 60 * 60 * 24 would mean that any entries older than a day would automatically be deleted. This option will only take effect if cache.name is also set. It can be used alone or in conjunction with cache.maxEntries.
*/
module.exports = [
	{
		urlPattern: /\/.css/,
	    handler: 'cacheOnly'
	},
	{
	    urlPattern: /\/.js\//,
	    method: 'post',
	    handler: 'fastest',
	    options: {
	        cache: {
	          maxEntries: 10,
	          name: 'articles-cache'
	        }
	    }
	}
]