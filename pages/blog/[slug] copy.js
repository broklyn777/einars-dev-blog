import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { Nav, Button } from '../../components'
import PageTitle from '../../posts-old/PageTitle'
import SectionContainer from '../../components/SectionContainer'

const components = { Nav, Button, SyntaxHighlighter }

const PostPage = ({ frontMatter: { title, date }, mdxSource }) => {
  return (
    <SectionContainer>

      <div className="mt-4 ">
        <PageTitle>{title}</PageTitle>
        <MDXRemote {...mdxSource} components={components} />
      </div>
    </SectionContainer>
  )
}

const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join('posts'))

  const paths = files.map(filename => ({
    params: {
      slug: filename.replace('.mdx', '')
    }
  }))

  return {
    paths,
    fallback: false
  }
}

const getStaticProps = async ({ params: { slug } }) => {
  const markdownWithMeta = fs.readFileSync(path.join('posts',
    slug + '.mdx'), 'utf-8')

  const { data: frontMatter, content } = matter(markdownWithMeta)
  const mdxSource = await serialize(content)

  return {
    props: {
      frontMatter,
      slug,
      mdxSource
    }
  }
}

export { getStaticProps, getStaticPaths }
export default PostPage