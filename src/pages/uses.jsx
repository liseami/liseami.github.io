import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'
import Link from 'next/link'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export default function Uses() {
  return (
    <>
      <Head>
        <title>更多 - 自用分享</title>
        <meta
          name="更多"
          content="自用分享。"
        />
      </Head>
      <SimpleLayout
        title="介绍一些我使用的东西"
        intro="我的脚手架，“技术日用品”，不限于硬件，软件和框架."
      >
        <div className="space-y-20">
        <ToolsSection title="技术框架">
            <Tool title="FastApi">
              <Link href={'https://fastapi.tiangolo.com/'}>https://fastapi.tiangolo.com/</Link>
              <br/>
              FastAPI 是一种现代、快速（高性能）的 Web 框架，用于基于标准 Python 类型提示使用 Python 3.7+ 构建 API。
            </Tool>
            <Tool title="Next.js">
              <Link href={'https://nextjs.org/'}>https://nextjs.org/</Link>
              <br/>
              Next.js 被一些世界上最大的公司使用，它使您能够通过扩展最新的 React 功能并集成强大的基于 Rust 的 JavaScript 工具来创建全栈 Web 应用程序以实现最快的构建。
            </Tool>
            <Tool title="SwiftUI">
            <Link href={'https://developer.apple.com/xcode/swiftui/'}>https://developer.apple.com/xcode/swiftui/</Link>
              <br/>
              苹果跨平台UI框架。
            </Tool>
          </ToolsSection>
          <ToolsSection title="硬件">
            <Tool title="14” MacBook Pro, M1 Max, 64GB RAM (2021)">
              64GB内存，做任何开发，剪任何片子，都很难听到风扇响。除非剪辑导出+多开模拟器。
            </Tool>
          </ToolsSection>
          <ToolsSection title="设计工具">
            <Tool title="Figma">
              <Link href={'https://www.figma.com/'}>https://www.figma.com/</Link>
              <br />
              全栈开发必备的自己设计产品的软件。
            </Tool>
          </ToolsSection>
          <ToolsSection title="个人管理">
            <Tool title="Notion">
              <Link href={'https://www.notion.so/zh-cn'}>https://www.notion.so/zh-cn</Link>
              <br />
              设计优良的笔记产品，内置诸多模版，方便自己管理自己的工期。
            </Tool>
            <Tool title="Linear">
              <Link href={'https://linear.app/'}>https://linear.app/</Link>
              <br />
              如果想更进一步，自我监控产品进度，或者和一些人合作，Linear是非常棒的工具。
            </Tool>
          </ToolsSection>
          <ToolsSection title="其他软件">
          <Tool title="Homebrew">
            <Link href={'https://brew.sh/'}>https://brew.sh/</Link>
              <br/>
              Mac软件包管理器，看不见摸不着的AppStore，非常爽。
            </Tool>
            <Tool title="OhMyZsh">
            <Link href={'https://ohmyz.sh/'}>https://ohmyz.sh/</Link>
              <br/>
              Zsh升级。🐮。
            </Tool>
            <Tool title="Prxyman">
              <Link href={'https://proxyman.io/'}>https://proxyman.io/</Link>
              <br />
              流量监控软件，俗称抓包软件，方便API调试。
            </Tool>
            <Tool title="Github桌面端">
              <Link href={'https://desktop.github.com/'}>https://desktop.github.com/</Link>
              <br />
              - 你竟然用Git桌面App？
              <br />
               - 你就说好用不好用吧。
            </Tool>
          </ToolsSection>
        </div>
      </SimpleLayout>
    </>
  )
}
