import news.hack.two.MewsController

class UrlMappings {

	static mappings = {
		"/$controller/$action?/$id?"{
			constraints {
				// apply constraints here
			}
		}

		"/"(view:"/index")
		"500"(view:'/error')
        "/mews/$angularRoute1?/$angularRoute2?"(controller: 'mews', action: 'index')

	}
}
