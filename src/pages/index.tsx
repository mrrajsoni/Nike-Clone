import Head from 'next/head'
import homeStyles from '../styles/Home.module.scss'
import { ApolloClient, InMemoryCache, gql } from '@apollo/client'
import React from 'react'
import Button from '../components/Button/Button'
import Layout from '../components/Layout/Layout'
import Image from 'next/image'
import BottomNav from '../components/Commons/BottomNav/BottomNav'
import Footer from '../components/Footer/Footer'
import { iconsMenu } from '../Constants/MenuConstant'
import { Swiper, SwiperSlide } from 'swiper/react';



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

            <section className={`${homeStyles.featured_section}`}>
                <h2>Featured</h2>
                <div className='flex gap-3'>
                    <figure className={`${homeStyles.featured_figure} relative`}>
                        <img src='https://media.graphassets.com/output=format:jpg/resize=height:800,fit:max/sxmQQSje7Zf0OL9jBwYP' alt='man with white shoes' />
                        <figcaption>
                            <h4 className='text-white'>Restocked: The AF1 &apos;07</h4>
                            <Button color='white'>Shop</Button>
                        </figcaption>

                    </figure>
                    <figure className={`${homeStyles.featured_figure} relative`}>
                        <img src='https://media.graphassets.com/output=format:jpg/resize=height:800,fit:max/oNKd8mzQ32MfE38e7RxT' alt='orange shoes upside down' />
                        <figcaption>
                            <h4>AJ XXXVI Low: &apos;NEW INFRARED&apos;</h4>
                            <Button>Shop</Button>
                        </figcaption>
                    </figure>
                </div>
            </section>

            <section className={`${homeStyles.featured_section}`}>
                <h2>Trending</h2>
                <div className='flex gap-3'>
                    <figure className={`${homeStyles.featured_figure} relative`}>
                        <img src='https://media.graphassets.com/output=format:jpg/resize=height:800,fit:max/jeT0x15gQdu5p54M3yUh' alt='two people sitting at a beach' />
                        <figcaption>
                            <h4 className='text-white'>Tees to Rule Summer</h4>
                            <Button color='white'>Shop</Button>
                        </figcaption>

                    </figure>
                    <figure className={`${homeStyles.featured_figure} relative`}>
                        <img src='https://media.graphassets.com/output=format:jpg/resize=height:800,fit:max/qDZ89omhQriiXPTT6i0l' alt='group of people in colorful clothing' />
                        <figcaption>
                            <h4 className='text-white'>Shorts to Beat the Heat</h4>
                            <Button color='white'>Shop</Button>
                        </figcaption>
                    </figure>
                </div>
            </section>

            <section className={`${homeStyles.featured_section}`}>
                <h2>Don&apos;t Miss</h2>
                <div className=''>
                    <figure className={`${homeStyles.featured_figure} relative`}>
                        <img src='https://media.graphassets.com/output=format:jpg/resize=height:800,fit:max/7fjRMTMfQ7COQ101wl5z' alt='a girl with hand raised covering her face from sunlight' />
                        <figcaption>
                            <h4 className='text-white big_heading'>Summer Tops</h4>
                            <p className='text-white mt-4'>Fun tops for her</p>
                            <Button color='white'>Shop</Button>
                        </figcaption>
                    </figure>
                </div>
            </section>

            <section className={`flex gap-5 ${homeStyles.home_nav_container}`}>
                <BottomNav isSlicedMenu={true} menu={iconsMenu} />
                <BottomNav isSlicedMenu={true} menu={iconsMenu} />
                <BottomNav isSlicedMenu={true} menu={iconsMenu} />
                <BottomNav isSlicedMenu={true} menu={iconsMenu} />
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
                
                assets(where: { fileName_contains: "minori-" }) {
                    id
                    url
                }
                products(where: {name_contains: "featured"}) {
                    images {
                      url
                    }
                    name
                  
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
