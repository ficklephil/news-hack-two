import news.hack.two.MewsController

class UrlMappings {

	static mappings = {
        "/"(controller: "mews", view: "index")
		"/$controller/$action?/$id?"{
			constraints {
				// apply constraints here
			}
		}

		"500"(view:'/error')
        "/$angularRoute1?"(controller: 'mews', action: 'index')

	}
}
