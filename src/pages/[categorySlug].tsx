import { ApolloClient, gql, InMemoryCache } from "@apollo/client";
import React from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Image from "next/image";

import styles from "../styles/Category.module.scss"

export interface categoryProductProps {
    id: string,
    name: string,
    price: number,
    slug: string,
    featuredImage: {
        height: number,
        width: number,
        url: string
    }
}
export interface categoryDataProps {
    id: string,
    name: string,
    slug: string,
    products: categoryProductProps[]
}

const Category = ({ categoryData }: { categoryData: categoryDataProps }) => {
    return (
        <>
            <Header isSticky={false} />
            <div className={styles.category_container}>
                <div>
                    <div className={`${styles.category_header} px-12 pb-4 sticky`}>
                        <h1>{categoryData.name} ({categoryData.products.length})</h1>
                    </div>
                    <div></div>
                </div>
                <div className={`${styles.category_page_container} flex`}>
                    <div className={`${styles.filter_container}`}>
                        Filter
                    </div>
                    <div className={`${styles.products_container} w-full flex gap-5`}>
                        {categoryData.products.map((product) => (
                            <a href={product.slug} key={product.id} className={`${styles.product_card} w-1/3`}>
                                <div>
                                    <Image src={product.featuredImage.url} width={500} height={500} alt={product.name} objectFit="cover" />
                                    <div className={`${styles.product_meta}`}>
                                        <span>{product.name}</span>
                                        <p className={styles.product_category_name}>{categoryData.name}</p>
                                        <p>₹{product.price.toLocaleString()}</p>
                                    </div>
                                </div>
                            </a>

                        ))}

                    </div>
                </div>

            </div>
            <Footer />
        </>

    )
}

export default Category

export async function getStaticPaths() {
    const client = new ApolloClient({
        uri: "https://api-ap-south-1.graphcms.com/v2/cl24nx7vp6mqb01xtampb0iwb/master",
        cache: new InMemoryCache(),
    });

    const cmsData = await client.query({
        query: gql`
          query AllCategories {
            categories {
              id
              name
              slug
              
            }
          }
        `,
    });



    const paths = cmsData.data.categories.map((category) => {
        return {
            params: {
                categorySlug: category.slug,
            },
        };
    });


    return {
        paths,
        fallback: true, // false or 'blocking'
    };

}

export async function getStaticProps({ params }) {
    const client = new ApolloClient({
        uri: "https://api-ap-south-1.graphcms.com/v2/cl24nx7vp6mqb01xtampb0iwb/master",
        cache: new InMemoryCache(),
    });


    const categoryProductData = await client.query({
        query: gql`
        query categoryPageProducts($slug: String) {
            category(where: {slug: $slug}) {
              id
              name
              products {
                id
                name
                price
                slug
                featuredImage {
                  id
                  url
                  width
                  height
                }
              }
            }
          }
          
        `,
        variables: {
            slug: params.categorySlug
        }
    });

    const categoryData = categoryProductData.data.category;

    return {
        props: {
            categoryData,
            products: categoryData,
        },
    };
}