import Image from 'next/image';

import { getPostBySlug, getPosts } from 'helper';

const BlogPost = ({ post }) => (
    <main className="w-2/3 mx-auto my-0">
        <h1 className="text-center text-8xl text-gray-800">{post.title}</h1>
        <h2 className="text-center text-5xl my-8 text-gray-600">
            Some subtitle can go here
        </h2>
        <Image src={post.imgSrc} alt="post image" layout="fixed" width={800} />
        <p>{post.body}</p>
        <p>Read more bellow</p>
        <a href={post.link}>
            <span>Learn more</span>
        </a>
    </main>
);

export default BlogPost;

export async function getStaticPaths() {
    const posts = await getPosts();

    const paths = posts.map((post) => ({
        params: {
            slug: post.slug,
        },
    }));

    return {
        paths,
        fallback: true,
    };
}

export async function getStaticProps({ params: { slug } }) {
    const post = await getPostBySlug(slug);

    return {
        props: {
            post,
        },
    };
}
