export default {
    "type": "document",
    "name": "home",
    "title": "Home",
    "fields": [
        {
            "type": "string",
            "name": "title",
            "title": "Title",
            "description": "The title of the page.",
            "validation": Rule => Rule.required()
        },
        {
            "type": "string",
            "name": "excerpt",
            "title": "Excerpt",
            "description": "The excerpt of the page displayed in meta data.",
            "validation": null
        },
        {
            "type": "boolean",
            "name": "has_more_link",
            "title": "Show keep keading link",
            "description": "Display the keep reading link in the post feed",
            "initialValue": true,
            "validation": null
        },
        {
            "type": "string",
            "name": "more_link_text",
            "title": "Keep reading link label",
            "validation": null
        },
        {
            "type": "string",
            "name": "layout",
            "title": "Layout",
            "hidden": false,
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "home"
                ]
            }
        },
        {
            "type": "string",
            "name": "stackbit_url_path",
            "title": "URL Path",
            "description": "The URL path of this page relative to site root. For example, the site root page would be \"/\", and post page would be \"posts/new-post/\"",
            "validation": Rule => Rule.required()
        },
        {
            "type": "string",
            "name": "stackbit_dir",
            "title": "Directory",
            "description": "The directory path where this file is stored",
            "hidden": false,
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "content/pages"
                ]
            }
        },
        {
            "type": "string",
            "name": "stackbit_model_type",
            "title": "Stackbit Model Type",
            "description": "Stackbit model type",
            "hidden": false,
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "page"
                ]
            }
        }
    ],
    "singleInstance": true,
    "preview": {
        "select": {
            "title": "title"
        }
    }
}