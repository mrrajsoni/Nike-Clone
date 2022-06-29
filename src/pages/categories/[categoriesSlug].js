import Head from 'next/head'

import Layout from '@components/Layout'
import Header from '@components/Header'
import Container from '@components/Container'
import Button from '@components/Button'
import { ApolloClient, InMemoryCache, gql } from '@apollo/client'

export default function Category({ categoryData }) {
    return (
        <Layout>
            <Head>
                <title>Create Next App</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
            </Head>

            <Container></Container>
        </Layout>
    )
}

export async function getStaticProps({ params }) {
    const client = new ApolloClient({
        uri: 'https://api-ap-south-1.graphcms.com/v2/cl24nx7vp6mqb01xtampb0iwb/master',
        cache: new InMemoryCache(),
    })

    const cmsData = await client.query({
        query: gql`
            query SingleCategory($slug: String) {
                category(where: { slug: $slug }) {
                    id
                    products {
                        id
                        name
                        price
                        slug
                        images {
                            url
                        }
                    }
                    name
                    slug
                }
            }
        `,
        variables: {
            slug: params.categoriesSlug,
        },
    })

    const categoryData = cmsData.data.category

    return {
        props: {
            categoryData,
            products: categoryData.products,
        },
    }
}

export async function getStaticPaths() {
    const client = new ApolloClient({
        uri: 'https://api-ap-south-1.graphcms.com/v2/cl24nx7vp6mqb01xtampb0iwb/master',
        cache: new InMemoryCache(),
    })

    const cmsData = await client.query({
        query: gql`
            query CategoryQuery {
                categories {
                    id
                    name
                    slug
                }
            }
        `,
    })

    const paths = cmsData.data.categories.map((category) => {
        return {
            params: {
                categoriesSlug: category.slug,
            },
        }
    })

    return {
        paths,
        fallback: true, // false or 'blocking'
    }
}