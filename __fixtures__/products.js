import { CHANNEL } from '@lib/consts';
import { products } from '@queries/productQuery';
import { HOME_PAGE } from '@queries/home';

export const apolloMockProducts = {
	mocks: [
		{
			request: {
				query: HOME_PAGE,
				variables: {
					first: 20,
					channel: 'uk',
				},
			},
			result: {
				data: {
					shop: {
						__typename: 'Shop',
						name: 'Lush Gift Customisation Staging',
						description: '',
						headerText: 'Test Saleor - a sample shop!',
					},
					products: {
						__typename: 'ProductCountableConnection',
						edges: [
							{
								__typename: 'ProductCountableEdge',
								node: {
									__typename: 'Product',
									thumbnail: {
										__typename: 'Image',
										url:
											'https://twstg2.eu.saleor.cloud/media/__sized__/products/7_to_3_cleansing_wipe_2020-thumbnail-510x510.png',
										alt: '',
									},
									id: 'UHJvZHVjdDoxNzY=',
									name: '7 to 3',
									slug: '7-to-3',
									category: {
										__typename: 'Category',
										id: 'Q2F0ZWdvcnk6Mg==',
										slug: 'face',
									},
									pricing: {
										__typename: 'ProductPricingInfo',
										onSale: false,
										discount: null,
										priceRange: {
											__typename: 'TaxedMoneyRange',
											start: {
												__typename: 'TaxedMoney',
												gross: {
													__typename: 'Money',
													amount: 2,
													currency: 'GBP',
												},
											},
										},
									},
									collections: [
										{
											__typename: 'Collection',
											name: 'Skincare',
										},
									],
								},
							},
							{
								__typename: 'ProductCountableEdge',
								node: {
									__typename: 'Product',
									thumbnail: {
										__typename: 'Image',
										url:
											'https://twstg2.eu.saleor.cloud/media/__sized__/products/9_to_5_cleanser_2020-thumbnail-510x510.png',
										alt: '',
									},
									id: 'UHJvZHVjdDoxNDI=',
									name: '9 to 5',
									slug: '9-to-5',
									category: {
										__typename: 'Category',
										id: 'Q2F0ZWdvcnk6Mg==',
										slug: 'face',
									},
									pricing: {
										__typename: 'ProductPricingInfo',
										onSale: false,
										discount: null,
										priceRange: {
											__typename: 'TaxedMoneyRange',
											start: {
												__typename: 'TaxedMoney',
												gross: {
													__typename: 'Money',
													amount: 7,
													currency: 'GBP',
												},
											},
										},
									},
									collections: [
										{
											__typename: 'Collection',
											name: 'Skincare',
										},
									],
								},
							},
							{
								__typename: 'ProductCountableEdge',
								node: {
									__typename: 'Product',
									thumbnail: {
										__typename: 'Image',
										url:
											'https://twstg2.eu.saleor.cloud/media/__sized__/products/angels_on_bare_skin_fresh_cleanser_2020-thumbnail-510x510.png',
										alt: '',
									},
									id: 'UHJvZHVjdDo2Mw==',
									name: 'Angels on Bare Skin',
									slug: 'angels-on-bare-skin',
									category: {
										__typename: 'Category',
										id: 'Q2F0ZWdvcnk6Mg==',
										slug: 'face',
									},
									pricing: {
										__typename: 'ProductPricingInfo',
										onSale: false,
										discount: null,
										priceRange: {
											__typename: 'TaxedMoneyRange',
											start: {
												__typename: 'TaxedMoney',
												gross: {
													__typename: 'Money',
													amount: 9,
													currency: 'GBP',
												},
											},
										},
									},
									collections: [
										{
											__typename: 'Collection',
											name: 'Skincare',
										},
									],
								},
							},
							{
								__typename: 'ProductCountableEdge',
								node: {
									__typename: 'Product',
									thumbnail: {
										__typename: 'Image',
										url:
											'https://twstg2.eu.saleor.cloud/media/__sized__/products/3978-removebg-thumbnail-510x510.png',
										alt: '',
									},
									id: 'UHJvZHVjdDoxODU=',
									name: 'Aqua Marina',
									slug: 'aqua-marina',
									category: {
										__typename: 'Category',
										id: 'Q2F0ZWdvcnk6Mg==',
										slug: 'face',
									},
									pricing: {
										__typename: 'ProductPricingInfo',
										onSale: false,
										discount: null,
										priceRange: {
											__typename: 'TaxedMoneyRange',
											start: {
												__typename: 'TaxedMoney',
												gross: {
													__typename: 'Money',
													amount: 9,
													currency: 'GBP',
												},
											},
										},
									},
									collections: [],
								},
							},
							{
								__typename: 'ProductCountableEdge',
								node: {
									__typename: 'Product',
									thumbnail: {
										__typename: 'Image',
										url:
											'https://twstg2.eu.saleor.cloud/media/__sized__/products/argan_naked_facial_oil_2020-thumbnail-510x510.png',
										alt: '',
									},
									id: 'UHJvZHVjdDoxNzU=',
									name: 'Argan',
									slug: 'argan',
									category: {
										__typename: 'Category',
										id: 'Q2F0ZWdvcnk6Mg==',
										slug: 'face',
									},
									pricing: {
										__typename: 'ProductPricingInfo',
										onSale: false,
										discount: null,
										priceRange: {
											__typename: 'TaxedMoneyRange',
											start: {
												__typename: 'TaxedMoney',
												gross: {
													__typename: 'Money',
													amount: 10,
													currency: 'GBP',
												},
											},
										},
									},
									collections: [
										{
											__typename: 'Collection',
											name: 'Skincare',
										},
									],
								},
							},
						],
					},
					category: {
						__typename: 'Category',
						backgroundImage: {
							__typename: 'Image',
							url:
								'https://twstg2.eu.saleor.cloud/media/category-backgrounds/soap_banner_2020_02_2.jpg',
						},
					},
				},
			},
		},
		{
			request: {
				query: HOME_PAGE,
				variables: {
					first: 20,
					channel: 'uk',
					catId: 'Q2F0ZWdvcnk6Nw==',
					filter: { categories: 'Q2F0ZWdvcnk6Mg==' },
				},
			},
			result: {
				data: {
					shop: {
						__typename: 'Shop',
						name: 'Lush Gift Customisation Staging',
						description: '',
						headerText: 'Test Saleor - a sample shop!',
					},
					products: {
						__typename: 'ProductCountableConnection',
						edges: [
							{
								__typename: 'ProductCountableEdge',
								node: {
									__typename: 'Product',
									thumbnail: {
										__typename: 'Image',
										url:
											'https://twstg2.eu.saleor.cloud/media/__sized__/products/7_to_3_cleansing_wipe_2020-thumbnail-510x510.png',
										alt: '',
									},
									id: 'UHJvZHVjdDoxNzY=',
									name: '7 to 3',
									slug: '7-to-3',
									category: {
										__typename: 'Category',
										id: 'Q2F0ZWdvcnk6Mg==',
										slug: 'face',
									},
									pricing: {
										__typename: 'ProductPricingInfo',
										onSale: false,
										discount: null,
										priceRange: {
											__typename: 'TaxedMoneyRange',
											start: {
												__typename: 'TaxedMoney',
												gross: {
													__typename: 'Money',
													amount: 2,
													currency: 'GBP',
												},
											},
										},
									},
									collections: [
										{
											__typename: 'Collection',
											name: 'Skincare',
										},
									],
								},
							},
							{
								__typename: 'ProductCountableEdge',
								node: {
									__typename: 'Product',
									thumbnail: {
										__typename: 'Image',
										url:
											'https://twstg2.eu.saleor.cloud/media/__sized__/products/9_to_5_cleanser_2020-thumbnail-510x510.png',
										alt: '',
									},
									id: 'UHJvZHVjdDoxNDI=',
									name: '9 to 5',
									slug: '9-to-5',
									category: {
										__typename: 'Category',
										id: 'Q2F0ZWdvcnk6Mg==',
										slug: 'face',
									},
									pricing: {
										__typename: 'ProductPricingInfo',
										onSale: false,
										discount: null,
										priceRange: {
											__typename: 'TaxedMoneyRange',
											start: {
												__typename: 'TaxedMoney',
												gross: {
													__typename: 'Money',
													amount: 7,
													currency: 'GBP',
												},
											},
										},
									},
									collections: [
										{
											__typename: 'Collection',
											name: 'Skincare',
										},
									],
								},
							},
							{
								__typename: 'ProductCountableEdge',
								node: {
									__typename: 'Product',
									thumbnail: {
										__typename: 'Image',
										url:
											'https://twstg2.eu.saleor.cloud/media/__sized__/products/angels_on_bare_skin_fresh_cleanser_2020-thumbnail-510x510.png',
										alt: '',
									},
									id: 'UHJvZHVjdDo2Mw==',
									name: 'Angels on Bare Skin',
									slug: 'angels-on-bare-skin',
									category: {
										__typename: 'Category',
										id: 'Q2F0ZWdvcnk6Mg==',
										slug: 'face',
									},
									pricing: {
										__typename: 'ProductPricingInfo',
										onSale: false,
										discount: null,
										priceRange: {
											__typename: 'TaxedMoneyRange',
											start: {
												__typename: 'TaxedMoney',
												gross: {
													__typename: 'Money',
													amount: 9,
													currency: 'GBP',
												},
											},
										},
									},
									collections: [
										{
											__typename: 'Collection',
											name: 'Skincare',
										},
									],
								},
							},
							{
								__typename: 'ProductCountableEdge',
								node: {
									__typename: 'Product',
									thumbnail: {
										__typename: 'Image',
										url:
											'https://twstg2.eu.saleor.cloud/media/__sized__/products/3978-removebg-thumbnail-510x510.png',
										alt: '',
									},
									id: 'UHJvZHVjdDoxODU=',
									name: 'Aqua Marina',
									slug: 'aqua-marina',
									category: {
										__typename: 'Category',
										id: 'Q2F0ZWdvcnk6Mg==',
										slug: 'face',
									},
									pricing: {
										__typename: 'ProductPricingInfo',
										onSale: false,
										discount: null,
										priceRange: {
											__typename: 'TaxedMoneyRange',
											start: {
												__typename: 'TaxedMoney',
												gross: {
													__typename: 'Money',
													amount: 9,
													currency: 'GBP',
												},
											},
										},
									},
									collections: [],
								},
							},
							{
								__typename: 'ProductCountableEdge',
								node: {
									__typename: 'Product',
									thumbnail: {
										__typename: 'Image',
										url:
											'https://twstg2.eu.saleor.cloud/media/__sized__/products/argan_naked_facial_oil_2020-thumbnail-510x510.png',
										alt: '',
									},
									id: 'UHJvZHVjdDoxNzU=',
									name: 'Argan',
									slug: 'argan',
									category: {
										__typename: 'Category',
										id: 'Q2F0ZWdvcnk6Mg==',
										slug: 'face',
									},
									pricing: {
										__typename: 'ProductPricingInfo',
										onSale: false,
										discount: null,
										priceRange: {
											__typename: 'TaxedMoneyRange',
											start: {
												__typename: 'TaxedMoney',
												gross: {
													__typename: 'Money',
													amount: 10,
													currency: 'GBP',
												},
											},
										},
									},
									collections: [
										{
											__typename: 'Collection',
											name: 'Skincare',
										},
									],
								},
							},
						],
					},
					category: {
						__typename: 'Category',
						backgroundImage: {
							__typename: 'Image',
							url:
								'https://twstg2.eu.saleor.cloud/media/category-backgrounds/soap_banner_2020_02_2.jpg',
						},
					},
				},
			},
		},
	],
};
