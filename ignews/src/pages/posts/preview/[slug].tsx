import { GetServerSideProps, GetStaticPaths } from "next"
import { getSession, useSession } from "next-auth/react"
import { redirect } from 'next/dist/server/api-utils'
import Head from "next/head"
import Link from 'next/link'
import { useRouter } from 'next/router'

import { RichText } from "prismic-dom"
import { useEffect } from 'react'
import { getPrismicClient } from "../../../services/prismic"

import styles from '../post.module.scss';



interface IPostPreviewProps {
  post: {
    slug: string;
    title: string;
    content: string;
    updatedAt: string;
  }
}

// export const getStaticPaths = () => {
//   return {
//     paths: [],
//     fallback: 'blocking'
//   };
// }

export default function PostPreview({ post }: IPostPreviewProps) {
  const {data: session} = useSession()
  const router = useRouter()

  console.log(session)

  useEffect(() => {

    if(session?.activeSubscription {
      router.push(`/posts/${post.slug}`);
    }

  }, [ssion])

  return (
    <>
      <Head>
        <title>{post.title} | ig.news </title>
      </Head>
      <main className={styles.container}>
        <article className={styles.post}>
          <h1>{post.title}</h1>
          <time>{post.updatedAt}</time>
          <div
            className={`${styles.postContent} ${styles.previewContent}`}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <div className={styles.continueReading}>
            Want to continue reading?
            <Link href="/" >
              Subscribe Now 🤗 
            </Link>
          </div>
        </article>
      
      </main>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { slug } = params;

  

  const prismic = getPrismicClient();

  const response = await prismic.getByUID('publication', slug, {})

  const post = {
    slug,
    title: RichText.asText(response.data.title),
    content: RichText.asHtml(response.data.content.splice(0, 3)),
    updatedAt: new Date(response.last_publication_date).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    })
  }
  return {
    props: {
      post,
    },
    redirect: 60 * 30
  }

}