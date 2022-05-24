import fs from "fs"
import * as path from 'path'
import matter from "gray-matter"
import Link from "next/link"
import Image from "next/image"

export default function einar({ posts }) {
    return (
        <div className='mt-5'>
            {posts.map((post, index) => (
                <Link href={'/blog/' + post.slug} passHref key={index}>
                    <div className=" bg-[#f6f6f6] bg-clip-border border-gray-900 p-4 rounded-2xl relative border-solid flex flex-col min-w-0 mb-3 cursor-pointer break-words  max-w-[540px]" >
                        <div className="row gap-y-4">
                            <div className="flex w-4/6">
                                <div className="card-body">
                                    <h5 className="card-title">{post.frontMatter.title}</h5>
                                    <p className="card-text">{post.frontMatter.description}</p>
                                    <p className="card-text">
                                        <small className="text-muted">{post.frontMatter.date}</small>
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-4 m-auto">
                                <Image
                                    src={post.frontMatter.thumbnailUrl}
                                    className="img-fluid mt-1 rounded-start"
                                    alt="thumbnail"
                                    width={500}
                                    height={400}
                                    objectFit="cover"
                                />
                            </div>
                        </div>
                    </div>


                </Link>
            )


            )} </div>
    )
}

export const getStaticProps = async () => {
    const files = fs.readdirSync(path.join('posts'))

    const posts = files.map(filename => {

        const markDownWithMeta = fs.readFileSync(path.join('posts', filename))

        const { data: frontMatter } = matter(markDownWithMeta)

        return {
            frontMatter,
            slug: filename.split('.')[0]
        }

    })
    return {
        props: {
            posts
        }
    }

}
