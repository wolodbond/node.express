const express = require("express");
const router = express.Router();

const {
	mainAction,
	codeDocsAction,
	apiDocsAction
} = require("../../../actions/v1/main");

router.all("/", mainAction);

router.get("/code_docs", codeDocsAction);

router.get("/api_docs", apiDocsAction);

module.exports = router;
