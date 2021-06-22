# FSJS project 6: static_node_and_express_site
This is a static site generated using Node.js, the Express framework and the Pug templating engine. 

## Note that this site runs on localhost:3000

## This is the second submittal - please note that the error handler for 404 errors has been fixed and that when `/noroute` and `project/noroute` routes are served, both will render a 404 error.  In the previous submittal, only the `/noroute` (or similar non-existent routes) would cause the 404 error handler to render.  `project/noroute` would only render the `error` view instead of the 404 `page-not-found` view.  It should all work as designed now.

## Exceeds Expectations Features

* Running `npm start` serves the app

* Separate `error.pug` and the `page-not-found.pug` templates have been created and added to the views folder

* The `page-not-found` view will render when a 404 error occurs.
* All other errors will cause the `error` page to render.

* CSS changes:
1. Font changes - Changed the font of the whole site to the Google Font 'Lato'
2. Added topo pattern svg background to the sidebar
3. Added gear pattern svg background to the wrapper class
4. Added box-shadow to the .btn-link-about class on the Live Demo and GitHub Repo link buttons 
5. Adjusted margins and shadow on .btn-link-about class on the about page