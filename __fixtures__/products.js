import { CHANNEL } from '@lib/consts';
import { products } from '@queries/productQuery';

export const apolloMockProducts = {
	mocks: [
		{
			request: {
				query: products,
				variables: {
					first: 5,
					channel: CHANNEL,
				},
			},
			result: {
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
										'https://twstg2.eu.saleor.cloud/media/__sized__/products/1000_kisses_deep_solid_perfume_2020-thumbnail-510x510.png',
									alt: '',
								},
								id: 'UHJvZHVjdDoyNTM=',
								name: '1000 Kisses Deep',
								slug: '1000-kisses-deep',
								category: {
									__typename: 'Category',
									slug: 'solid-perfume',
								},
								pricing: {
									__typename: 'ProductPricingInfo',
									priceRange: {
										__typename: 'TaxedMoneyRange',
										start: {
											__typename: 'TaxedMoney',
											net: {
												__typename: 'Money',
												amount: 10,
											},
										},
									},
								},
							},
						},
						{
							__typename: 'ProductCountableEdge',
							node: {
								__typename: 'Product',
								thumbnail: {
									__typename: 'Image',
									url:
										'https://twstg2.eu.saleor.cloud/media/__sized__/products/1000_kisses_deep_washcard_2020-thumbnail-510x510.png',
									alt: '',
								},
								id: 'UHJvZHVjdDoyNzM=',
								name: '1000 Kisses Deep',
								slug: '1000-kisses-deep-2',
								category: {
									__typename: 'Category',
									slug: 'washcards',
								},
								pricing: {
									__typename: 'ProductPricingInfo',
									priceRange: {
										__typename: 'TaxedMoneyRange',
										start: {
											__typename: 'TaxedMoney',
											net: {
												__typename: 'Money',
												amount: 2,
											},
										},
									},
								},
							},
						},
						{
							__typename: 'ProductCountableEdge',
							node: {
								__typename: 'Product',
								thumbnail: {
									__typename: 'Image',
									url:
										'https://twstg2.eu.saleor.cloud/media/__sized__/products/12_days_of_christmas_pr_gift_2020-thumbnail-510x510.png',
									alt: '',
								},
								id: 'UHJvZHVjdDozODE=',
								name: '12 Days of Christmas',
								slug: '12-days-of-christmas',
								category: {
									__typename: 'Category',
									slug: 'gifts',
								},
								pricing: {
									__typename: 'ProductPricingInfo',
									priceRange: {
										__typename: 'TaxedMoneyRange',
										start: {
											__typename: 'TaxedMoney',
											net: {
												__typename: 'Money',
												amount: 75,
											},
										},
									},
								},
							},
						},
						{
							__typename: 'ProductCountableEdge',
							node: {
								__typename: 'Product',
								thumbnail: {
									__typename: 'Image',
									url:
										'https://twstg2.eu.saleor.cloud/media/__sized__/products/13_unlucky_for_dirt_soap_2020-thumbnail-510x510.png',
									alt: '',
								},
								id: 'UHJvZHVjdDo5MQ==',
								name: '13 Soap Unlucky for Dirt',
								slug: '13-soap-unlucky-for-dirt',
								category: {
									__typename: 'Category',
									slug: 'soap-2',
								},
								pricing: {
									__typename: 'ProductPricingInfo',
									priceRange: {
										__typename: 'TaxedMoneyRange',
										start: {
											__typename: 'TaxedMoney',
											net: {
												__typename: 'Money',
												amount: 6,
											},
										},
									},
								},
							},
						},
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
									slug: 'face',
								},
								pricing: {
									__typename: 'ProductPricingInfo',
									priceRange: {
										__typename: 'TaxedMoneyRange',
										start: {
											__typename: 'TaxedMoney',
											net: {
												__typename: 'Money',
												amount: 2,
											},
										},
									},
								},
							},
						},
					],
				},
			},
		},
	],
};
