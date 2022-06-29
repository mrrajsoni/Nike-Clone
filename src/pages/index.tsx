import Head from 'next/head'
import homeStyles from '../styles/Home.module.scss'

import { ApolloClient, InMemoryCache, gql } from '@apollo/client'

import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import React from 'react'
import Button from '../components/Button/Button'
import Layout from '../components/Layout/Layout'

export default function Home({ homeData, productData }) {
    return (
        <Layout >
            <Head>
                <title>Nike Clone Ecommerce</title>
                <meta
                    name="description"
                    content="Your search for luxurious jewellery ends here!"
                />
            </Head>

            <section>
                <div>
                    <img src={homeData.heroImage.url} alt="" />
                </div>
                <div className={`text-center ${homeStyles.banner_content}`}>
                    <p className="mb-1">Nike Alate Sports Bras</p>
                    <h1 className="title_text">{homeData.heroTitle}</h1>
                    <p className="subtitle_text mt-6">
                        {homeData.heroDesc.text}
                    </p>
                    <Button>Shop</Button>
                </div>
            </section>

            <section>
                <h2></h2>
            </section>
        </Layout>
    )
}

export async function getStaticProps() {
    const client = new ApolloClient({
        uri: 'https://api-ap-south-1.graphcms.com/v2/cl24nx7vp6mqb01xtampb0iwb/master',
        cache: new InMemoryCache(),
    })

    const cmsData = await client.query({
        query: gql`
            query MyQuery {
                page(where: { slug: "home" }) {
                    id
                    heroTitle
                    heroDesc {
                        text
                    }
                    heroImage {
                        url
                    }
                    slug
                    title
                }
                products {
                    name
                    price
                    images {
                        url
                        id
                        fileName
                    }
                    slug
                    id
                }
                assets(where: { fileName_contains: "minori-" }) {
                    id
                    url
                }
            }
        `,
    })

    const homeData = cmsData.data.page
    const productData = cmsData.data.products
    const logoData = cmsData.data.assets

    return {
        props: {
            homeData,
            productData,
            logoData,
        },
    }
}
