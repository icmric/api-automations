import { resolveComponent, openBlock, createBlock, withCtx, createElementBlock, Fragment, renderList, createVNode, createTextVNode, toDisplayString, createCommentVNode, ref, watch, createSlots, createElementVNode, Transition, withDirectives, vModelText } from 'vue';
import { useApi } from '@directus/extensions-sdk';

var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};

const _sfc_main$1 = {
  name: 'PageNavigation',
  inheritAttrs: false,
  props: {
    current: {
      type: String,
      default: null,
    },
    pages: {
      type: Array,
      default: [],
    },
  },
  data() {
    return {
      groupedPages: [],
    };
  },
  watch: {
    pages(newVal) {
      this.groupPages(newVal);
    },
  },
  methods: {
    groupPages(pages) {
      this.groupedPages = pages.reduce((groups, page) => {
        const group = groups.find((g) => g.name === page.group);
        if (group) {
          group.items.push(page);
        } else {
          groups.push({ name: page.group, items: [page]});
        }
        return groups;
      }, []);
    },
  },
  created() {
    this.groupPages(this.pages);
  },
};

function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_v_list_item_title = resolveComponent("v-list-item-title");
  const _component_v_list_item = resolveComponent("v-list-item");
  const _component_v_text_overflow = resolveComponent("v-text-overflow");
  const _component_v_list_item_content = resolveComponent("v-list-item-content");
  const _component_v_list_group = resolveComponent("v-list-group");
  const _component_v_list = resolveComponent("v-list");

  return ($props.pages)
    ? (openBlock(), createBlock(_component_v_list, {
        key: 0,
        nav: ""
      }, {
        default: withCtx(() => [
          (openBlock(true), createElementBlock(Fragment, null, renderList($data.groupedPages, (group) => {
            return (openBlock(), createBlock(_component_v_list_group, {
              title: group.name
            }, {
              activator: withCtx(() => [
                createVNode(_component_v_list_item, { header: "" }, {
                  default: withCtx(() => [
                    createVNode(_component_v_list_item_title, null, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(group.name), 1 /* TEXT */)
                      ]),
                      _: 2 /* DYNAMIC */
                    }, 1024 /* DYNAMIC_SLOTS */)
                  ]),
                  _: 2 /* DYNAMIC */
                }, 1024 /* DYNAMIC_SLOTS */)
              ]),
              default: withCtx(() => [
                (openBlock(true), createElementBlock(Fragment, null, renderList(group.items, (navItem) => {
                  return (openBlock(), createBlock(_component_v_list_item, {
                    key: navItem.to,
                    active: navItem.uri === $props.current,
                    to: navItem.to
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_v_list_item_content, null, {
                        default: withCtx(() => [
                          createVNode(_component_v_text_overflow, {
                            text: navItem.label
                          }, null, 8 /* PROPS */, ["text"])
                        ]),
                        _: 2 /* DYNAMIC */
                      }, 1024 /* DYNAMIC_SLOTS */)
                    ]),
                    _: 2 /* DYNAMIC */
                  }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["active", "to"]))
                }), 128 /* KEYED_FRAGMENT */))
              ]),
              _: 2 /* DYNAMIC */
            }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["title"]))
          }), 256 /* UNKEYED_FRAGMENT */))
        ]),
        _: 1 /* STABLE */
      }))
    : createCommentVNode("v-if", true)
}
var PageNavigation = /*#__PURE__*/_export_sfc(_sfc_main$1, [['render',_sfc_render$1],['__file',"navigation.vue"]]);

