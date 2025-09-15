# Cross-Site Scripting Vulnerable Files - 20 Files

This directory contains 20 JavaScript files with XSS vulnerabilities identified by the `javascript-cross-site-scripting-ide` Semgrep rule.

**Analysis Results:**
- **Total Files:** 20 JavaScript files
- **Total Findings:** 26 XSS vulnerabilities  
- **Unique Repositories:** 20
- **Severity:** ERROR (High)

## Directory Structure

Each subdirectory contains files from a specific GitHub repository:

### 1. duckduckgo_privacy-test-pages/
- **File:** server.js
- **Repository:** duckduckgo/privacy-test-pages
- **Vulnerable Lines:** 225-239
- **GitHub Link:** https://github.com/duckduckgo/privacy-test-pages/blob/8abf32e54047e74fb31102782b90087e51035f0a/server.js#L225-L239

### 2. imlinhanchao_puzzle_node/
- **File:** routes_index.js (original: routes/index.js)
- **Repository:** imlinhanchao/puzzle_node
- **Vulnerable Lines:** 74
- **GitHub Link:** https://github.com/imlinhanchao/puzzle_node/blob/a71db2df382d9f2fee12bc647af43cf88ecd7aec/routes/index.js#L74

### 3. mikelangelo-project_osv-microservice-demo/
- **File:** db.js
- **Repository:** mikelangelo-project/osv-microservice-demo
- **Vulnerable Lines:** 82, 103
- **GitHub Link:** https://github.com/mikelangelo-project/osv-microservice-demo/blob/6b7a95f58f585011b8a64a7d0200c54b1a88426b/db.js

### 4. nhn_tui.file-uploader/
- **File:** server_app.js (original: server/app.js)
- **Repository:** nhn/tui.file-uploader
- **Vulnerable Lines:** 129
- **GitHub Link:** https://github.com/nhn/tui.file-uploader/blob/4cfc31eb5956a278c7e0ee8cbe1179c7d1105358/server/app.js#L129

### 5. skepticfx_hookish/
- **File:** src_js_domHooks.js (original: src/js/domHooks.js)
- **Repository:** skepticfx/hookish
- **Vulnerable Lines:** 33
- **GitHub Link:** https://github.com/skepticfx/hookish/blob/f5cf378e1f0d8647982a94523efbbfce58d2b576/src/js/domHooks.js#L33

### 6. yazz_VisualJS/
- **File:** src_electron.js (original: src/electron.js)
- **Repository:** yazz/VisualJS
- **Vulnerable Lines:** 1026, 1035, 1932, 1937, 2325, 2416, 2456, 2710, 3802, 3807, 5338
- **GitHub Link:** https://github.com/yazz/VisualJS/blob/6b412c42ef0334618bc6a0be3bb91f3ff9961129/src/electron.js

### 7. ajinabraham_Node.Js-Security-Course/
- **File:** eval.js
- **Repository:** ajinabraham/Node.Js-Security-Course
- **Vulnerable Lines:** 4, 5
- **GitHub Link:** https://github.com/ajinabraham/Node.Js-Security-Course/blob/7582b421c5c7547f1256f2b0c2732717f22da088/eval.js

### 8. js-wei_node-blog/
- **File:** model_helper.js (original: model/helper.js)
- **Repository:** js-wei/node-blog
- **Vulnerable Lines:** 318
- **GitHub Link:** https://github.com/js-wei/node-blog/blob/825b965cc48dbca978eee20cf7825dda1fb3025b/model/helper.js#L318

### 9. justjavac_marketing-generator/
- **File:** app.js
- **Repository:** justjavac/marketing-generator
- **Vulnerable Lines:** 41-49
- **GitHub Link:** https://github.com/justjavac/marketing-generator/blob/3979f84f161f401b98596e90b48e591f5a72a0d6/app.js#L41-L49

### 10. kanaka_raft.js/
- **File:** rtc.js
- **Repository:** kanaka/raft.js
- **Vulnerable Lines:** 59, 60
- **GitHub Link:** https://github.com/kanaka/raft.js/blob/cfd5d612d073d236fe3767256366f1254965f2eb/rtc.js

