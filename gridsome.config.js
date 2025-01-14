// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
    siteName: 'ThreeFold',

    pathPrefix: "threefold",
    plugins: [

        // Local models
        {
            use: '@gridsome/source-filesystem',
            options: {
                typeName: 'Card',
                path: './content/page/**/cards/**/*.md',
            }
        },

        {
            use: '@gridsome/source-filesystem',
            options: {
                typeName: 'Slide',
                path: './content/page/**/sliders/**/*.md',
            }
        },

        {
            use: '@gridsome/source-filesystem',
            options: {
                typeName: 'Contact',
                path: './content/page/**/contactData/**/*.md',
            }
        },

        {
            use: '@gridsome/source-filesystem',
            options: {
                typeName: 'HowItWorks',
                path: './content/page/**/how_it_works/**/*.md',
            }
        },

        {
            use: '@gridsome/source-filesystem',
            options: {
                typeName: 'HowItWorks_2',
                path: './content/page/**/how_it_works_2/**/*.md',
            }
        },

        {
            use: '@gridsome/source-filesystem',
            options: {
                typeName: 'Header',
                path: './content/page/**/header/*.md',
            }
        },

        {
            use: '@gridsome/source-filesystem',
            options: {
                typeName: 'SolutionsHeader',
                path: './content/page/**/headerSolution/*.md',
            }
        },

        {
            use: '@gridsome/source-filesystem',
            options: {
                typeName: 'Product',
                path: './content/page/**/productData/**/*.md',
            }
        },
        {
            use: '@gridsome/source-filesystem',
            options: {
                typeName: 'ProductTitle',
                path: './content/page/**/productData/**/*.md',
            }
        },
        {
            use: '@gridsome/source-filesystem',
            options: {
                typeName: 'Features',
                path: './content/page/**/features/**/*.md',
            }
        },
        {
            use: '@gridsome/source-filesystem',
            options: {
                typeName: 'Features2',
                path: './content/page/**/features2/**/*.md',
            }
        },
        {
            use: '@gridsome/source-filesystem',
            options: {
                typeName: 'Logo',
                path: './content/page/**/logos/**/*.md',
            }
        },

        {
            use: '@gridsome/source-filesystem',
            options: {
                typeName: 'Cta',
                path: './content/page/**/cta/*.md',
            }
        },

        {
            use: '@gridsome/source-filesystem',
            options: {
                typeName: 'Cta',
                path: './content/page/**/cta2/*.md',
            }
        },

        {
            use: '@gridsome/source-filesystem',
            options: {
                typeName: 'Cta',
                path: './content/page/**/cta3/*.md',
            }
        },

        {
            use: '@gridsome/source-filesystem',
            options: {
                typeName: 'Cta',
                path: './content/page/**/cta4/*.md',
            }
        },

        {
            use: '@gridsome/source-filesystem',
            options: {
                typeName: 'Cta',
                path: './content/page/**/cta5/*.md',
            }
        },

        {
            use: '@gridsome/source-filesystem',
            options: {
                typeName: 'SignUp',
                path: './content/page/**/signup/*.md',
            }
        },
        {
            use: '@gridsome/source-filesystem',
            options: {
                typeName: 'About',
                path: './content/about/**/*.md',
            }
        },

        {
            use: '@gridsome/source-filesystem',
            options: {
                typeName: 'ComparisonMain',
                path: './content/page/**/comparison/main/main.md',
            }
        },

        {
            use: '@gridsome/source-filesystem',
            options: {
                typeName: 'Comparison',
                path: './content/page/**/comparison/**/*.md',
            }
        },

        {
            use: '@gridsome/source-filesystem',
            options: {
                typeName: 'Roadmap',
                path: './content/page/**/roadmap/*.md',
            }
        },

        {
            use: '@gridsome/source-filesystem',
            options: {
                typeName: 'PricingPlans',
                path: './content/page/**/pricing_plans/**/*.md',
            }
        },

        {
            use: '@gridsome/source-filesystem',
            options: {
                typeName: 'Plans',
                path: './content/page/**/withComparisonTable/**/*.md',
            }
        },

        {
            use: '@gridsome/source-filesystem',
            options: {
                typeName: 'BrandPanel',
                path: './content/page/**/brandPanel/*.md',
            }
        },

        {
            use: '@gridsome/source-filesystem',
            options: {
                typeName: 'BrandPanel2',
                path: './content/page/**/brandPanel2/*.md',
            }
        },

        {
            use: '@gridsome/source-filesystem',
            options: {
                typeName: 'InTheNews',
                path: './content/page/**/InTheNews/*.md',
            }
        },

        {
            use: '@gridsome/source-filesystem',
            options: {
                typeName: 'PartenershipsMain',
                path: './content/page/**/partenerships/main/*.md',
            }
        },

        {
            use: '@gridsome/source-filesystem',
            options: {
                typeName: 'Partenerships',
                path: './content/page/**/partenerships/**/*.md',
            }
        },

        {
            use: '@gridsome/source-filesystem',
            options: {
                typeName: 'VideoPanel',
                path: './content/page/**/videoPanel/*.md',
            }
        },
        {
            use: '@gridsome/source-filesystem',
            options: {
                typeName: 'Stats',
                path: './content/page/**/stats/*.md',
            }
        },

        {
            use: '@gridsome/source-filesystem',
            options: {
                typeName: 'Blogs',
                path: './content/page/**/blogs/**/*.md',
            }
        },

        {
            use: '@gridsome/source-filesystem',
            options: {
                typeName: 'BlogsMain',
                path: './content/page/**/blogs/main/*.md',
            }
        },

        {
            use: '@gridsome/source-filesystem',
            options: {
                typeName: 'FAQMain',
                path: './content/page/**/faq/main/*.md',
            }
        },

        {
            use: '@gridsome/source-filesystem',
            options: {
                typeName: 'FAQContent',
                path: './content/page/**/faq/**/*.md',
            }
        },

        {
            use: '@gridsome/source-filesystem',
            options: {
                typeName: 'MarkdownPage',
                path: './content/page/*/*.md',
                refs: {
                    cards: 'Card',
                    slides: 'Slide',
                    contactData: 'Contact',
                    header: 'Header',
                    headerSolution: 'SolutionsHeader',
                    howItWorks: 'HowItWorks',
                    howItWorksMain: 'HowItWorks',
                    productsMain: 'ProductTitle',
                    productData: 'Product',
                    appsMain: 'ProductTitle',
                    appData: 'Product',
                    featuresMain: 'Features',
                    features: 'Features',
                    featuresMain2: 'Features2',
                    features2: 'Features2',
                    logos: 'Logo',
                    cta: 'Cta',
                    cta2: 'Cta',
                    cta3: 'Cta',
                    cta4: 'Cta',
                    cta5: 'Cta',
                    signup: 'SignUp',
                    comparisonMain: 'ComparisonMain',
                    comparisonSecs: 'Comparison',
                    howItWorksMain_2: 'HowItWorks_2',
                    howItWorks_2: 'HowItWorks_2',
                    roadmap: 'Roadmap',
                    pricing_plansMain: 'PricingPlans',
                    pricingPlans: 'PricingPlans',
                    plans: 'Plans',
                    inTheNews: 'InTheNews',
                    brandPanel: 'BrandPanel',
                    brandPanel2: 'BrandPanel2',
                    allSlides: 'About',
                    partenershipsMain: 'PartenershipsMain',
                    partnerships: 'Partenerships',
                    stats: 'Stats',
                    videoPanel: 'VideoPanel',
                    blogs: 'Blogs',
                    BlogsMain: "BlogsMain",
                    faqMain: 'FAQMain',
                    faqContent: 'FAQContent'
                }
            }
        },

        {
            use: '@gridsome/source-filesystem',
            options: {
                typeName: 'Navigation',
                path: './content/navigation/navigation.md',
            }
        },

        {
            use: '@gridsome/source-filesystem',
            options: {
                typeName: 'Footer',
                path: './content/footer/footer.md',
            }
        },

        {
            use: '@gridsome/source-filesystem',
            options: {
                typeName: 'Person',
                path: './content/person/**/*.md',
                refs: {
                    tags: {
                        typeName: 'PersonTag',
                        create: true
                    },
                    memberships: {
                        typeName: 'Membership',
                        create: true
                    },
                    projects: 'Project'
                },
            }
        },
        {
            use: '@gridsome/source-filesystem',
            options: {
                typeName: 'Blog',
                path: './content/blog/**/*.md',
                templates: {
                    BlogPost: '/blog/post/:id'
                },
                refs: {
                    authors: 'Person',
                    tags: {
                        typeName: 'BlogTag',
                        create: true
                    },

                    category: {
                        typeName: 'BlogCategory',
                        create: true
                    }

                }
            }
        },

        {
            use: '@gridsome/source-filesystem',
            options: {
                typeName: 'News',
                path: './content/news/**/*.md',
                refs: {
                    authors: 'Person',
                    tags: {
                        typeName: 'NewsTag',
                        create: true
                    },

                    category: {
                        typeName: 'NewsCategory',
                        create: true
                    }
                }
            }
        },


        {
            use: '@gridsome/source-filesystem',
            options: {
                typeName: 'Project',
                path: './content/project/**/*.md',
                refs: {
                    authors: 'Person',
                    members: 'Person',

                    tags: {
                        typeName: 'ProjectTag',
                        create: true
                    }
                }
            }
        },

        // Tailwind
        {
            use: 'gridsome-plugin-tailwindcss',
            options: {
                tailwindConfig: './tailwind.config.js',
                purgeConfig: {
                    whitelist: ['svg-inline--fa', 'table', 'table-striped', 'table-bordered', 'table-hover', 'table-sm'],
                    whitelistPatterns: [/fa-$/, /blockquote$/, /code$/, /pre$/, /table$/, /table-$/]
                },
                presetEnvConfig: {},
                shouldPurge: false,
                shouldImport: true,
                shouldTimeTravel: true,
                shouldPurgeUnusedKeyframes: true,
            }
        },
        {
            use: 'gridsome-plugin-matomo',
            options: {
                host: 'https://analytics.threefold.io',
                siteId: 5
            }
        }
    ],
    chainWebpack: config => {
        config.resolve.alias.set('@images', '@/assets/images')
    },
    templates: {
        MarkdownPage: [{
            path: '/:id',
            component: '~/templates/MarkdownPage.vue',

        }],

        BlogTag: [{
            path: '/blog/tags/:id',
            component: '~/templates/Tag.vue'
        }],

        NewsTag: [{
            path: '/news/tags/:id',
            component: '~/templates/Tag.vue'
        }],

        ProjectTag: [{
            path: '/partners/tags/:id',
            component: '~/templates/Tag.vue'
        }],

        Membership: [{
            path: '/people/memberships/:id',
            component: '~/templates/Membership.vue'
        }],

        Blog: [{
            path: '/blog/post/:id',
            component: '~/templates/BlogPost.vue'
        }],

        News: [{
            path: '/news/post/:id',
            component: '~/templates/NewsPost.vue'
        }],

        Person: [{
            path: '/people/:id',
            component: '~/templates/Person.vue'
        }],
        PersonTag: [{
            path: '/people/tags/:id',
            component: '~/templates/Tag.vue'
        }],

        Project: [{
            path: '/partners/:id',
            component: '~/templates/Project.vue'
        }],
    },

    transformers: {
        //Add markdown support to all file-system sources
        remark: {
            externalLinksTarget: '_blank',
            externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
            anchorClassName: 'icon icon-link',

            pathPrefix: "threefold",
            plugins: [
                ['gridsome-plugin-remark-prismjs-all', {
                    highlightClassName: "gridsome-highlight",
                    codeTitleClassName: "gridsome-code-title",
                    classPrefix: 'language-',
                    aliases: {},
                    noInlineHighlight: false,
                    showLineNumbers: false, //  `require("prismjs/plugins/line-numbers/prism-line-numbers.css");`
                    languageExtensions: [],
                    prompt: { //  `require("prismjs/plugins/command-line/prism-command-line.css");`
                        user: `root`,
                        host: `localhost`,
                        global: false,
                    }
                },
                    // '@noxify/gridsome-remark-table-align', ['@noxify/gridsome-remark-classes', {
                    //     'table': 'table table-striped',
                    //     'tableCell[align=center]': 'text-center',
                    //     'tableCell[align=right]': 'text-right'
                    // }
                ]
            ]
        }
    }
}