var e=[],t=[];function n(n,r){if(n&&"undefined"!=typeof document){var a,s=!0===r.prepend?"prepend":"append",d=!0===r.singleTag,i="string"==typeof r.container?document.querySelector(r.container):document.getElementsByTagName("head")[0];if(d){var u=e.indexOf(i);-1===u&&(u=e.push(i)-1,t[u]={}),a=t[u]&&t[u][s]?t[u][s]:t[u][s]=c();}else a=c();65279===n.charCodeAt(0)&&(n=n.substring(1)),a.styleSheet?a.styleSheet.cssText+=n:a.appendChild(document.createTextNode(n));}function c(){var e=document.createElement("style");if(e.setAttribute("type","text/css"),r.attributes)for(var t=Object.keys(r.attributes),n=0;n<t.length;n++)e.setAttribute(t[n],r.attributes[t[n]]);var a="prepend"===s?"afterbegin":"beforeend";return i.insertAdjacentElement(a,e),e}}

var css = "\n.page-body[data-v-139846f6] {\r\n\tpadding: 20px;\r\n\tbackground-color: var(--theme--background);\r\n\tborder-radius: 8px;\r\n\tmargin-bottom: 20px;\n}\n.form-group[data-v-139846f6] {\r\n\tmargin-bottom: 15px;\r\n\tpadding: 10px;\n}\n.form-group label[data-v-139846f6] {\r\n\tdisplay: block;\r\n\tmargin-bottom: 5px;\r\n\tfont-weight: var(--v-button-font-weight, 600);\n}\n.form-control[data-v-139846f6] {\r\n\twidth: 100%;\r\n\tpadding: 10px;\r\n\tborder: var(--theme--border-width) solid var(--v-list-item-border-color, var(--theme--form--field--input--border-color));\r\n\tborder-radius: var(--theme--border-radius);\r\n\tbackground-color: var(--theme--background);\n}\n.btn[data-v-139846f6] {\r\n\r\n\r\n\tdisplay: inline-block;\r\n\tpadding: 10px 20px;\r\n\tfont-size: var(--v-button-font-size, 16px);\r\n\tfont-weight: var(--v-button-font-weight, 600);\r\n\ttext-align: center;\r\n\tcursor: pointer;\r\n\tborder-radius: 4px;\r\n\tbackground-color: var(--theme--primary);\r\n\tcolor: var(--foreground-inverted);\r\n\tborder: none;\r\n\tmargin: 10px;\n}\n.btn[data-v-139846f6]:hover {\r\n\tbackground-color: var(--theme--primary-accent);\n}\n.btn-debug[data-v-139846f6] {\r\n\tfloat: right;\n}\n.wrapped-pre[data-v-139846f6] {\r\n\twhite-space: pre-wrap;\r\n\tword-wrap: break-word;\r\n\toverflow-wrap: break-word;\r\n\tmax-width: 100%;\r\n\tbackground-color: #0d1117;\r\n\tpadding: 10px;\r\n\tborder-radius: 4px;\r\n\tmargin-top: 20px;\n}\n.pre-container[data-v-139846f6] {\r\n\tmargin-left: 10px;\r\n\tmargin-right: 10px;\r\n\tborder: var(--theme--border-width) solid var(--v-list-item-border-color, var(--theme--form--field--input--border-color));\r\n\tborder-radius: var(--theme--border-radius);\r\n\tposition: relative;\r\n\tmargin-bottom: 20px;\n}\n.btn-copy[data-v-139846f6] {\r\n\tposition: absolute;\r\n\tright: 0px;\r\n\tbackground-color: #21262e;\r\n\tcolor: white;\r\n\tborder: none;\r\n\tpadding: 5px 10px;\r\n\tborder-radius: 4px;\r\n\tcursor: pointer;\n}\n.btn-copy[data-v-139846f6]:hover {\r\n\tbackground-color: #30363d;\n}\n.copied-popup[data-v-139846f6] {\r\n\tposition: fixed;\r\n\tleft: 50%;\r\n\ttransform: translate(-50%, -50%);\r\n\tbackground-color: var(--theme--primary);\r\n\tcolor: var(--foreground-inverted);\r\n\tfont-size: var(--v-button-font-size, 16px);\r\n\tfont-weight: var(--v-button-font-weight, 600);\r\n\tpadding: 10px 20px;\r\n\tborder-radius: var(--theme--border-radius);\r\n\tz-index: 9999;\n}\n.fade-enter-active[data-v-139846f6],\r\n.fade-leave-active[data-v-139846f6] {\r\n\ttransition: opacity 0.3s ease-in-out;\n}\n.fade-enter-from[data-v-139846f6],\r\n.fade-leave-to[data-v-139846f6] {\r\n\topacity: 0;\n}\r\n";
n(css,{});