### 11. m0bilesecurity_RMS-Runtime-Mobile-Security/
- **File:** rms.js
- **Repository:** m0bilesecurity/RMS-Runtime-Mobile-Security
- **Vulnerable Lines:** 1444
- **GitHub Link:** https://github.com/m0bilesecurity/RMS-Runtime-Mobile-Security/blob/b3ed044774b9f106814d4b98ab78bca595dea1e3/rms.js#L1444

### 12. mike-marcacci_gandhi/
- **File:** lib_index.js (original: lib/index.js)
- **Repository:** mike-marcacci/gandhi
- **Vulnerable Lines:** 167-168
- **GitHub Link:** https://github.com/mike-marcacci/gandhi/blob/145574286c8486f7719ed054aa51371cae5f3a23/lib/index.js#L167-L168

### 13. paypal_paypal-messaging-components/
- **File:** utils_devServerProxy_proxy.js (original: utils/devServerProxy/proxy.js)
- **Repository:** paypal/paypal-messaging-components
- **Vulnerable Lines:** 24-37
- **GitHub Link:** https://github.com/paypal/paypal-messaging-components/blob/f1deb4449cda15544bd904062716949e0147f11b/utils/devServerProxy/proxy.js#L24-L37

### 14. FGRibreau_forever-webui/
- **File:** app.js
- **Repository:** FGRibreau/forever-webui
- **GitHub Link:** https://github.com/FGRibreau/forever-webui/blob/095833b2835961261ef4c8e0d1325b139971ec23/app.js

### 15. hyperstudio_MIT-Annotation-Data-Store/
- **File:** web.js
- **Repository:** hyperstudio/MIT-Annotation-Data-Store
- **GitHub Link:** https://github.com/hyperstudio/MIT-Annotation-Data-Store/blob/4c48c2ebf38b8d05b2cce3a46180ffb9adc3ba64/web.js

### 16. MikeRalphson_bbc-rss/
- **File:** itv.js
- **Repository:** MikeRalphson/bbc-rss
- **GitHub Link:** https://github.com/MikeRalphson/bbc-rss/blob/96bcbf685b79ac94b4199d5dc8bec5d6b4a665da/itv.js

### 17. martinsookael_multiverse/
- **File:** t.js
- **Repository:** martinsookael/multiverse
- **GitHub Link:** https://github.com/martinsookael/multiverse/blob/f2d2426e09cb49322a62bad1ac3d91a47c499b53/t.js

### 18. dkiyatkin_node-infrajs/
- **File:** getInfraHtml.js
- **Repository:** dkiyatkin/node-infrajs
- **GitHub Link:** https://github.com/dkiyatkin/node-infrajs/blob/11ad18fb228b34666975ec592888741a62069e1a/getInfraHtml.js

### 19. iriscouch_bigdecimal.js/
- **File:** CouchDB_demo.js (original: CouchDB/demo.js)
- **Repository:** iriscouch/bigdecimal.js
- **GitHub Link:** https://github.com/iriscouch/bigdecimal.js/blob/b9228bca0650d4c993559e07d1a3847f83b7499c/CouchDB/demo.js

### 20. davglass_yui-express/
- **File:** server_fugue.js
- **Repository:** davglass/yui-express
- **GitHub Link:** https://github.com/davglass/yui-express/blob/674fe59750c6440962439b5cc058c55a282b7076/server_fugue.js

## Vulnerability Details

All files contain Cross-Site Scripting (XSS) vulnerabilities where:
- **CWE:** CWE-79
- **Severity:** ERROR (High)
- **Issue:** Untrusted input reflected in response without proper sanitization

## Source Data

## Source Data

Generated from Darwin analysis CSV: `/Users/sanjuera/MCP_DARWIN/mcp/src/darwin_findings_20files.csv`

## File Count Summary
- **Total JavaScript Files:** 20
- **Total XSS Vulnerabilities:** 26
- **Repositories Analyzed:** 20
- **Files with Vulnerabilities:** 13 (65% detection rate)
- **Most Vulnerable File:** yazz/VisualJS src/electron.js (11 vulnerabilities)
