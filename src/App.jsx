import { useEffect, useState } from 'react'
import './App.css'
import questionFillIcon from './assets/question-fill.svg'
import { specDocument } from './data/specDocument'

function Header({ brand }) {
  return (
    <header className="docs-header">
      <div className="header-brand">
        <div className="brand-mark">S</div>
        <div>
          <strong>{brand.name}</strong>
          <span>{brand.kicker}</span>
        </div>
      </div>

      <nav className="header-nav" aria-label="Primary">
        <a href="#intro">指南</a>
        <a href="#colors">色彩</a>
        <a href="#components">组件</a>
      </nav>

      <div className="header-actions">
        <div className="doc-search" aria-hidden="true">
          Search
        </div>
        <span className="framework-badge">React</span>
      </div>
    </header>
  )
}

function LeftSidebar({ overview }) {
  return (
    <aside className="left-sidebar">
      <div className="sidebar-group">
        <span className="sidebar-caption">开发指南</span>
        <nav className="sidebar-links" aria-label="Document navigation">
          {overview.map((item) => (
            <a key={item.id} href={`#${item.id}`}>
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </aside>
  )
}

function RightSidebar({ overview }) {
  return (
    <aside className="right-sidebar">
      <div className="outline-card">
        <span className="sidebar-caption">本页目录</span>
        <nav className="outline-links" aria-label="Page outline">
          {overview.map((item) => (
            <a key={item.id} href={`#${item.id}`}>
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </aside>
  )
}

function Intro({ brand }) {
  return (
    <section className="doc-section" id="intro">
      <div className="section-intro">
        <span className="section-kicker">快速开始</span>
        <h1>{brand.documentTitle}</h1>
        <p>{brand.documentDescription}</p>
      </div>

      <div className="summary-grid">
        {brand.highlights.map((item) => (
          <article key={item.label} className="summary-card">
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </article>
        ))}
      </div>
    </section>
  )
}

function Principles({ principles }) {
  return (
    <section className="doc-section" id="principles">
      <div className="section-heading">
        <span className="section-kicker">Foundation</span>
        <h2>设计原则</h2>
        <p>先定义判断标准，再补充 token 和组件，可以让文档结构更稳定，也更容易交付给开发使用。</p>
      </div>

      <div className="principle-list">
        {principles.map((item) => (
          <article key={item.title} className="doc-card">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

function BasicTokenTable({ title, columns, rows, id, kicker, description }) {
  return (
    <section className="doc-section" id={id}>
      <div className="section-heading">
        <span className="section-kicker">{kicker}</span>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>

      <div className="table-card">
        <table className="doc-table">
          <thead>
            <tr>
              {columns.map((column) => (
                <th key={column}>{column}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.name}>
                <td>
                  <strong>{row.name}</strong>
                </td>
                <td>{row.value || row.size || row.radius}</td>
                <td>{row.lineHeight || row.shadow || row.usage || '-'}</td>
                <td>{row.note || row.weight || row.preview || row.usage || '-'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

function PaletteScale({ palette, onCopy }) {
  return (
    <article className="palette-card">
      <div className="palette-header" style={{ background: palette.accent }}>
        <div>
          <span>{palette.category}</span>
          <h3>{palette.name}</h3>
        </div>
        <div className="palette-header-meta">
          <strong>{palette.anchor.token}</strong>
          <small>{palette.anchor.value}</small>
        </div>
      </div>

      <div className="palette-description">
        <p>{palette.description}</p>
      </div>

      <div className="palette-rows">
        {palette.scale.map((item) => (
          <button
            key={item.token}
            type="button"
            className="palette-row"
            style={{ background: item.value }}
            onClick={() => onCopy(item.value, `${item.token} copied`)}
            aria-label={`Copy ${item.token} ${item.value}`}
          >
            <span style={{ color: item.textColor }}>{item.token}</span>
            <code style={{ color: item.textColor }}>{item.value}</code>
          </button>
        ))}
      </div>
    </article>
  )
}

function SemanticGroup({ group, onCopy }) {
  return (
    <section className="semantic-group">
      <div className="semantic-heading">
        <h3>{group.title}</h3>
        <p>{group.description}</p>
      </div>

      <div className="semantic-grid">
        {group.items.map((item) => (
          <button
            key={item.name}
            type="button"
            className="semantic-card"
            onClick={() => onCopy(item.value, `${item.name} copied`)}
            aria-label={`Copy ${item.name} ${item.value}`}
          >
            <div
              className={`semantic-preview${item.invert ? ' semantic-preview-dark' : ''}`}
              style={{ background: item.value }}
            >
              <span>{item.value}</span>
            </div>
            <div className="semantic-meta">
              <strong>{item.name}</strong>
              <p>{item.usage}</p>
            </div>
          </button>
        ))}
      </div>
    </section>
  )
}

function ColorSystem({ colorSystem, onCopy }) {
  return (
    <section className="doc-section color-system-section" id="colors">
      <div className="section-heading">
        <span className="section-kicker">Tokens</span>
        <h2>{colorSystem.title}</h2>
        <p>{colorSystem.description}</p>
      </div>

      <div className="color-intro-card">
        <div>
          <h3>{colorSystem.brandIntro.title}</h3>
          <p>{colorSystem.brandIntro.description}</p>
        </div>
        <div className="color-intro-badges">
          {colorSystem.brandIntro.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>

      <div className="palette-section">
        <div className="subsection-heading">
          <h3>品牌主色</h3>
          <p>根据设计稿中的官方定义色，主品牌色以 Blue-6 为核心，并向上下两端延展为完整 10 阶色板。</p>
        </div>
        <div className="palette-grid palette-grid-single">
          <PaletteScale palette={colorSystem.brandPalette} onCopy={onCopy} />
        </div>
      </div>

      <div className="palette-section">
        <div className="subsection-heading">
          <h3>功能色</h3>
          <p>设计稿中包含 6 组功能色板，覆盖提示、告警、成功、重点和扩展场景。</p>
        </div>
        <div className="palette-grid">
          {colorSystem.functionalPalettes.map((palette) => (
            <PaletteScale key={palette.name} palette={palette} onCopy={onCopy} />
          ))}
        </div>
      </div>

      <div className="palette-section">
        <div className="subsection-heading">
          <h3>中性色</h3>
          <p>设计稿中保留了通用灰阶和品牌倾向的中性色，便于文本、边框、分割线和填充色映射到前端 token。</p>
        </div>
        <div className="palette-grid palette-grid-two">
          {colorSystem.neutralPalettes.map((palette) => (
            <PaletteScale key={palette.name} palette={palette} onCopy={onCopy} />
          ))}
        </div>
      </div>

      <div className="semantic-section">
        <div className="subsection-heading">
          <h3>语义色与界面应用</h3>
          <p>这一部分对应 Figma 页面下半区的背景色、文本色、边框、分割线和填充色，适合直接映射到前端 token。</p>
        </div>

        {colorSystem.semanticGroups.map((group) => (
          <SemanticGroup key={group.title} group={group} onCopy={onCopy} />
        ))}
      </div>
    </section>
  )
}

function DarkModeSystem({ darkModeSystem, onCopy }) {
  return (
    <section className="doc-section dark-mode-section" id="dark-mode">
      <div className="section-heading">
        <span className="section-kicker">Dark Mode</span>
        <h2>{darkModeSystem.title}</h2>
        <p>{darkModeSystem.description}</p>
      </div>

      <div className="dark-mode-note">
        <div>
          <h3>深色模式原则</h3>
          <p>{darkModeSystem.note}</p>
        </div>
        <div className="dark-preview-strip">
          {darkModeSystem.preview.map((item) => (
            <button
              key={item.name}
              type="button"
              className="dark-preview-card"
              style={{ background: item.value }}
              onClick={() => onCopy(item.value, `${item.name} copied`)}
              aria-label={`Copy ${item.name} ${item.value}`}
            >
              <strong>{item.name}</strong>
              <span>{item.value}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="dark-panel">
        <div className="subsection-heading dark-subsection">
          <h3>深色中性色</h3>
          <p>作为深色界面的基础骨架，负责页面背景、层级划分和内容承载。</p>
        </div>

        <div className="palette-grid palette-grid-single">
          <PaletteScale palette={darkModeSystem.neutralPalette} onCopy={onCopy} />
        </div>
      </div>

      <div className="dark-panel">
        <div className="subsection-heading dark-subsection">
          <h3>深色语义色</h3>
          <p>文本、边框、分割线和填充全部在深色背景下重新定义，不直接复用浅色模式 token。</p>
        </div>

        {darkModeSystem.semanticGroups.map((group) => (
          <SemanticGroup key={group.title} group={group} onCopy={onCopy} />
        ))}
      </div>
    </section>
  )
}

function FontSelectionTable({ fontSelection }) {
  return (
    <div className="table-card">
      <table className="doc-table">
        <thead>
          <tr>
            <th>系统</th>
            <th>中文</th>
            <th>英文</th>
            <th>数字</th>
          </tr>
        </thead>
        <tbody>
          {fontSelection.map((row) => (
            <tr key={row.system}>
              <td>
                <strong>{row.system}</strong>
              </td>
              <td>{row.chinese}</td>
              <td>{row.english}</td>
              <td>{row.numeric}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function TypeScaleTable({ rows }) {
  return (
    <div className="table-card">
      <table className="doc-table">
        <thead>
          <tr>
            <th>字体样式</th>
            <th>应用场景</th>
            <th>字号</th>
            <th>行高</th>
            <th>字重</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.name}>
              <td>
                <div className="type-sample-cell">
                  <span
                    className="type-sample"
                    style={{ fontSize: row.size, lineHeight: row.lineHeight, fontWeight: row.previewWeight }}
                  >
                    安道教育
                  </span>
                  <strong>{row.name}</strong>
                </div>
              </td>
              <td>{row.usage}</td>
              <td>{row.size}</td>
              <td>{row.lineHeight}</td>
              <td>{row.weight}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function TypographySystem({ typographySystem }) {
  return (
    <section className="doc-section" id="typography">
      <div className="section-heading">
        <span className="section-kicker">Typography</span>
        <h2>{typographySystem.title}</h2>
        <p>{typographySystem.description}</p>
      </div>

      <div className="typography-panel">
        <div className="subsection-heading">
          <h3>字体选择</h3>
          <p>{typographySystem.fontIntro}</p>
        </div>

        <div className="font-stack-card">
          <code>{typographySystem.fontStack}</code>
        </div>

        <FontSelectionTable fontSelection={typographySystem.fontSelection} />
      </div>

      <div className="typography-panel">
        <div className="subsection-heading">
          <h3>字体</h3>
          <p>{typographySystem.scaleIntro}</p>
        </div>

        <TypeScaleTable rows={typographySystem.scale} />
      </div>

      <div className="grid-system-card">
        <div className="subsection-heading">
          <h3>网格系统</h3>
          <p>最小单位 4pt。所有字号与间距建议围绕 4 的倍数扩展，保持界面节奏一致。</p>
      </div>

        <div className="grid-system-demo">
          <div className="mini-grid" aria-hidden="true" />
          <div className="grid-scale-list">
            {typographySystem.gridUnits.map((group) => (
              <div key={group.join('-')} className="grid-scale-row">
                {group.map((unit) => (
                  <span key={unit}>{unit}</span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function ShadowCard({ item, onCopy }) {
  return (
    <article className="shadow-card">
      <div className="shadow-card-header">
        <div>
          <span className="shadow-level">{item.level}</span>
          <h3>{item.title}</h3>
        </div>
        <code>{item.token}</code>
      </div>

      <p className="shadow-description">{item.description}</p>

      <div className="shadow-demo-stage">
        <div className={`shadow-demo shadow-demo-${item.kind}`} style={{ boxShadow: item.shadow }}>
          {item.kind === 'card' ? (
            <div className="demo-mini-card">
              <div className="demo-mini-title">
                <span>指令：“关机”，执行失败</span>
                <strong>失败</strong>
              </div>
              <div className="demo-mini-device">
                <span>左侧智能黑板</span>
                <small>集美楼A2-101室</small>
              </div>
            </div>
          ) : null}

          {item.kind === 'dropdown' ? (
            <div className="demo-dropdown">
              <div className="demo-input-field">输入中的状态</div>
              <div className="demo-dropdown-panel">
                <span>语文</span>
                <span>数学</span>
                <span className="is-active">英语</span>
              </div>
            </div>
          ) : null}

          {item.kind === 'tooltip' ? (
            <div className="demo-tooltip-wrap">
              <div className="demo-tooltip-field">
                <div className="demo-tooltip-label">
                  <span>标题内容</span>
                  <button type="button" className="demo-help-trigger" aria-label="查看提示信息">
                    <img src={questionFillIcon} alt="" />
                  </button>
                  <div className="demo-tooltip">我是提示文本我是提示文本，说明内容在这里展示。</div>
                </div>
                <div className="demo-select">
                  <span>文本内容</span>
                </div>
              </div>
            </div>
          ) : null}

          {item.kind === 'modal' ? (
            <div className="demo-modal">
              <div className="demo-modal-head">删除类型</div>
              <div className="demo-modal-body">是否删除“测试A组”文件？</div>
              <div className="demo-modal-actions">
                <button type="button" className="demo-modal-btn demo-modal-btn-secondary">
                  取消
                </button>
                <button type="button" className="demo-modal-btn demo-modal-btn-primary">
                  确定
                </button>
              </div>
            </div>
          ) : null}
        </div>
      </div>

      <div className="shadow-spec">
        <p>{item.usage}</p>
        <button type="button" className="copy-chip" onClick={() => onCopy(item.shadow, '投影样式已复制')}>
          <code>{item.shadow}</code>
        </button>
      </div>
    </article>
  )
}

function ShadowSystem({ shadowSystem, onCopy }) {
  return (
    <section className="doc-section" id="surfaces">
      <div className="section-heading">
        <span className="section-kicker">Elevation</span>
        <h2>{shadowSystem.title}</h2>
        <p>{shadowSystem.description}</p>
      </div>

      <div className="shadow-intro-card">
        <p>{shadowSystem.intro}</p>
        <strong>{shadowSystem.note}</strong>
      </div>

      <div className="shadow-grid">
        {shadowSystem.levels.map((item) => (
          <ShadowCard key={item.level} item={item} onCopy={onCopy} />
        ))}
      </div>
    </section>
  )
}

function ComponentCard({ item }) {
  return (
    <article className="component-doc-card">
      <div className="component-doc-preview">
        {item.kind === 'button' ? (
          <button type="button" className={`preview-button preview-button-${item.variant}`}>
            {item.label}
          </button>
        ) : (
          <label className="preview-field">
            <span>{item.label}</span>
            <input placeholder={item.placeholder} />
          </label>
        )}
      </div>

      <div className="component-doc-meta">
        <div className="component-title-row">
          <h3>{item.name}</h3>
          <code>{item.spec}</code>
        </div>
        <p>{item.note}</p>
      </div>
    </article>
  )
}

function Components({ components }) {
  return (
    <section className="doc-section" id="components">
      <div className="section-heading">
        <span className="section-kicker">Components</span>
        <h2>组件示例</h2>
        <p>延续当前文档页的组织方式，把每个组件都拆成视觉、规格、说明和使用场景，方便持续扩展成完整组件库文档。</p>
      </div>

      <div className="component-doc-grid">
        {components.map((item) => (
          <ComponentCard key={item.name} item={item} />
        ))}
      </div>
    </section>
  )
}

function App() {
  const [copyMessage, setCopyMessage] = useState('')
  const {
    brand,
    overview,
    principles,
    colorSystem,
    darkModeSystem,
    typographySystem,
    spacing,
    shadowSystem,
    components,
  } = specDocument

  useEffect(() => {
    if (!copyMessage) {
      return undefined
    }

    const timeoutId = window.setTimeout(() => {
      setCopyMessage('')
    }, 1800)

    return () => window.clearTimeout(timeoutId)
  }, [copyMessage])

  async function handleCopy(value, message) {
    try {
      await navigator.clipboard.writeText(value)
      setCopyMessage(message)
    } catch {
      setCopyMessage('复制失败，请检查浏览器权限')
    }
  }

  return (
    <div className="docs-shell">
      <Header brand={brand} />

      <div className="docs-layout">
        <LeftSidebar overview={overview} />

        <main className="docs-main">
          <Intro brand={brand} />
          <Principles principles={principles} />
          <ColorSystem colorSystem={colorSystem} onCopy={handleCopy} />
          <DarkModeSystem darkModeSystem={darkModeSystem} onCopy={handleCopy} />
          <TypographySystem typographySystem={typographySystem} />
          <BasicTokenTable
            id="spacing"
            kicker="Tokens"
            title="间距系统"
            description="间距系统推荐按层级表达，保证组件、区块和页面都围绕同一套 spacing token 工作。"
            columns={['Token', 'Value', 'Usage', 'Note']}
            rows={spacing}
          />
          <ShadowSystem shadowSystem={shadowSystem} onCopy={handleCopy} />
          <Components components={components} />
        </main>

        <RightSidebar overview={overview} />
      </div>

      <div className={`copy-toast${copyMessage ? ' is-visible' : ''}`} role="status" aria-live="polite">
        {copyMessage}
      </div>
    </div>
  )
}

export default App
