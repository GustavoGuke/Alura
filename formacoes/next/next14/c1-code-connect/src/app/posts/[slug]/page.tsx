import { Aside } from "@/app/components/Aside";
import logger from "@/logger";
import { remark } from 'remark';
import html from 'remark-html';

async function getPostBySlug(slug: string) {
    const url = `http://localhost:3042/posts?slug=${slug}`;
    const response = await fetch(url);
    if (!response.ok) {
        logger.error('Ops, alguma coisa correu mal');
        return {};
    }
    logger.info('Posts obtidos com sucesso');
    const data = await response.json();
    if (data.length === 0) {
        return {};
    }
    const post = data[0];


    const processedContent = await remark()
        .use(html)
        .process(post.markdown);
    const contentHtml = processedContent.toString();
    post.markdown = contentHtml

    return post
}


const PagePost = async ({ params }: any) => {

    const post = await getPostBySlug(params.slug)
    return (
        <div className="max-w-7xl my-14 mx-auto flex gap-7 h-screen">
            <Aside/>
            <h1>
                {post.title}
                <div dangerouslySetInnerHTML={{ __html: post.markdown }} />
            </h1>
        </div>
    )
}

export default PagePost