import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function SpeakingSection({ children, ...props }) {
  return (
    <Section {...props}>
      <div className="space-y-16">{children}</div>
    </Section>
  )
}

function Appearance({ title, description, event, cta, href }) {
  return (
    <Card as="article">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Eyebrow decorate>{event}</Card.Eyebrow>
      <Card.Description>{description}</Card.Description>
      <Card.Cta>{cta}</Card.Cta>
    </Card>
  )
}

export default function Speaking() {
  return (
    <>
      <Head>
        <title>课程 - 课程报名</title>
        <meta
          name="课程报名"
          content="我录制了iOS开发课程，帮助人们了解到他们从计算机白痴到写出自己的第一个App究竟有多快！"
        />
      </Head>
      <SimpleLayout
        title="我录制了iOS开发课程，帮助人们了解到他们从计算机白痴到写出自己的第一个App究竟有多快！"
        intro="这个网站有些严肃？千万别这样想.我制作的技术入门课，被称为全网第一单口相声课程。技术的传播方式应该轻松+愉悦，这种似乎非传统非严肃的口吻，恰恰是我设置的一个愉悦门槛。如果你不能在我的课程中感到愉悦，那么意味着在未来编程的过程中，你也很难感到愉悦了。"
      >
        <div className="space-y-20">
          <SpeakingSection title="SwfitUI-入门课">
            <Appearance
              href="https://www.cctalk.com/m/group/90565680"
              title="赵纯想SwiftUI入门课程 - 轻松入门"
              description="0基础。0计算机知识。完全小白的新手课。用生活中的字眼，解释编程世界中的“看似高大上的词汇”。纵观全网，最轻松的“单口相声版”《SwiftUI入门教程》，由讲课鬼才赵纯想出品。"
              event="最新录制 2022 - 持续更新"
              cta="课程报名"
            />
            <Appearance
              href="https://www.bilibili.com/video/BV1dW4y1j7zG/"
              title="iOS开发新手课程路线图｜赵纯想出品最新录制SwiftUI光速入门"
              description=" 学完课程后，你将具备独自开发App的基础能力。."
              event="最新录制 2022 - 持续更新"
              cta="去B站看视频"
            />
          </SpeakingSection>
          {/* <SpeakingSection title="Podcasts">
            <Appearance
              href="#"
              title="Using design as a competitive advantage"
              description="How we used world-class visual design to attract a great team, win over customers, and get more press for Planetaria."
              event="Encoding Design, July 2022"
              cta="Listen to podcast"
            />
            <Appearance
              href="#"
              title="Bootstrapping an aerospace company to $17M ARR"
              description="The story of how we built one of the most promising space startups in the world without taking any capital from investors."
              event="The Escape Velocity Show, March 2022"
              cta="Listen to podcast"
            />
            <Appearance
              href="#"
              title="Programming your company operating system"
              description="On the importance of creating systems and processes for running your business so that everyone on the team knows how to make the right decision no matter the situation."
              event="How They Work Radio, September 2021"
              cta="Listen to podcast"
            />
          </SpeakingSection> */}
        </div>
      </SimpleLayout>
    </>
  )
}