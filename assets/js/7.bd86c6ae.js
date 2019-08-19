(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{270:function(t,a,s){"use strict";s.r(a);var e=s(38),n=Object(e.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"helm-releases"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#helm-releases","aria-hidden":"true"}},[t._v("#")]),t._v(" Helm Releases")]),t._v(" "),s("p",[t._v("A chart release is described through a Kubernetes custom resource named "),s("strong",[t._v("HelmRelease")]),t._v(".")]),t._v(" "),s("p",[t._v("A Helm release can refer a chart from:")]),t._v(" "),s("ul",[s("li",[t._v("public or private Helm repositories over HTTPS")]),t._v(" "),s("li",[t._v("public or private Git repositories over SSH")])]),t._v(" "),s("h2",{attrs:{id:"install-nginx"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#install-nginx","aria-hidden":"true"}},[t._v("#")]),t._v(" Install NGINX")]),t._v(" "),s("p",[t._v("To expose applications outside of the cluster you'll be using the NGINX ingress controller.\nThe controller will run inside the Linkerd mesh.")]),t._v(" "),s("p",[t._v("Create a namespace with linkerd injection enabled:")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiVersion")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" v1\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Namespace\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("annotations")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("fluxcd.io/ignore")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"false"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("linkerd.io/inject")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" enabled\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ingress"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("nginx\n")])])]),s("p",[t._v("Create a Helm release to install the NGINX ingress controller:")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiVersion")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" helm.fluxcd.io/v1\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" HelmRelease\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nginx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("ingress\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("namespace")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ingress"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("nginx\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("annotations")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("fluxcd.io/ignore")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"false"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spec")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("releaseName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nginx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("ingress\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("chart")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("repository")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" https"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//kubernetes"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("charts.storage.googleapis.com/\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nginx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("ingress\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1.16.0\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("values")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("controller")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("service")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" LoadBalancer\n")])])]),s("p",[t._v("Apply changes:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" -A "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -m "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"install ingress"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push origin master "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\nfluxctl "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sync")]),t._v("\n")])])]),s("p",[t._v("Validate that the Helm operator has installed the release:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("kubectl -n ingress-nginx get hr\n")])])]),s("p",[t._v("Find the public IP of the ingress controller:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("kubectl -n ingress-nginx get svc\n")])])]),s("h2",{attrs:{id:"install-podinfo"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#install-podinfo","aria-hidden":"true"}},[t._v("#")]),t._v(" Install podinfo")]),t._v(" "),s("p",[s("a",{attrs:{href:"http://github.com/stefanprodan/podinfo",target:"_blank",rel:"noopener noreferrer"}},[t._v("Podinfo"),s("OutboundLink")],1),t._v(" is tiny Go web application.\nYou'll be installing podinfo using a Helm chart stored in the git repository at "),s("code",[t._v("cluster/charts/podinfo")]),t._v(".")]),t._v(" "),s("p",[t._v("Create the "),s("code",[t._v("prod")]),t._v(" namespace with linkerd injection enabled:")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiVersion")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" v1\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Namespace\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("annotations")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("fluxcd.io/ignore")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"false"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("linkerd.io/inject")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" enabled\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" prod\n")])])]),s("p",[t._v("Create a Helm release to install the podinfo chart (replace "),s("code",[t._v("GHUSER")]),t._v(" with your GitHub username):")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiVersion")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" helm.fluxcd.io/v1\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" HelmRelease\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" podinfo\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("namespace")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" prod\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("annotations")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("fluxcd.io/ignore")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"false"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spec")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("releaseName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" podinfo\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("chart")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("git")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" git@github.com"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("GHUSER/gitops"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("workshop\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ref")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" master\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("path")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" cluster/charts/podinfo\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("values")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("repository")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" stefanprodan/podinfo\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("tag")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 2.1.0\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("service")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("enabled")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ClusterIP\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ingress")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("enabled")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("annotations")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kubernetes.io/ingress.class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"nginx"')]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("nginx.ingress.kubernetes.io/configuration-snippet")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),s("span",{pre:!0,attrs:{class:"token scalar string"}},[t._v("\n          proxy_set_header l5d-dst-override $service_name.$namespace.svc.cluster.local:9898;\n          proxy_hide_header l5d-remote-ip;\n          proxy_hide_header l5d-server-id;")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("path")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" /\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("hosts")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" *\n")])])]),s("p",[t._v("Apply changes:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" -A "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -m "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"install podinfo"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push origin master "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\nfluxctl "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sync")]),t._v("\n")])])]),s("p",[t._v("Validate that the Helm operator has installed podinfo:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("kubectl -n prod get hr\n")])])]),s("p",[t._v("Open your browser and navigate to "),s("code",[t._v("http://<LB-IP>/")]),t._v(", you should see podinfo v2.1.0 UI.")]),t._v(" "),s("p",[s("img",{attrs:{src:"/podinfo-2.1.0.png",alt:"v2.1.0"}})]),t._v(" "),s("h2",{attrs:{id:"automated-upgrade"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#automated-upgrade","aria-hidden":"true"}},[t._v("#")]),t._v(" Automated upgrade")]),t._v(" "),s("p",[t._v("Flux can be used to automate container image updates in your cluster.\nYou can enable the automate image tag updates by annotating Helm release objects.\nYou can also control what tags should be considered for an\nupdate by using glob, regex or semantic version expressions.")]),t._v(" "),s("p",[t._v("Edit the podinfo Helm release and enable Flux automated image updates:")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("div",{staticClass:"highlight-lines"},[s("br"),s("br"),s("br"),s("br"),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("br")]),s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiVersion")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" helm.fluxcd.io/v1\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" HelmRelease\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("annotations")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("fluxcd.io/automated")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"true"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("fluxcd.io/tag.chart-image")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" semver"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("~2.1\n")])])]),s("p",[t._v("Commit and push the changes to GitHub:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" -A "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -m "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"automate podinfo"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push origin master\n")])])]),s("p",[t._v("Sync the the changes on the cluster:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("fluxctl "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sync")]),t._v("\n")])])]),s("p",[t._v("Validate that the Helm operator has upgraded podinfo:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("kubectl -n prod get hr\n")])])]),s("p",[t._v("Pull the changes made by Flux locally:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" pull origin master\n")])])]),s("p",[t._v("Open your browser and navigate to "),s("code",[t._v("http://<LB-IP>/")]),t._v(", you should see podinfo v2.1.3 UI.")]),t._v(" "),s("p",[s("img",{attrs:{src:"/podinfo-2.1.3.png",alt:"v2.1.3"}})]),t._v(" "),s("h2",{attrs:{id:"sealed-secrets"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sealed-secrets","aria-hidden":"true"}},[t._v("#")]),t._v(" Sealed secrets")]),t._v(" "),s("p",[t._v("In order to store secrets safely in a public Git repo you can use the\n"),s("a",{attrs:{href:"https://github.com/bitnami-labs/sealed-secrets",target:"_blank",rel:"noopener noreferrer"}},[t._v("Sealed Secrets controller"),s("OutboundLink")],1),t._v("\nand encrypt your Kubernetes Secrets into "),s("strong",[t._v("SealedSecrets")]),t._v(".\nThe sealed secret can be decrypted only by the controller running in your cluster.")]),t._v(" "),s("p",[t._v("Create the Sealed Secrets Helm release:")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiVersion")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" helm.fluxcd.io/v1\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" HelmRelease\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" sealed"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("secrets"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("controller\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("namespace")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" kube"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("system\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("annotations")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("fluxcd.io/ignore")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"false"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spec")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("releaseName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" sealed"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("secrets"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("controller\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("chart")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("repository")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" https"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//kubernetes"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("charts.storage.googleapis.com/\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" sealed"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("secrets\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1.3.3\n")])])]),s("p",[t._v("Apply changes:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" -A "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -m "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"install sealed-secrets"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push origin master "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\nfluxctl "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sync")]),t._v("\n")])])]),s("p",[t._v("Install the kubeseal CLI:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" https://github.com/bitnami-labs/sealed-secrets/releases/download/v0.8.1/kubeseal-darwin-amd64\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -m "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("755")]),t._v(" kubeseal-darwin-amd64 /usr/local/bin/kubeseal\n")])])]),s("p",[t._v("At startup, the sealed-secrets controller generates a RSA key and logs the public key.\nUsing kubeseal you can save your public key as pub-cert.pem,\nthe public key can be safely stored in Git, and can be used to encrypt secrets\nwithout direct access to the Kubernetes cluster:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("kubeseal --fetch-cert "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n--controller-namespace"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("fluxcd "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n--controller-name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("sealed-secrets "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" pub-cert.pem\n")])])]),s("p",[t._v("You can generate a Kubernetes secret locally with kubectl and encrypt it with kubeseal:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("kubectl -n dev create secret generic basic-auth "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n--from-literal"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("user"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("admin "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n--from-literal"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("password"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("admin "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n--dry-run "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n-o json "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" basic-auth.json\n\nkubeseal --format"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("yaml --cert"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("pub-cert.pem "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" basic-auth.json "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" basic-auth.yaml\n")])])]),s("p",[t._v("This generates a custom resource of type SealedSecret that contains the encrypted credentials.")]),t._v(" "),s("p",[t._v("Flux will apply the sealed secret on your cluster and sealed-secrets controller will\nthen decrypt it into a Kubernetes secret.")]),t._v(" "),s("p",[t._v("To prepare for disaster recovery you should backup the Sealed Secrets controller private key with:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("kubectl get secret -n fluxcd sealed-secrets-key -o yaml --export "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" sealed-secrets-key.yaml\n")])])]),s("p",[t._v("To restore from backup after a disaster, replace the newly-created secret and restart the controller:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("kubectl replace secret -n fluxcd sealed-secrets-key -f sealed-secrets-key.yaml\nkubectl delete pod -n fluxcd -l "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("app")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("sealed-secrets\n")])])])])},[],!1,null,null,null);a.default=n.exports}}]);