import Head from 'next/head'

import CopyButton from '@/components/CopyBtn'
import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'
import Link from 'next/link'

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
          content="赵纯想出品 - iOS开发课程（购前可微信zhaochunxiang1109咨询）"
        />
      </Head>
      <SimpleLayout
        title="赵纯想出品 - iOS开发课程"
        intro="专业内容，专业录制。从零到一，将你从计算机小白打造成对任何App信手拈来的开发者。"
      >
        <div className="space-y-20">
        <CopyButton content='zhaochunxiang1109' btntitle='  点击复制微信号咨询' />
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
          <SpeakingSection title="SwfitUI-进阶课">
          <Appearance
              href="course/proDevEnv"
              title="准备：专业环境搭建"
              description="专业环境搭建。"
              event="最新录制 2022 - 持续更新"
              cta="查看文档"
            />
          <Appearance
              href="course/github_1"
              title="重要：加入课程开源项目"
              description="加入课程开源项目。向同学们展示你写的个人主页。"
              event="最新录制 2022 - 持续更新"
              cta="查看文档"
            />
            <Appearance
              href="course/courseDocHttpRequest"
              title="1-Http请求"
              description="HTTP请求是网络编程中常用的一种方式，它可以帮助我们与网络上的服务器进行交互。在Swift语言中，我们可以使用系统提供的URLSession类来发起HTTP请求。"
              event="最新录制 2022 - 持续更新"
              cta="查看文档"
            />
            <Appearance
              href="course/courseDocJSON"
              title="2-JSON解析与页面渲染"
              description="在 Swift 中可以使用 URLEncoding.queryString 或 URLEncoding.default 来对 URL 中的中文进行编码。"
              event="最新录制 2022 - 持续更新"
              cta="查看文档"
            />
            <Appearance
              href="course/cocopodInstall"
              title="3-CocoPods介绍与安装"
              description="CocoaPods是一个用于iOS和macOS开发的依赖管理工具。它允许开发人员管理第三方库和框架的依赖关系，并将其集成到Xcode项目中。"
              event="最新录制 2022 - 持续更新"
              cta="查看文档"
            />
            <Appearance
              href="course/networkTools"
              title="4-网络请求核武器之纯想框架使用"
              description="我长期使用的网络框架。"
              event="最新录制 2022 - 持续更新"
              cta="查看文档"
            />
            <Appearance
              href="course/networkTiming"
              title="5-数据请求时机"
              description="如何利用SwiftUI特性请求网络数据。"
              event="最新录制 2022 - 持续更新"
              cta="查看文档"
            />
            <Appearance
              href="course/useOpenSourcePackage"
              title="6-开源软件包使用"
              description="开源软件包使用。"
              event="最新录制 2022 - 持续更新"
              cta="查看文档"
            />
            <Appearance
              href="course/uikit"
              title="7-巨人肩膀之桥接UIKit"
              description="给开发者发送邮件。"
              event="最新录制 2022 - 持续更新"
              cta="查看文档"
            />
            
          </SpeakingSection>
        </div>
      </SimpleLayout>
    </>
  )
}
