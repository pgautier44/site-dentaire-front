module.exports = [
"[project]/src/components/Seo/Seo.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$head$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/head.js [ssr] (ecmascript)");
;
;
;
function Seo({ title, description, jsonLd }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$head$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
        children: [
            title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("title", {
                children: title
            }, void 0, false, {
                fileName: "[project]/src/components/Seo/Seo.jsx",
                lineNumber: 7,
                columnNumber: 17
            }, this),
            description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("meta", {
                name: "description",
                content: description
            }, void 0, false, {
                fileName: "[project]/src/components/Seo/Seo.jsx",
                lineNumber: 8,
                columnNumber: 23
            }, this),
            jsonLd && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("script", {
                type: "application/ld+json",
                dangerouslySetInnerHTML: {
                    __html: JSON.stringify(jsonLd)
                }
            }, void 0, false, {
                fileName: "[project]/src/components/Seo/Seo.jsx",
                lineNumber: 11,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Seo/Seo.jsx",
        lineNumber: 6,
        columnNumber: 5
    }, this);
}
const __TURBOPACK__default__export__ = Seo;
}),
"[project]/styles/Conseils.module.css [ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "card": "Conseils-module__nw1YDG__card",
  "cardContent": "Conseils-module__nw1YDG__cardContent",
  "container": "Conseils-module__nw1YDG__container",
  "page": "Conseils-module__nw1YDG__page",
  "title": "Conseils-module__nw1YDG__title",
});
}),
"[project]/pages/conseils.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Conseils
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/link.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Seo$2f$Seo$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Seo/Seo.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$Conseils$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/styles/Conseils.module.css [ssr] (css module)");
;
;
;
;
;
const fiches = [
    {
        id: 1,
        title: "Qu’est-ce que l’orthodontie ?",
        img: "/images/Orthodontie_Definition.png",
        desc: "Comprendre l’orthodontie, ses objectifs et le rôle des praticiens spécialisés.",
        link: "/orthodontie-presentation"
    },
    {
        id: 2,
        title: "Première Consultation Orthodontique",
        img: "/images/Premiere_Consultation.png",
        desc: "Découvrez le déroulement de votre première visite et les étapes clés du bilan orthodontique.",
        link: "/premiere-consultation"
    },
    {
        id: 3,
        title: "Bagues et Appareils Multi-attaches",
        img: "/images/Bagues.png",
        desc: "Fonctionnement des bagues, conseils d’entretien et bonnes pratiques pour un traitement efficace.",
        link: "/bagues"
    },
    {
        id: 4,
        title: "Appareils Amovibles",
        img: "/images/Appareils_Amovible.png",
        desc: "Guide pratique sur le port des appareils amovibles et comment maintenir une hygiène optimale.",
        link: "/appareils-amovibles"
    },
    {
        id: 5,
        title: "Techniques d’appareils fixes",
        img: "/images/Appareils_Fixe.png",
        desc: "Tout savoir sur les appareils fixes : pose, ajustements et soins recommandés.",
        link: "/appareils-fixes"
    },
    {
        id: 6,
        title: "Objectifs d’un traitement orthodontique",
        img: "/images/Orthodontie_Goal.png",
        desc: "Pourquoi suivre un traitement orthodontique et quels bénéfices attendre à court et long terme.",
        link: "/objectif-traitement"
    },
    {
        id: 7,
        title: "Urgences et incidents courants",
        img: "/images/Orthodontie_Emergency.png",
        desc: "Que faire en cas de problème avec votre appareil et comment gérer les urgences orthodontiques.",
        link: "/urgences-et-incident"
    },
    {
        id: 8,
        title: "Les différentes techniques de traitement",
        img: "/images/Orthodontie_Technique.png",
        desc: "Aperçu des techniques orthodontiques modernes adaptées à chaque profil de patient.",
        link: "/technique-traitement"
    }
];
function Conseils() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$Conseils$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].page,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Seo$2f$Seo$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                title: "Fiches conseils – Cabinet d'Orthodontie Dr Capucine Lucas",
                description: "Retrouvez les fiches conseils du Cabinet d'Orthodontie Dr Capucine Lucas : soins à domicile, hygiène bucco-dentaire, recommandations pour appareils orthodontiques.",
                jsonLd: {
                    "@context": "https://schema.org",
                    "@type": "CollectionPage",
                    name: "Fiches conseils – Cabinet d'Orthodontie Dr Capucine Lucas",
                    description: "Fiches conseils orthodontiques : hygiène, appareils, urgences, informations pratiques.",
                    url: "https://dr-capucine-lucas.vercel.app/conseils",
                    publisher: {
                        "@type": "Dentist",
                        name: "Dr Capucine Lucas",
                        address: {
                            "@type": "PostalAddress",
                            streetAddress: "4 Boulevard du Trieux",
                            addressLocality: "Pacé",
                            postalCode: "35740"
                        }
                    }
                }
            }, void 0, false, {
                fileName: "[project]/pages/conseils.jsx",
                lineNumber: 68,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$Conseils$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].title,
                children: "Fiches conseils"
            }, void 0, false, {
                fileName: "[project]/pages/conseils.jsx",
                lineNumber: 91,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$Conseils$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].container,
                children: fiches.map((fiche)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: fiche.link,
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$Conseils$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].card,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("img", {
                                src: fiche.img,
                                alt: fiche.title
                            }, void 0, false, {
                                fileName: "[project]/pages/conseils.jsx",
                                lineNumber: 100,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$Conseils$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].cardContent,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                        children: fiche.title
                                    }, void 0, false, {
                                        fileName: "[project]/pages/conseils.jsx",
                                        lineNumber: 103,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                        children: fiche.desc
                                    }, void 0, false, {
                                        fileName: "[project]/pages/conseils.jsx",
                                        lineNumber: 104,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/pages/conseils.jsx",
                                lineNumber: 102,
                                columnNumber: 13
                            }, this)
                        ]
                    }, fiche.id, true, {
                        fileName: "[project]/pages/conseils.jsx",
                        lineNumber: 95,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/pages/conseils.jsx",
                lineNumber: 93,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/pages/conseils.jsx",
        lineNumber: 67,
        columnNumber: 5
    }, this);
}
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__4e0a93e1._.js.map