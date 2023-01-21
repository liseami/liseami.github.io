import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  TikTokIcon,
  GitHubIcon,
  TwitterIcon,
  BiliBiliIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <Head>
        <title>关于我 - 独立开发者</title>
        <meta
          name="关于赵纯想"
          content="我对创造感兴趣。而不局限于小说、软件，和剧本。创造的激情是我作为人生的意义所一直保护的东西， 尽管它曾屡受打击，但总能从我乐天派的心地上重新抽丝剥茧。"
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              独立开发者。纯想理心社发起人。赵纯想。
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                我对创造感兴趣。而不局限于小说、软件，和剧本。创造的激情是我作为人生的意义所一直保护的东西，
                尽管它曾屡受打击，但总能从我乐天派的心地上重新抽丝剥茧。我也曾因此落入贫穷的境地。
                相对于文学————一种自然的、甚至任意性的指尖流式输出，用代码构造软件是我后来更感兴趣
                的领域。因为它更具工程的意义，可以使用整个人类暴露在开源世界的东西作为杠杆，尽最大的所能发挥创意。
                更重要的是，从我的指尖到用户屏幕上用户们的指尖，这种从技术设计到人文体验的过程，让我感到痴迷。
              </p>
              <p>
                从写小说，到写代码。之间的差异是巨大的。而一旦我越过了这种差异，我就知道没有什么是不可能的。
                从前我研究罗曼·波兰斯基，福楼拜和陀翁，现在我痴醉于Next.js,React,SwiftUI和FastApi，这两
                项所谓“研究”的动作没有什么不同，无非是“学习前人如何创造，并为后人留下一些创造”。
                不得不说写小说和写代码所调用的神经元集群差异巨大，以至于我的大脑几乎经历了二次发育。
                而自始至终，我从未感到真的忘记过什么，或者脑子不够用。从而我开始相信人的潜力无穷，并希望尽可能
                拉拢更多的大脑开发者，加入跨学科创造的行列。我忽然意识到人一旦停止学习和涉足不同的领域，
                就会被日益顽固的认知之墙所禁锢。刚学习SwiftUI不久后，我喜欢在论坛上和RN开发者们展开口水战。视图论证
                原生的伟大。但后来我痴醉于Next.js，才意识到人之所以捍卫自己所学的东西并奉为圭臬，无非是因为他
                的潜意识在惧怕别人所掌握的东西，而自己懒得跨越。
              </p>
              <p>
                跨越，跨越，跨越现有的东西。痛击我们认知的疆界。
              </p>
              <p>
                这是我即将发起纯想理心社的初衷。和你们一样期待它的快速到来。
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink className='pt-3' href="https://v.douyin.com/hfLkMQV/" icon={TikTokIcon}>
                在 抖音 上关注我
              </SocialLink>
              <SocialLink className='pt-3' href="https://space.bilibili.com/26317883/" icon={BiliBiliIcon}>
                在 Bilibili 上关注我
              </SocialLink>
              <SocialLink className='pt-3' href="https://twitter.com/liseami1" icon={TwitterIcon}>
                在Twitter 上关注我
              </SocialLink>
              <SocialLink className='pt-3' href="https://github.com/liseami" icon={GitHubIcon}>
                在Github上关注我
              </SocialLink>
              {/* <SocialLink href="#" icon={InstagramIcon} className="mt-4">
                Follow on Instagram
              </SocialLink>
              <SocialLink href="#" icon={GitHubIcon} className="mt-4">
                Follow on GitHub
              </SocialLink>
              <SocialLink href="#" icon={LinkedInIcon} className="mt-4">
                Follow on LinkedIn
              </SocialLink> */}
              <SocialLink
                href="mailto:spencer@planetaria.tech"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                liseami@qq.com
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
