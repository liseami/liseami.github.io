
import Head from 'next/head'
import Link from 'next/link'
import CopyButton from '@/components/CopyBtn'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import {
  TikTokIcon,
  GitHubIcon,
  TwitterIcon,
  BiliBiliIcon

} from '@/components/SocialIcons'

import { generateRssFeed } from '@/lib/generateRssFeed'
import { getAllArticles } from '@/lib/getAllArticles'
import { formatDate } from '@/lib/formatDate'
import { ProjectList } from '@/pages/projects'






function Article({ article }) {
  return (
    <Card as="article">
      <Card.Title href={`/articles/${article.slug}`}>
        {article.title}
      </Card.Title>
      <Card.Eyebrow as="time" dateTime={article.date} decorate>
        {formatDate(article.date)}
      </Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
      <Card.Cta>Read article</Card.Cta>
    </Card>
  )
}

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}



export default function Home({ articles }) {
  return (
    <>

      <Head>
        <title>
          赵纯想个人网站 - 产品，课程，文学和博客
        </title>
        <meta
          name="赵纯想个人网站"
          content="我写一些小说，代码和剧本。目标是拍电影。"
        />
      </Head>
      <Container className="mt-24">
        <div className="max-w-2xl pb-24">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            赵纯想个人网站
          </h1>

          {/* 联系方式连接 */}
          <SocialLinks />
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            这是我的<CopyButton content="zhaochunxiang1109" btntitle='私人微信' className="text-emerald-600" />，注明来意。
            <br></br>
            <br></br>
            写小说、代码和剧本。
            <Link href="https://naduo.love/" className="text-emerald-600">那朵App（数字永生与数字缅怀）</Link>创始人。
            <Link href="https://apps.apple.com/cn/app/%E8%BD%AC%E5%B1%B1-%E8%A1%8C%E4%B8%BA%E4%B9%A0%E6%83%AF%E5%A1%91%E9%80%A0/id6444640823" className="text-emerald-600">转山App</Link>开发者。
            居无定所，录制课程和视频。
            <Link href="/speaking" className="text-emerald-600">点击这里</Link>
            可以找到我录制的iOS开发课程。文学方面，出版作品有
            <Link href="https://book.douban.com/subject/26990080/" className="text-emerald-600">《坏一坏》</Link>、
            <Link href="https://book.douban.com/subject/34865437/" className="text-emerald-600">《人生灿灿》</Link>，另外，有几篇
            <Link href="/articles" className="text-emerald-600">本站可阅读的文章</Link>。
            另外，如果你对这个网站的实现方式感兴趣：它使用
            <Link href="https://nextjs.org/" className="text-emerald-600">Next.js</Link>、
            <Link href="https://reactjs.org/" className="text-emerald-600">React</Link>搭建，
            也使用了基于
            <Link href="https://tailwindcss.com/" className="text-emerald-600">TailwindCSS</Link>的模版。在我的Github中，
            你也可以找到源码。
            <br></br>
            <br></br>
            我正在为最新的创业项目招募技术合作伙伴，如你对感兴趣，尽快联系我。不限于iOS，安卓，Java，python和react。请用邮箱与我联系，并附带简历。liseami@qq.com
          </p>
        </div>
        {/* 产品 */}
        <ProjectList />
        {/* <Products /> */}
      </Container>
      {/* 文章 */}
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            {/* <Newsletter /> */}
            {/* <Resume /> */}
          </div>
        </div>
      </Container>
    </>
  )
}

function SocialLinks() {
  return (
    <div className="mt-6 flex gap-6">
      <SocialLink
        href="https://v.douyin.com/hfLkMQV/"
        aria-label="Follow on 抖音"
        icon={TikTokIcon}
      />
      <SocialLink
        href="https://space.bilibili.com/26317883/"
        aria-label="Follow on Bilibili"
        icon={BiliBiliIcon}
      />
      <SocialLink
        href="https://github.com/liseami"
        aria-label="Follow on GitHub"
        icon={GitHubIcon}
      />
      <SocialLink
        href="https://twitter.com/liseami1"
        aria-label="Follow on Twitter"
        icon={TwitterIcon}
      />
    </div>
  )
}


export async function getStaticProps() {
  if (process.env.NODE_ENV === 'production') {
    await generateRssFeed()
  }

  return {
    props: {
      articles: (await getAllArticles())
        .slice(0, 4)
        .map(({ component, ...meta }) => meta),
    },
  }
}
