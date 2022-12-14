import Image from 'next/image'
import Head from 'next/head'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import logoPlanetaria from '@/images/logos/planetaria.svg'
import huaiyihuai from '@/images/photos/坏一坏海报.jpg'
import renshengcancan from '@/images/photos/人生灿灿海报.jpg'
import chuntianjianshi from '@/images/photos/春天简史海报.webp'
import lifelooplogo from '@/images/photos/lifelooplogo.png'
import Link from 'next/link'

const projects = [
  {
    name: '转山 - 公测中',
    description:
      '个人行为习惯管理软件.',
    link: { href: '#', label: '点击加入公测' },
    logo: lifelooplogo,
  },
  {
    name: '《坏一坏》',
    description:
      '小说集。凉炘的小说虽然以“坏一坏”冠名，但其实坏中有深情，我能读到他骨子里藏不住深情款款。 ———蔡崇达。',
    link: { href: 'https://book.douban.com/subject/26990080/', label: '豆瓣 - 坏一坏 评分8.4' },
    logo: huaiyihuai,
  },
  {
    name: '《人生灿灿》',
    description:
      '小说集。收录凉炘短篇小说十四篇，包括在“One·一个”App中高点击量与高赞的作品。',
    link: { href: 'https://book.douban.com/subject/34865437/', label: '豆瓣 - 人生灿灿 评分7.0' },
    logo: renshengcancan,
  },
  {
    name: '《春天简史》',
    description:
      '编剧/演员',
    link: { href: 'https://movie.douban.com/subject/35708474/', label: '豆瓣 - 春天简史' },
    logo: chuntianjianshi,
  },
]

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Projects() {
  return (
    <>
      <Head>
        <title>产品 - 我创造的东西</title>
        <meta
          name="我创造的东西"
          content="这些是我在这个星球上创造的一些东西。寥寥无几，满含诚意。"
        />
      </Head>
      <SimpleLayout
        title="这些是我在这个星球上创造的一些东西。寥寥无几，满含诚意。"
        intro="Rage, rage against the dying of the light.痛斥光阴的飞逝！"
      >
        <ProjectList/>
      </SimpleLayout>
    </>
  )
}


export function ProjectList() {
  return (
    <ul
    role="list"
    className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
  >
    {projects.map((project) => (
      <Card as="li" key={project.name}>
        <div className="relative z-10 flex h-24 w-24 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
          <Image
            src={project.logo}
            alt=""
            className="h-20 w-20 object-cover rounded-full"
            unoptimized
          />
        </div>
        <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
          <Card.Link href={project.link.href}>{project.name}</Card.Link>
        </h2>
        <Card.Description>{project.description}</Card.Description>
        <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
          <LinkIcon className="h-6 w-6 flex-none" />
          <Link  href={project.link.href} className="ml-2"  target="_blank">{project.link.label}</Link>
        </p>
      </Card>
    ))}
  </ul>
  )
}