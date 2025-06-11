import Link from "next/link";
import  db  from "../../../../prisma/db.js"
import logger from "@/logger";
import html from "remark-html";
import styles from "./page.module.css";
import { redirect } from "next/navigation";
import { remark } from "remark";
import { CardPost } from "@/components/CardPost";
import { ArrowBack } from "@/components/icons/ArrowBack";


async function getPostBySlug(slug) {
  try {
    const post = await db.post.findFirst({
      where: {
        slug,
      },
      include: {
        author: true,
      },
    });

    if (!post) {
      throw new Error(`Post not found for slug: ${slug}`);
    }

    const processedContent = await remark().use(html).process(post.markdown);
    const contentHtml = processedContent.toString();

    post.markdown = contentHtml;

    return post;
  } catch (error) {
    logger.error("Falaha ao obeter post", { slug, error });
  }
  redirect("/not-found");
}

const PagePost = async ({ params }) => {
  const post = await getPostBySlug(params.slug);
  return (
    <div>
      <CardPost post={post} highlight />
      <h3 className={styles.subtitle}>Código:</h3>
      <div className={styles.code}>
        <div dangerouslySetInnerHTML={{ __html: post.markdown }} />
      </div>
      <div style={{ textAlign: "center", paddingTop: "32px" }}>
        <Link
          href="/"
        >
          Voltar ao feed <ArrowBack color="#81FE88" />
        </Link>
      </div>
    </div>
  );
};

export default PagePost;
