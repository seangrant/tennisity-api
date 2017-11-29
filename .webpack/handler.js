(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("graphql");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

/*** IMPORTS FROM imports-loader ***/
var graphql = __webpack_require__(0);

'use strict';

var express = __webpack_require__(10);
var body_parser = __webpack_require__(9);

var expressGraphQL = __webpack_require__(11);

// let's import the schema file we just created
var GraphQLSchema = __webpack_require__(6);

var app = express();

app.use(body_parser.json({ limit: '50mb' }));

app.use('/', expressGraphQL(function () {
	return {
		graphiql: true,
		schema: GraphQLSchema
	};
}));

module.exports = app;


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("aws-serverless-express");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

/*** IMPORTS FROM imports-loader ***/
var graphql = __webpack_require__(0);

'use strict';

var awsServerlessExpress = __webpack_require__(2);
var app = __webpack_require__(1);
var server = awsServerlessExpress.createServer(app);

exports.handler = function (event, context) {
  return awsServerlessExpress.proxy(server, event, context);
};


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/*** IMPORTS FROM imports-loader ***/
var graphql = __webpack_require__(0);

'use strict';

var GraphQL = __webpack_require__(0);
var GraphQLList = GraphQL.GraphQLList,
    GraphQLString = GraphQL.GraphQLString,
    GraphQLNonNull = GraphQL.GraphQLNonNull;

// import the Post type we created

var PostType = __webpack_require__(7);

// import the Post resolver we created
var PostResolver = __webpack_require__(5);

module.exports = {
	index: function index() {
		return {
			type: new GraphQLList(PostType),
			description: 'This will return all the posts we find in the given subreddit.',
			args: {
				subreddit: {
					type: GraphQLString,
					description: 'Please enter subreddit name'
				}
			},
			resolve: function resolve(parent, args, context, info) {
				return PostResolver.index(args);
			}
		};
	}
};


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

/*** IMPORTS FROM imports-loader ***/
var graphql = __webpack_require__(0);

'use strict';

var axios = __webpack_require__(8);

var PostsController = {

	index: function index(args) {

		var URL = 'https://www.reddit.com/r/' + (args.subreddit || 'javascript') + '.json';

		return axios.get(URL).then(function (response) {
			var __posts = [];
			var posts = response.data.data.children;

			posts.map(function (post) {
				post.data.content = post.data.selftext_html;
				__posts.push(post.data);
			});
			return __posts;
		}).catch(function (error) {
			return { error: error };
		});
	}

};

module.exports = PostsController;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

/*** IMPORTS FROM imports-loader ***/
var graphql = __webpack_require__(0);

'use strict';

var GraphQL = __webpack_require__(0);
var GraphQLObjectType = GraphQL.GraphQLObjectType,
    GraphQLSchema = GraphQL.GraphQLSchema;

// import the user query file we created

var PostQuery = __webpack_require__(4);

// lets define our root query
var RootQuery = new GraphQLObjectType({
	name: 'RootQueryType',
	description: 'This is the default root query provided by our application',
	fields: {
		posts: PostQuery.index()
	}
});

// export the schema
module.exports = new GraphQLSchema({
	query: RootQuery
});


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

/*** IMPORTS FROM imports-loader ***/
var graphql = __webpack_require__(0);

'use strict';

var GraphQL = __webpack_require__(0);
var GraphQLObjectType = GraphQL.GraphQLObjectType,
    GraphQLString = GraphQL.GraphQLString,
    GraphQLID = GraphQL.GraphQLID,
    GraphQLInt = GraphQL.GraphQLInt;


var PostType = new GraphQL.GraphQLObjectType({
	name: 'Post',
	description: 'Post Type, For all the posts present in Reddit.',

	fields: function fields() {
		return {
			id: {
				type: GraphQLID,
				description: 'ID of the post'
			},
			title: {
				type: GraphQLString,
				description: 'Title of the post'
			},
			url: {
				type: GraphQLString,
				description: 'URL of the post'
			},

			author: {
				type: GraphQLString,
				description: 'Name of the Author who created this post'
			},

			ups: {
				type: GraphQLInt,
				description: 'Total number of Upvotes received for this post'
			},
			downs: {
				type: GraphQLString,
				description: 'Total number of Downvotes received for this post'
			},
			content: {
				type: GraphQLString,
				description: 'Markdown content of the post'
			}

		};
	}

});

module.exports = PostType;


/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("express-graphql");

/***/ })
/******/ ])));