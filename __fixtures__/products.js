import { CHANNEL } from "@lib/consts";
import { products } from "@queries/productQuery";

export const apolloMockProducts = {
	mocks: [
		{
			request: {
				query: products,
				variables: {
					first: 20,
					channel: CHANNEL,
					catId: "Q2F0ZWdvcnk6Nw==",
					filter: { categories: "Q2F0ZWdvcnk6Mg==" },
				},
			},
			result: {
				data: {
					products: {
						__typename: "ProductCountableConnection",
						edges: [
							{
								__typename: "ProductCountableEdge",
								node: {
									__typename: "Product",
									thumbnail: {
										__typename: "Image",
										url:
											"https://twstg2.eu.saleor.cloud/media/__sized__/products/1000_kisses_deep_solid_perfume_2020-thumbnail-510x510.png",
										alt: "",
									},
									id: "UHJvZHVjdDoyNTM=",
									name: "1000 Kisses Deep",
									slug: "1000-kisses-deep",
									category: {
										__typename: "Category",
										id: "Q2F0ZWdvcnk6MTk=",
										slug: "solid-perfume",
									},
									pricing: {
										__typename: "ProductPricingInfo",
										onSale: false,
										discount: null,
										priceRange: {
											__typename: "TaxedMoneyRange",
											start: {
												__typename: "TaxedMoney",
												gross: {
													__typename: "Money",
													amount: 10,
													currency: "GBP",
												},
											},
										},
									},
									collections: [
										{
											__typename: "Collection",
											name: "Fragrance",
										},
									],
								},
							},
							{
								__typename: "ProductCountableEdge",
								node: {
									__typename: "Product",
									thumbnail: {
										__typename: "Image",
										url:
											"https://twstg2.eu.saleor.cloud/media/__sized__/products/1000_kisses_deep_washcard_2020-thumbnail-510x510.png",
										alt: "",
									},
									id: "UHJvZHVjdDoyNzM=",
									name: "1000 Kisses Deep",
									slug: "1000-kisses-deep-2",
									category: {
										__typename: "Category",
										id: "Q2F0ZWdvcnk6MjA=",
										slug: "washcards",
									},
									pricing: {
										__typename: "ProductPricingInfo",
										onSale: false,
										discount: null,
										priceRange: {
											__typename: "TaxedMoneyRange",
											start: {
												__typename: "TaxedMoney",
												gross: {
													__typename: "Money",
													amount: 2,
													currency: "GBP",
												},
											},
										},
									},
									collections: [
										{
											__typename: "Collection",
											name: "Fragrance",
										},
										{
											__typename: "Collection",
											name: "Shower",
										},
										{
											__typename: "Collection",
											name:
												"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.  Donec nec justo eget felis felis eget felis fe",
										},
									],
								},
							},
							{
								__typename: "ProductCountableEdge",
								node: {
									__typename: "Product",
									thumbnail: {
										__typename: "Image",
										url:
											"https://twstg2.eu.saleor.cloud/media/__sized__/products/12_days_of_christmas_pr_gift_2020-thumbnail-510x510.png",
										alt: "",
									},
									id: "UHJvZHVjdDozODE=",
									name: "12 Days of Christmas",
									slug: "12-days-of-christmas",
									category: {
										__typename: "Category",
										id: "Q2F0ZWdvcnk6MjE=",
										slug: "gifts",
									},
									pricing: {
										__typename: "ProductPricingInfo",
										onSale: false,
										discount: null,
										priceRange: {
											__typename: "TaxedMoneyRange",
											start: {
												__typename: "TaxedMoney",
												gross: {
													__typename: "Money",
													amount: 75,
													currency: "GBP",
												},
											},
										},
									},
									collections: [
										{
											__typename: "Collection",
											name: "Christmas",
										},
										{
											__typename: "Collection",
											name: "Bestsellers",
										},
									],
								},
							},
							{
								__typename: "ProductCountableEdge",
								node: {
									__typename: "Product",
									thumbnail: {
										__typename: "Image",
										url:
											"https://twstg2.eu.saleor.cloud/media/__sized__/products/13_unlucky_for_dirt_soap_2020-thumbnail-510x510.png",
										alt: "",
									},
									id: "UHJvZHVjdDo5MQ==",
									name: "13 Soap Unlucky for Dirt",
									slug: "13-soap-unlucky-for-dirt",
									category: {
										__typename: "Category",
										id: "Q2F0ZWdvcnk6Nw==",
										slug: "soap-2",
									},
									pricing: {
										__typename: "ProductPricingInfo",
										onSale: false,
										discount: null,
										priceRange: {
											__typename: "TaxedMoneyRange",
											start: {
												__typename: "TaxedMoney",
												gross: {
													__typename: "Money",
													amount: 6,
													currency: "GBP",
												},
											},
										},
									},
									collections: [
										{
											__typename: "Collection",
											name: "Bath",
										},
										{
											__typename: "Collection",
											name: "Shower",
										},
									],
								},
							},
							{
								__typename: "ProductCountableEdge",
								node: {
									__typename: "Product",
									thumbnail: {
										__typename: "Image",
										url:
											"https://twstg2.eu.saleor.cloud/media/__sized__/products/7_to_3_cleansing_wipe_2020-thumbnail-510x510.png",
										alt: "",
									},
									id: "UHJvZHVjdDoxNzY=",
									name: "7 to 3",
									slug: "7-to-3",
									category: {
										__typename: "Category",
										id: "Q2F0ZWdvcnk6Mg==",
										slug: "face",
									},
									pricing: {
										__typename: "ProductPricingInfo",
										onSale: false,
										discount: null,
										priceRange: {
											__typename: "TaxedMoneyRange",
											start: {
												__typename: "TaxedMoney",
												gross: {
													__typename: "Money",
													amount: 2,
													currency: "GBP",
												},
											},
										},
									},
									collections: [
										{
											__typename: "Collection",
											name: "Skincare",
										},
									],
								},
							},
							{
								__typename: "ProductCountableEdge",
								node: {
									__typename: "Product",
									thumbnail: {
										__typename: "Image",
										url:
											"https://twstg2.eu.saleor.cloud/media/__sized__/products/9_to_5_cleanser_2020-thumbnail-510x510.png",
										alt: "",
									},
									id: "UHJvZHVjdDoxNDI=",
									name: "9 to 5",
									slug: "9-to-5",
									category: {
										__typename: "Category",
										id: "Q2F0ZWdvcnk6Mg==",
										slug: "face",
									},
									pricing: {
										__typename: "ProductPricingInfo",
										onSale: false,
										discount: null,
										priceRange: {
											__typename: "TaxedMoneyRange",
											start: {
												__typename: "TaxedMoney",
												gross: {
													__typename: "Money",
													amount: 7,
													currency: "GBP",
												},
											},
										},
									},
									collections: [
										{
											__typename: "Collection",
											name: "Skincare",
										},
									],
								},
							},
							{
								__typename: "ProductCountableEdge",
								node: {
									__typename: "Product",
									thumbnail: {
										__typename: "Image",
										url:
											"https://twstg2.eu.saleor.cloud/media/__sized__/products/abracadabra_bubble_bar_2020-thumbnail-510x510.png",
										alt: "",
									},
									id: "UHJvZHVjdDoxMTM=",
									name: "Abracadabra",
									slug: "abracadabra",
									category: {
										__typename: "Category",
										id: "Q2F0ZWdvcnk6MTA=",
										slug: "bubble-bars",
									},
									pricing: {
										__typename: "ProductPricingInfo",
										onSale: false,
										discount: null,
										priceRange: {
											__typename: "TaxedMoneyRange",
											start: {
												__typename: "TaxedMoney",
												gross: {
													__typename: "Money",
													amount: 3.95,
													currency: "GBP",
												},
											},
										},
									},
									collections: [
										{
											__typename: "Collection",
											name: "Bath",
										},
									],
								},
							},
							{
								__typename: "ProductCountableEdge",
								node: {
									__typename: "Product",
									thumbnail: {
										__typename: "Image",
										url:
											"https://twstg2.eu.saleor.cloud/media/__sized__/products/DQ2EXRTGYZDQZJGOPKRBABFO2Y-thumbnail-510x510-70.jpg",
										alt: "",
									},
									id: "UHJvZHVjdDo0Mzc=",
									name: "Algolia Test UK Bars",
									slug: "algolia-test-uk-bars",
									category: {
										__typename: "Category",
										id: "Q2F0ZWdvcnk6MTA=",
										slug: "bubble-bars",
									},
									pricing: {
										__typename: "ProductPricingInfo",
										onSale: false,
										discount: null,
										priceRange: {
											__typename: "TaxedMoneyRange",
											start: {
												__typename: "TaxedMoney",
												gross: {
													__typename: "Money",
													amount: 7.77,
													currency: "GBP",
												},
											},
										},
									},
									collections: [
										{
											__typename: "Collection",
											name: "Bestsellers",
										},
										{
											__typename: "Collection",
											name: "Bath",
										},
									],
								},
							},
							{
								__typename: "ProductCountableEdge",
								node: {
									__typename: "Product",
									thumbnail: {
										__typename: "Image",
										url:
											"https://twstg2.eu.saleor.cloud/media/__sized__/products/soaps-thumbnail-510x510-70.jpg",
										alt: "",
									},
									id: "UHJvZHVjdDo0Mzg=",
									name: "Algolia Test UK Bars 2",
									slug: "algolia-test-uk-bars-2",
									category: {
										__typename: "Category",
										id: "Q2F0ZWdvcnk6MTY=",
										slug: "massage-bars",
									},
									pricing: {
										__typename: "ProductPricingInfo",
										onSale: false,
										discount: null,
										priceRange: {
											__typename: "TaxedMoneyRange",
											start: {
												__typename: "TaxedMoney",
												gross: {
													__typename: "Money",
													amount: 5.87,
													currency: "GBP",
												},
											},
										},
									},
									collections: [
										{
											__typename: "Collection",
											name: "Bestsellers",
										},
										{
											__typename: "Collection",
											name: "Bath",
										},
										{
											__typename: "Collection",
											name: "Body Care",
										},
									],
								},
							},
							{
								__typename: "ProductCountableEdge",
								node: {
									__typename: "Product",
									thumbnail: {
										__typename: "Image",
										url:
											"https://twstg2.eu.saleor.cloud/media/__sized__/products/american_cream_conditioner_2020-thumbnail-510x510.png",
										alt: "",
									},
									id: "UHJvZHVjdDo1Ng==",
									name: "American Cream",
									slug: "american-cream",
									category: {
										__typename: "Category",
										id: "Q2F0ZWdvcnk6MTM=",
										slug: "conditioners",
									},
									pricing: {
										__typename: "ProductPricingInfo",
										onSale: false,
										discount: null,
										priceRange: {
											__typename: "TaxedMoneyRange",
											start: {
												__typename: "TaxedMoney",
												gross: {
													__typename: "Money",
													amount: 7,
													currency: "GBP",
												},
											},
										},
									},
									collections: [
										{
											__typename: "Collection",
											name: "Hair Care",
										},
									],
								},
							},
							{
								__typename: "ProductCountableEdge",
								node: {
									__typename: "Product",
									thumbnail: {
										__typename: "Image",
										url:
											"https://twstg2.eu.saleor.cloud/media/__sized__/products/web_american_cream_shower_gel_spring_2019-thumbnail-510x510-70.jpg",
										alt: "",
									},
									id: "UHJvZHVjdDoxMzg=",
									name: "American Cream",
									slug: "american-cream-2",
									category: {
										__typename: "Category",
										id: "Q2F0ZWdvcnk6OQ==",
										slug: "shower",
									},
									pricing: {
										__typename: "ProductPricingInfo",
										onSale: false,
										discount: null,
										priceRange: {
											__typename: "TaxedMoneyRange",
											start: {
												__typename: "TaxedMoney",
												gross: {
													__typename: "Money",
													amount: 7,
													currency: "GBP",
												},
											},
										},
									},
									collections: [
										{
											__typename: "Collection",
											name: "Shower",
										},
									],
								},
							},
							{
								__typename: "ProductCountableEdge",
								node: {
									__typename: "Product",
									thumbnail: {
										__typename: "Image",
										url:
											"https://twstg2.eu.saleor.cloud/media/__sized__/products/american_cream_pressed_conditioner_2020-thumbnail-510x510.png",
										alt: "",
									},
									id: "UHJvZHVjdDoyMTk=",
									name: "American Cream",
									slug: "american-cream-3",
									category: {
										__typename: "Category",
										id: "Q2F0ZWdvcnk6Mw==",
										slug: "hair",
									},
									pricing: {
										__typename: "ProductPricingInfo",
										onSale: false,
										discount: null,
										priceRange: {
											__typename: "TaxedMoneyRange",
											start: {
												__typename: "TaxedMoney",
												gross: {
													__typename: "Money",
													amount: 9,
													currency: "GBP",
												},
											},
										},
									},
									collections: [
										{
											__typename: "Collection",
											name: "Hair Care",
										},
									],
								},
							},
							{
								__typename: "ProductCountableEdge",
								node: {
									__typename: "Product",
									thumbnail: {
										__typename: "Image",
										url:
											"https://twstg2.eu.saleor.cloud/media/__sized__/products/american_cream_solid_perfume_2020-thumbnail-510x510.png",
										alt: "",
									},
									id: "UHJvZHVjdDoyNTg=",
									name: "American Cream",
									slug: "american-cream-4",
									category: {
										__typename: "Category",
										id: "Q2F0ZWdvcnk6MTk=",
										slug: "solid-perfume",
									},
									pricing: {
										__typename: "ProductPricingInfo",
										onSale: false,
										discount: null,
										priceRange: {
											__typename: "TaxedMoneyRange",
											start: {
												__typename: "TaxedMoney",
												gross: {
													__typename: "Money",
													amount: 10,
													currency: "GBP",
												},
											},
										},
									},
									collections: [
										{
											__typename: "Collection",
											name: "Fragrance",
										},
									],
								},
							},
							{
								__typename: "ProductCountableEdge",
								node: {
									__typename: "Product",
									thumbnail: {
										__typename: "Image",
										url:
											"https://twstg2.eu.saleor.cloud/media/__sized__/products/american_cream_washcard_2020-thumbnail-510x510.png",
										alt: "",
									},
									id: "UHJvZHVjdDoyNzc=",
									name: "American Cream",
									slug: "american-cream-5",
									category: {
										__typename: "Category",
										id: "Q2F0ZWdvcnk6MjA=",
										slug: "washcards",
									},
									pricing: {
										__typename: "ProductPricingInfo",
										onSale: false,
										discount: null,
										priceRange: {
											__typename: "TaxedMoneyRange",
											start: {
												__typename: "TaxedMoney",
												gross: {
													__typename: "Money",
													amount: 2,
													currency: "GBP",
												},
											},
										},
									},
									collections: [
										{
											__typename: "Collection",
											name: "Fragrance",
										},
										{
											__typename: "Collection",
											name: "Shower",
										},
									],
								},
							},
							{
								__typename: "ProductCountableEdge",
								node: {
									__typename: "Product",
									thumbnail: {
										__typename: "Image",
										url:
											"https://twstg2.eu.saleor.cloud/media/__sized__/products/angels_delight_bath_bomb_2020-thumbnail-510x510.png",
										alt: "",
									},
									id: "UHJvZHVjdDozMDU=",
									name: "Angels Delight",
									slug: "angels-delight",
									category: {
										__typename: "Category",
										id: "Q2F0ZWdvcnk6OA==",
										slug: "bath-bombs",
									},
									pricing: {
										__typename: "ProductPricingInfo",
										onSale: false,
										discount: null,
										priceRange: {
											__typename: "TaxedMoneyRange",
											start: {
												__typename: "TaxedMoney",
												gross: {
													__typename: "Money",
													amount: 3.5,
													currency: "GBP",
												},
											},
										},
									},
									collections: [
										{
											__typename: "Collection",
											name: "Bath",
										},
										{
											__typename: "Collection",
											name: "Christmas",
										},
									],
								},
							},
							{
								__typename: "ProductCountableEdge",
								node: {
									__typename: "Product",
									thumbnail: {
										__typename: "Image",
										url:
											"https://twstg2.eu.saleor.cloud/media/__sized__/products/angels_on_bare_skin_fresh_cleanser_2020-thumbnail-510x510.png",
										alt: "",
									},
									id: "UHJvZHVjdDo2Mw==",
									name: "Angels on Bare Skin",
									slug: "angels-on-bare-skin",
									category: {
										__typename: "Category",
										id: "Q2F0ZWdvcnk6Mg==",
										slug: "face",
									},
									pricing: {
										__typename: "ProductPricingInfo",
										onSale: false,
										discount: null,
										priceRange: {
											__typename: "TaxedMoneyRange",
											start: {
												__typename: "TaxedMoney",
												gross: {
													__typename: "Money",
													amount: 9,
													currency: "GBP",
												},
											},
										},
									},
									collections: [
										{
											__typename: "Collection",
											name: "Skincare",
										},
									],
								},
							},
							{
								__typename: "ProductCountableEdge",
								node: {
									__typename: "Product",
									thumbnail: {
										__typename: "Image",
										url:
											"https://twstg2.eu.saleor.cloud/media/__sized__/products/3978-removebg-thumbnail-510x510.png",
										alt: "",
									},
									id: "UHJvZHVjdDoxODU=",
									name: "Aqua Marina",
									slug: "aqua-marina",
									category: {
										__typename: "Category",
										id: "Q2F0ZWdvcnk6Mg==",
										slug: "face",
									},
									pricing: {
										__typename: "ProductPricingInfo",
										onSale: false,
										discount: null,
										priceRange: {
											__typename: "TaxedMoneyRange",
											start: {
												__typename: "TaxedMoney",
												gross: {
													__typename: "Money",
													amount: 9,
													currency: "GBP",
												},
											},
										},
									},
									collections: [],
								},
							},
							{
								__typename: "ProductCountableEdge",
								node: {
									__typename: "Product",
									thumbnail: {
										__typename: "Image",
										url:
											"https://twstg2.eu.saleor.cloud/media/__sized__/products/argan_naked_facial_oil_2020-thumbnail-510x510.png",
										alt: "",
									},
									id: "UHJvZHVjdDoxNzU=",
									name: "Argan",
									slug: "argan",
									category: {
										__typename: "Category",
										id: "Q2F0ZWdvcnk6Mg==",
										slug: "face",
									},
									pricing: {
										__typename: "ProductPricingInfo",
										onSale: false,
										discount: null,
										priceRange: {
											__typename: "TaxedMoneyRange",
											start: {
												__typename: "TaxedMoney",
												gross: {
													__typename: "Money",
													amount: 10,
													currency: "GBP",
												},
											},
										},
									},
									collections: [
										{
											__typename: "Collection",
											name: "Skincare",
										},
									],
								},
							},
							{
								__typename: "ProductCountableEdge",
								node: {
									__typename: "Product",
									thumbnail: {
										__typename: "Image",
										url:
											"https://twstg2.eu.saleor.cloud/media/__sized__/products/aromaco_solid_deodorant_2020-thumbnail-510x510.png",
										alt: "",
									},
									id: "UHJvZHVjdDo1OQ==",
									name: "Aromaco",
									slug: "aromaco",
									category: {
										__typename: "Category",
										id: "Q2F0ZWdvcnk6MTE=",
										slug: "hand-body",
									},
									pricing: {
										__typename: "ProductPricingInfo",
										onSale: false,
										discount: null,
										priceRange: {
											__typename: "TaxedMoneyRange",
											start: {
												__typename: "TaxedMoney",
												gross: {
													__typename: "Money",
													amount: 6.5,
													currency: "GBP",
												},
											},
										},
									},
									collections: [
										{
											__typename: "Collection",
											name: "Body Care",
										},
									],
								},
							},
							{
								__typename: "ProductCountableEdge",
								node: {
									__typename: "Product",
									thumbnail: {
										__typename: "Image",
										url:
											"https://twstg2.eu.saleor.cloud/media/__sized__/products/avobath_bath_bomb_2020-thumbnail-510x510.png",
										alt: "",
									},
									id: "UHJvZHVjdDo5OQ==",
									name: "Avobath",
									slug: "avobath",
									category: {
										__typename: "Category",
										id: "Q2F0ZWdvcnk6OA==",
										slug: "bath-bombs",
									},
									pricing: {
										__typename: "ProductPricingInfo",
										onSale: false,
										discount: null,
										priceRange: {
											__typename: "TaxedMoneyRange",
											start: {
												__typename: "TaxedMoney",
												gross: {
													__typename: "Money",
													amount: 3.95,
													currency: "GBP",
												},
											},
										},
									},
									collections: [
										{
											__typename: "Collection",
											name: "Bath",
										},
										{
											__typename: "Collection",
											name: "Halloween",
										},
									],
								},
							},
						],
					},
				},
			},
		},
	],
};