const _sfc_main = {
	components: {
		PageNavigation,
	},
	props: {
		page: {
			type: String,
			default: 'home',
		},
	},
	computed: {
		isHomePage() {
			return this.$props.page === 'home';
		},
		showJsonRsp() {
			return this.rspJsonStr !== "";
		},
	},
	setup(props) {
		const api = useApi();
		// State management using refs
		const all_pages = ref([]);
		const page_title = ref('');
		const page_body = ref('');
		const formData = ref([]);
		const searchParams = new URLSearchParams(window.location.search);
		const rspJsonStr = ref("");
		const showCopiedPopup = ref(false);
		const optionsSet = ref([new Set([])]);
		const formHeadings = ref([]);
		const prevResponses = ref([]);

		// Internal state variables
		let pageID = "";
		let rawRequest = "";
		let rawPageName = "";
		let bypassTransform = false;

		render_page(props.page);
		fetch_all_pages();

		watch(
			() => props.page,
			async () => {
				render_page(props.page);
			}
		);

		return { page_title, page_body, all_pages, formData, optionsSet, rspJsonStr, showCopiedPopup, formHeadings, submitForm, debugButton, showInNewTab, copyToClipboard, openResource, };

		// Recursively find form fields in the data structure
		function recursiveFind(obj, prepend = "", index = 0, ignoredKeys = ["additional_automations"]) {
			if (!formData.value[index]) {
				formData.value[index] = {};
			}
			if (!optionsSet.value[index]) {
				optionsSet.value[index] = new Set([]);
			}

			let keys = Object.keys(obj);
			for (let i = 0; i < keys.length; i++) {
				// Skip the key if it's in the ignoredKeys list
				if (ignoredKeys.includes(keys[i])) {
					continue;
				}
				if (obj[keys[i]] != null && typeof obj[keys[i]] == "object") {
					recursiveFind(obj[keys[i]], prepend, index);
				} else {
					let parseResult = parse_placeholders(obj[keys[i]]);
					if (parseResult != null && allowUserInput(parseResult[0])) {
						optionsSet.value[index].add(`${prepend}${parseResult[0]}`);
						formData.value[index][prepend + parseResult[0]] == null ? formData.value[index][prepend + parseResult[0]] = parseResult[1] : null;
					}
				}
			}
		}

		// Check if the placeholder is allowed to be used for user input
		function allowUserInput(objToCheck) {
			let valuesToCheck = ["reqAccountability", "$tool", "prevResponses", "apiResponse"];
			for (let i = 0; i < valuesToCheck.length; i++) {
				if (objToCheck.includes(valuesToCheck[i])) {
					return false;
				}
			}
			return true;
		}

		// Render page content and setup form
		async function render_page(page) {
			clearValues();
			if (page === 'home') {
				page_title.value = 'Automations';
				page_body.value = 'Please select an automation on the left to get started!';
			} else {
				try {
					console.log("Fetching pages");
					const rsp = await api.get(`/items/automations?fields=*,sources.*,additional_automations.*.*.*&filter[title][_eq]=${page}`);
					if (rsp.data.data) {
						rsp.data.data.forEach(item => {
							rawPageName = item.title;
							page_title.value = transformTitle(item.title);
							page_body.value = item.description;
							rawRequest = item.body;
							recursiveFind(rsp.data.data[0], "", 0);
							pageID = item.id;

							// Handle linked resources
							item.additional_automations.forEach((resource, index) => {
								optionsSet.value[index + 1] = new Set([]);
								formData.value[index + 1] = {};
								formHeadings.value[index + 1] = resource.item.title;
								recursiveFind(resource.item, '', index + 1);
							});

							// Handle URL parameters
							searchParams.forEach((value, key) => {
								if (optionsSet.value[0].has(key)) {
									formData.value[0][key] = value;
								}
							});
						});
					}
				} catch (error) {
					console.error(error);
					page_title.value = "404: Not Found";
				}
			}
		}

		// Fetch all pages for the navigation sidebar
		function fetch_all_pages() {
			api.get('/items/automations?fields=*,display_group.*').then((rsp) => {
				all_pages.value = [];
				rsp.data.data.forEach(item => {
					let group = item.display_group;
					if (group == null) {
						group = "Misc";
					}

					all_pages.value.push({
						label: transformTitle(item.title),
						to: `/automations-module/${item.title}`,
						group: group,
						ID: item.id,
					});
				});
			}).catch((error) => {
				console.log(error);
			});
		}

		function transformTitle(title) {
			title = title.replace(/-/g, ' ');
			return title.charAt(0).toUpperCase() + title.slice(1);
		}

		function parse_placeholders(text) {
			const regex = /{(.*?)}/g; // Non-greedy match
			let match;
			const placeholders = [];
			while ((match = regex.exec(text)) !== null) {
				let parts = match[1].split(' ');
				let path = parts[0];
				placeholders.push(path);
				placeholders.push(parts.slice(1).join(' '));
			}
			if (placeholders.length <= 0) {
				return null;
			} else {
				return placeholders;
			}
		}

		function clearValues() {
			// Reset form state
			formData.value = [{}];
			optionsSet.value = [new Set([])];
			rspJsonStr.value = "";
			rawPageName = "";
			prevResponses.value = [];
		}

		async function manageApiRequests() {
			// Reset previous responses so they dont stack up if multiple requests are made without refreshing the page
			prevResponses.value = [];
			// This makes it so the final chained resource is shown as the final response and the others are in order in previous responses
			// Not entirley sure how to fix, maybe add a check to see if there are multiple requests, and if so start from the seccond one and itterate through
			// then come back and do the first one? 
			for (const group in formData.value) {
				var index = parseInt(group);
				var apiHeading = formHeadings.value[index] || rawPageName;
				// Update rspJsonStr to provide feedback to the user about where it is up to
				rspJsonStr.value = "Performing request " + (index + 1) + "/" + formData.value.length + " for " + apiHeading;
				await makeApiRequest(formData.value[index], index == formData.value.length - 1, apiHeading);
			}		}

		async function makeApiRequest(apiReqBody, finalReq, apiHeading) {
			let postReqData = {
				"tool": apiHeading,
				"body": apiReqBody,
				"bypassTransform": bypassTransform,
				"prevResponses": prevResponses.value,
				"finalReq": finalReq,
			};

			console.log(buildApiUrl(false, apiReqBody.title));

			await api.post(buildApiUrl(false, apiReqBody.title), postReqData).then((rsp) => {
				let jsonRsp = rsp.data;
				prevResponses.value.push(jsonRsp);
				if (finalReq) {
					rspJsonStr.value = jsonRsp;
				}
			}).catch((error) => {
				console.log(error);
			});
		}

		function submitForm() {
			rspJsonStr.value = "...";
			manageApiRequests();
		}

		async function debugButton() {
			rspJsonStr.value = "...";
			bypassTransform = true;
			await manageApiRequests();
			rspJsonStr.value = JSON.stringify(rspJsonStr.value, null, 2);
			rspJsonStr.value += "\nForm Data: " + JSON.stringify(formData.value, null, 2);
			rspJsonStr.value += "\nAPI URL: " + buildApiUrl();
			rspJsonStr.value += "\nRaw Request: " + rawRequest;
		}

		async function copyToClipboard() {
			// pretty print copied text? if no, remove ,null, 2
			navigator.clipboard.writeText(JSON.stringify(rspJsonStr.value, null, 2));
			showCopiedPopup.value = true;
			setTimeout(() => {
				showCopiedPopup.value = false;
			}, 1500);
		}

		async function showInNewTab() {
			await manageApiRequests();

			// Create a new window
			const newWindow = window.open('', '_blank');

			// Ensure the new window is not null (in case of popup blockers)
			if (newWindow) {
				// Use JSON.stringify with formatting for readability
				const formattedJson = JSON.stringify(rspJsonStr.value, null, 2);

				// Write a formatted HTML page to display the JSON
				newWindow.document.write(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>JSON Response</title>
                <style>
                    body { 
                        font-family: monospace; 
                        white-space: pre; 
                        background-color: #f4f4f4;
                        padding: 20px;
                    }
                </style>
            </head>
            <body>${formattedJson}</body>
            </html>
        `);
			} else {
				// Handle popup blocker
				alert('Popup blocked. Please allow popups for this site.');
			}
		}

		function buildApiUrl(getRequest = false, pageName) {
			let urlDestination = pageName || rawPageName;
			let url = '/sources-endpoint/' + urlDestination;

			if (getRequest) {
				// only used for GET requests
				if (Object.keys(formData.value).length > 0) {
					url += '?';
					Object.keys(formData.value).forEach((key, index) => {
						url += `${key}=${formData.value[key]}`;
						if (index < Object.keys(formData.value).length - 1) {
							url += '&';
						}
					});
				}
			}

			// .replace only used when making GET request from here
			return url.replace("$request.", "");
		}

		// Opens the automation definition in a new tab
		function openResource() {
			try {
				window.open("/admin/content/automations/" + pageID);
			} catch (error) {
				rspJsonStr.value = "Error opening resource";
			}
		}
	},
};

const _hoisted_1 = {
  key: 0,
  class: "copied-popup"
};
const _hoisted_2 = ["innerHTML"];
const _hoisted_3 = { key: 0 };
const _hoisted_4 = {
  key: 1,
  class: "form-group"
};
const _hoisted_5 = ["for"];
const _hoisted_6 = ["onUpdate:modelValue", "id"];
const _hoisted_7 = {
  key: 4,
  class: "pre-container"
};
const _hoisted_8 = { class: "wrapped-pre" };

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_page_navigation = resolveComponent("page-navigation");
  const _component_v_icon = resolveComponent("v-icon");
  const _component_router_view = resolveComponent("router-view");
  const _component_private_view = resolveComponent("private-view");

  return (openBlock(), createElementBlock(Fragment, null, [
    createCommentVNode(" Main view container "),
    createVNode(_component_private_view, { title: $setup.page_title }, createSlots({
      navigation: withCtx(() => [
        createVNode(_component_page_navigation, {
          current: $props.page,
          pages: $setup.all_pages
        }, null, 8 /* PROPS */, ["current", "pages"])
      ]),
      default: withCtx(() => [
        createElementVNode("div", null, [
          createVNode(Transition, { name: "fade" }, {
            default: withCtx(() => [
              ($setup.showCopiedPopup)
                ? (openBlock(), createElementBlock("div", _hoisted_1, "Copied!"))
                : createCommentVNode("v-if", true)
            ]),
            _: 1 /* STABLE */
          })
        ]),
        createVNode(_component_router_view, {
          name: "tools-module",
          page: $props.page
        }, null, 8 /* PROPS */, ["page"]),
        ($setup.page_body)
          ? (openBlock(), createElementBlock("div", {
              key: 0,
              innerHTML: $setup.page_body,
              class: "page-body"
            }, null, 8 /* PROPS */, _hoisted_2))
          : createCommentVNode("v-if", true),
        (openBlock(true), createElementBlock(Fragment, null, renderList($setup.formData, (formGroup, groupIndex) => {
          return (openBlock(), createElementBlock("div", {
            key: groupIndex,
            class: "form-group-container"
          }, [
            createCommentVNode(" group headder for each linked resource "),
            (groupIndex > 0)
              ? (openBlock(), createElementBlock("h3", _hoisted_3, "Additional Resource " + toDisplayString(groupIndex) + ": " + toDisplayString($setup.formHeadings[groupIndex]), 1 /* TEXT */))
              : createCommentVNode("v-if", true),
            createCommentVNode(" Form fields for this group "),
            ($setup.optionsSet[groupIndex])
              ? (openBlock(), createElementBlock("div", _hoisted_4, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(Array.from($setup.optionsSet[groupIndex]), (option) => {
                    return (openBlock(), createElementBlock("div", {
                      key: option,
                      class: "form-field"
                    }, [
                      createElementVNode("label", {
                        for: `${groupIndex}-${option}`
                      }, toDisplayString(option), 9 /* TEXT, PROPS */, _hoisted_5),
                      withDirectives(createElementVNode("textarea", {
                        "onUpdate:modelValue": $event => (($setup.formData[groupIndex][option]) = $event),
                        id: `${groupIndex}-${option}`,
                        class: "form-control"
                      }, "\t\t\t", 8 /* PROPS */, _hoisted_6), [
                        [vModelText, $setup.formData[groupIndex][option]]
                      ])
                    ]))
                  }), 128 /* KEYED_FRAGMENT */))
                ]))
              : createCommentVNode("v-if", true)
          ]))
        }), 128 /* KEYED_FRAGMENT */)),
        (!$options.isHomePage)
          ? (openBlock(), createElementBlock("button", {
              key: 1,
              onClick: _cache[0] || (_cache[0] = (...args) => ($setup.submitForm && $setup.submitForm(...args))),
              class: "btn btn-primary"
            }, "Submit"))
          : createCommentVNode("v-if", true),
        (!$options.isHomePage)
          ? (openBlock(), createElementBlock("button", {
              key: 2,
              onClick: _cache[1] || (_cache[1] = (...args) => ($setup.showInNewTab && $setup.showInNewTab(...args))),
              class: "btn btn-new-tab"
            }, "Show In New Tab"))
          : createCommentVNode("v-if", true),
        (!$options.isHomePage)
          ? (openBlock(), createElementBlock("button", {
              key: 3,
              onClick: _cache[2] || (_cache[2] = (...args) => ($setup.debugButton && $setup.debugButton(...args))),
              class: "btn btn-debug"
            }, "Debug"))
          : createCommentVNode("v-if", true),
        ($options.showJsonRsp)
          ? (openBlock(), createElementBlock("div", _hoisted_7, [
              createElementVNode("button", {
                onClick: _cache[3] || (_cache[3] = (...args) => ($setup.copyToClipboard && $setup.copyToClipboard(...args))),
                class: "btn btn-copy"
              }, [
                createVNode(_component_v_icon, { name: "content_copy" })
              ]),
              createElementVNode("pre", _hoisted_8, toDisplayString($setup.rspJsonStr), 1 /* TEXT */)
            ]))
          : createCommentVNode("v-if", true)
      ]),
      _: 2 /* DYNAMIC */
    }, [
      (!$options.isHomePage)
        ? {
            name: "title-outer:append",
            fn: withCtx(() => [
              createVNode(_component_v_icon, {
                name: "open_in_new",
                onClick: $setup.openResource
              }, null, 8 /* PROPS */, ["onClick"])
            ]),
            key: "0"
          }
        : undefined
    ]), 1032 /* PROPS, DYNAMIC_SLOTS */, ["title"])
  ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
}
var ModuleComponent = /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render],['__scopeId',"data-v-139846f6"],['__file',"module.vue"]]);

var e0 = {
	id: 'automations-module',
	name: 'Automations',
	icon: 'build',
	routes: [
		{
			path: '',
			props: true,
			component: ModuleComponent,
		},
		{
			name: 'page',
			path: ':page',
			props: true,
			component: ModuleComponent,
		},
	],
};

const interfaces = [];const displays = [];const layouts = [];const modules = [e0];const panels = [];const themes = [];const operations = [];

export { displays, interfaces, layouts, modules, operations, panels, themes };
