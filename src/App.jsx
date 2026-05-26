import { createContext, useContext, useEffect, useRef, useState } from 'react'
import './App.css'
import questionFillIcon from './assets/question-fill.svg'
import dropdownArrowIcon from './assets/dropdown-arrow.svg'
import passwordHideIcon from './assets/password-hide.svg'
import passwordShowIcon from './assets/password-show.svg'
import { specDocument } from './data/specDocument'

function InputIcon({ kind }) {
  if (kind === 'search') {
    return (
      <svg viewBox="0 0 16 16" aria-hidden="true" className="input-icon-svg">
        <circle cx="7" cy="7" r="4.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M10.5 10.5L13.2 13.2" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
      </svg>
    )
  }

  if (kind === 'clear') {
    return (
      <svg viewBox="0 0 16 16" aria-hidden="true" className="input-icon-svg">
        <circle cx="8" cy="8" r="6" fill="currentColor" opacity="0.2" />
        <path d="M5.5 5.5L10.5 10.5M10.5 5.5L5.5 10.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.4" />
      </svg>
    )
  }

  if (kind === 'eye') {
    return <img src={passwordShowIcon} alt="" aria-hidden="true" className="input-icon-svg" />
  }

  if (kind === 'eye-off') {
    return <img src={passwordHideIcon} alt="" aria-hidden="true" className="input-icon-svg" />
  }

  if (kind === 'calendar') {
    return (
      <svg viewBox="0 0 16 16" aria-hidden="true" className="input-icon-svg">
        <rect x="2.2" y="3.2" width="11.6" height="10.2" rx="1.5" fill="none" stroke="currentColor" strokeWidth="1.3" />
        <path d="M2.5 6H13.5M5 2.5V4.5M11 2.5V4.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.3" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" className="input-icon-svg">
      <path d="M4.5 6.5L8 10l3.5-3.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
    </svg>
  )
}

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
        <a href="#inputs">组件</a>
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
      <div className="palette-header palette-header-with-description" style={{ background: palette.accent }}>
        <div>
          <span>{palette.category}</span>
          <h3>{palette.name}</h3>
          <p className="palette-header-description">{palette.description}</p>
        </div>
        <div className="palette-header-meta">
          <strong>{palette.anchor.token}</strong>
          <small>{palette.anchor.value}</small>
        </div>
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
  const useDarkPreviewText =
    group.title === '文本色' && group.items.every((item) => item.value.startsWith('rgba(255,255,255'))

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
              className={`semantic-preview${item.invert ? ' semantic-preview-dark' : ''}${
                useDarkPreviewText ? ' semantic-preview-light-text' : ''
              }`}
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

function DarkModeCard({ item, onCopy }) {
  const previewClassName = `dark-token-preview${item.lightText ? ' dark-token-preview-light' : ''}`

  return (
    <div className="dark-token-item">
      <button
        type="button"
        className="dark-token-card"
        onClick={() => onCopy(item.value, `${item.name} copied`)}
        aria-label={`Copy ${item.name} ${item.value}`}
      >
        <div className={previewClassName} style={{ background: item.value }}>
          <strong>{item.name}</strong>
          <span>{item.valueLabel || item.value}</span>
        </div>
      </button>
      {item.usage ? <p className="dark-token-usage">{item.usage}</p> : null}
    </div>
  )
}

function DarkModeSystem({ darkModeSystem, onCopy }) {
  return (
    <section className="doc-section dark-mode-section" id="dark-mode">
      <div className="section-heading">
        <span className="section-kicker">Dark Mode</span>
        <h2>Dark Mode 深色模式</h2>
      </div>

      <div className="dark-panel">
        <div className="subsection-heading dark-subsection">
          <h3>中性色</h3>
          <p>{darkModeSystem.neutralDescription}</p>
        </div>

        <div className="palette-grid palette-grid-single">
          <PaletteScale palette={darkModeSystem.neutralPalette} onCopy={onCopy} />
        </div>
      </div>

      <div className="dark-panel">
        <div className="subsection-heading dark-subsection">
          <h3>背景色</h3>
        </div>

        <div className="dark-token-grid">
          {darkModeSystem.backgroundItems.map((item) => (
            <DarkModeCard key={item.name} item={item} onCopy={onCopy} />
          ))}
        </div>
      </div>

      <div className="dark-panel">
        <div className="subsection-heading dark-subsection">
          <h3>文本色</h3>
          <p>{darkModeSystem.textDescription}</p>
        </div>

        <div className="dark-token-grid">
          {darkModeSystem.textItems.map((item) => (
            <DarkModeCard key={item.name} item={item} onCopy={onCopy} />
          ))}
        </div>
      </div>

      <div className="dark-panel">
        <div className="subsection-heading dark-subsection">
          <h3>边框色</h3>
        </div>

        <div className="dark-token-grid dark-token-grid-single">
          {darkModeSystem.borderItems.map((item) => (
            <DarkModeCard key={item.name} item={item} onCopy={onCopy} />
          ))}
        </div>
      </div>

      <div className="dark-panel">
        <div className="subsection-heading dark-subsection">
          <h3>分割线</h3>
        </div>

        <div className="dark-token-grid dark-token-grid-single">
          {darkModeSystem.dividerItems.map((item) => (
            <DarkModeCard key={item.name} item={item} onCopy={onCopy} />
          ))}
        </div>
      </div>

      <div className="dark-panel">
        <div className="subsection-heading dark-subsection">
          <h3>填充色</h3>
        </div>

        <div className="dark-token-grid">
          {darkModeSystem.fillItems.map((item) => (
            <DarkModeCard key={item.name} item={item} onCopy={onCopy} />
          ))}
        </div>
      </div>

      <div className="dark-panel">
        <div className="subsection-heading dark-subsection">
          <h3>深色模式使用规则</h3>
          <p>用于帮助设计和开发快速判断在深色背景下该使用哪一种边框、分割线或填充层级。</p>
        </div>

        <div className="dark-rule-list">
          {darkModeSystem.usageRules.map((rule) => (
            <article key={rule.label} className="dark-rule-card">
              <div className="dark-rule-head">
                <strong>{rule.label}</strong>
                <code>{rule.value}</code>
              </div>
              <p>{rule.description}</p>
            </article>
          ))}
        </div>
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

      <div className="typography-canvas">
        <div className="typography-panel">
          <div className="subsection-heading">
            <h3>字体选择</h3>
            <p>{typographySystem.fontIntro}</p>
          </div>

          <div className="font-stack-card">
            <code>{typographySystem.fontStack}</code>
          </div>

          <FontSelectionTable fontSelection={typographySystem.fontSelection} />

          <div className="language-panel">
            <div className="language-heading">
              <h4>特殊语言</h4>
              <p>{typographySystem.specialLanguage.description}</p>
            </div>

            <div className="language-examples">
              <div className="language-row">
                <span className="language-label">示例文本</span>
                <p className="language-copy">{typographySystem.specialLanguage.sampleCn}</p>
              </div>

              <div className="language-row">
                <span className="language-label">翻译文本</span>
                <p className="language-copy language-copy-ar">{typographySystem.specialLanguage.sampleAr}</p>
              </div>
            </div>
          </div>
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
            <p>最小单位4pt</p>
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
      </div>
    </section>
  )
}

function CornerCard({ item, onCopy }) {
  return (
    <article className="corner-card">
      <div className="corner-demo-stage">
        <div className="corner-demo-block" style={{ borderRadius: `${item.radius}px` }}>
          <span className="corner-demo-value">{item.degree}</span>
          {item.radius > 0 ? (
            <>
              <span className="corner-anchor corner-anchor-top-left" aria-hidden="true" />
              <span className="corner-anchor corner-anchor-top-right" aria-hidden="true" />
              <span className="corner-anchor corner-anchor-bottom-left" aria-hidden="true" />
              <span className="corner-anchor corner-anchor-bottom-right" aria-hidden="true" />
            </>
          ) : null}
        </div>
      </div>

      <div className="corner-meta">
        <button type="button" className="copy-chip" onClick={() => onCopy(item.css, '圆角参数已复制')}>
          <code>{item.css}</code>
        </button>
        <div className="corner-labels">
          <strong>{item.label}</strong>
          <span>
            {item.token}：{item.value}
          </span>
        </div>
      </div>
    </article>
  )
}

function CornerSystem({ cornerSystem, onCopy }) {
  return (
    <section className="doc-section" id="corners">
      <div className="section-heading">
        <span className="section-kicker">Corner Radius</span>
        <h2>{cornerSystem.title}</h2>
        <p>{cornerSystem.description}</p>
      </div>

      <div className="corner-intro-card">
        <p>{cornerSystem.intro}</p>
      </div>

      <div className="corner-stack">
        {cornerSystem.items.map((item) => (
          <CornerCard key={item.token} item={item} onCopy={onCopy} />
        ))}
      </div>
    </section>
  )
}

function InputControl({ item }) {
  const isDisabled = item.state === 'disabled'
  const valueText = item.value || item.placeholder
  const showPlaceholder = !item.value
  const suffixKind = getInputSuffixKind(item)
  const controlClassName = [
    'input-spec-control',
    `is-${item.state || 'default'}`,
    item.prefix ? 'has-prefix' : '',
    suffixKind ? 'has-suffix' : '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={controlClassName}>
      {item.prefix ? (
        <span className="input-spec-icon input-spec-icon-prefix" aria-hidden="true">
          <InputIcon kind={item.prefix} />
        </span>
      ) : null}
      <span className={`input-spec-value${showPlaceholder ? ' is-placeholder' : ''}${isDisabled ? ' is-disabled-value' : ''}`}>{valueText}</span>
      {suffixKind ? (
        <span className="input-spec-icon input-spec-icon-suffix" aria-hidden="true">
          <InputIcon kind={suffixKind} />
        </span>
      ) : null}
    </div>
  )
}

function getInputSuffixKind(item) {
  if (item.clearable) return 'clear'
  if (item.type === 'password') return 'eye'
  if (item.type === 'date') return 'calendar'
  if (item.type === 'select') return 'chevron'
  if (item.type === 'search') return 'search'
  return null
}

function InteractiveInputControl({ item }) {
  const [value, setValue] = useState(item.defaultValue || item.value || '')
  const [showPassword, setShowPassword] = useState(false)
  const suffixKind = item.type === 'password' ? (showPassword ? 'eye' : 'eye-off') : getInputSuffixKind(item)
  const showClear = suffixKind === 'clear' && value
  const isReadOnly = item.type === 'select' || item.type === 'date'
  const placeholder = item.placeholder || (!value ? item.value : '')
  const controlClassName = [
    'input-spec-control',
    'input-spec-control-real',
    'input-spec-control-interactive',
    item.prefix ? 'has-prefix' : '',
    suffixKind ? 'has-suffix' : '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={controlClassName}>
      {item.prefix ? (
        <span className="input-spec-icon input-spec-icon-prefix" aria-hidden="true">
          <InputIcon kind={item.prefix} />
        </span>
      ) : null}
        <label className="input-spec-input-wrap">
          <input
            type={item.type === 'password' && !showPassword ? 'password' : 'text'}
            value={value}
            placeholder={placeholder}
            readOnly={isReadOnly}
            onChange={(event) => setValue(event.target.value)}
            aria-label={item.label}
          />
        </label>
        {showClear ? (
        <button type="button" className="input-spec-clear-btn" onClick={() => setValue('')} aria-label="清空内容">
          <InputIcon kind="clear" />
          </button>
        ) : item.type === 'password' ? (
          <button
            type="button"
            className="input-spec-clear-btn"
            onClick={() => setShowPassword((current) => !current)}
            aria-label={showPassword ? '隐藏密码' : '显示密码'}
          >
            <InputIcon kind={suffixKind} />
          </button>
        ) : suffixKind ? (
          <span className={`input-spec-icon input-spec-icon-suffix${showClear ? '' : suffixKind === 'clear' ? ' input-spec-icon-empty' : ''}`} aria-hidden="true">
            {suffixKind === 'clear' ? null : <InputIcon kind={suffixKind} />}
        </span>
      ) : null}
    </div>
  )
}

function FormLabel({ item }) {
  return (
    <div className={`input-form-label input-form-label-${item.orientation || 'horizontal'}`}>
      {item.required ? <span className="input-required">*</span> : null}
      <span>{item.label}</span>
    </div>
  )
}

function InputShowcaseItem({ item, isForm = false }) {
  if (isForm) {
    const isInteractiveForm = (item.orientation === 'horizontal' || item.orientation === 'vertical') && item.state !== 'error'
    const formClassName = `input-form-item input-form-item-${item.orientation}${item.helper ? ' has-helper' : ''}`
    const showCaption = item.caption && item.state !== 'error'

    return (
      <article className={formClassName}>
        <div className="input-form-label-slot">
          <FormLabel item={item} />
        </div>
        <div className="input-form-control-slot">
          {isInteractiveForm ? <InteractiveInputControl item={item} /> : <InputControl item={{ ...item, state: item.state || 'default' }} />}
        </div>
        {showCaption ? <span className="input-form-caption">{item.caption}</span> : null}
        {item.helper ? <p className="input-form-helper">{item.helper}</p> : null}
      </article>
    )
  }

  const showLabel = item.label && item.state !== 'error'

  return (
    <article className={`input-demo-item${item.helper ? ' has-helper' : ''}`}>
      {item.interactive ? <InteractiveInputControl item={item} /> : <InputControl item={item} />}
      {showLabel ? <span className="input-demo-caption">{item.label}</span> : null}
      {item.helper ? <p className="input-demo-helper">{item.helper}</p> : null}
    </article>
  )
}

function InputSection({ section }) {
  const isForm = section.key.includes('form')
  const isSingleDemo =
    section.key === 'basic' ||
    section.key === 'icon' ||
    section.key === 'form-horizontal' ||
    section.key === 'form-vertical' ||
    section.key === 'password'

  return (
    <section className="input-spec-block">
      <div className="input-spec-block-head">
        <h3>{section.title}</h3>
        {section.note ? <p className="input-spec-note">{section.note}</p> : null}
      </div>

        {section.description ? <p className="input-spec-description">{section.description}</p> : null}

        {isSingleDemo ? (
          <div className={`input-basic-demo-panel${section.items.length > 1 ? ' is-multi' : ''}`}>
            {section.items.map((item) => (
              <InputShowcaseItem key={`${section.key}-${item.caption || item.label}-${item.state || 'default'}`} item={item} isForm={isForm} />
            ))}
          </div>
        ) : (
        <div className={`input-spec-grid${isForm ? ' is-form-grid' : ''}`}>
          {section.items.map((item) => (
            <InputShowcaseItem key={`${section.key}-${item.caption || item.label}-${item.type}`} item={item} isForm={isForm} />
          ))}
        </div>
      )}
    </section>
  )
}

function InputSystem({ inputSystem }) {
  return (
    <section className="doc-section input-system-section" id="inputs">
      <div className="section-heading">
        <span className="section-kicker">Input</span>
        <h2>{inputSystem.title}</h2>
        <p>{inputSystem.description}</p>
      </div>

      <div className="input-spec-intro-card">
        <p>{inputSystem.intro}</p>
      </div>

      <div className="input-spec-canvas">
        {inputSystem.sections.map((section) => (
          <InputSection key={section.key} section={section} />
        ))}
      </div>
    </section>
  )
}

const frameworks = ['Next.js', 'SvelteKit', 'Nuxt.js', 'Remix', 'Astro']
const groupedFrameworks = [
  { label: 'React 系', items: ['Next.js', 'Remix'] },
  { label: '全栈框架', items: ['SvelteKit', 'Nuxt.js'] },
  { label: '内容站点', items: ['Astro'] },
]
const disabledFrameworks = ['Astro']
const multipleDropdownItems = ['第一项选项', '第二项选项', '第三项选项', '已禁用的选项', '第五项内容较长的选项展示']
const multipleDisabledItems = ['已禁用的选项']
const ComboboxContext = createContext(null)

function DropdownChevronIcon({ open = false }) {
  return (
    <img src={dropdownArrowIcon} alt="" aria-hidden="true" className={`dropdown-icon-svg${open ? ' is-open' : ''}`} />
  )
}

function DropdownCheckIcon() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" className="dropdown-check-svg">
      <path d="M3.5 8.5L6.4 11.1L12.3 4.9" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" />
    </svg>
  )
}

function DropdownSearchIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="dropdown-empty-svg">
      <circle cx="11" cy="11" r="5.5" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="M15.2 15.2L19 19" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
    </svg>
  )
}

function Combobox({
  items,
  children,
  defaultValue = '',
  defaultQuery = '',
  placeholder = '',
  disabled = false,
  clearable = false,
  visualState = 'default',
  forceOpen = false,
  interactive = true,
  groupedItems = null,
  disabledItems = [],
  searchable = false,
}) {
  const wrapperRef = useRef(null)
  const [isOpen, setIsOpen] = useState(forceOpen)
  const [selectedValue, setSelectedValue] = useState(defaultValue)
  const [inputValue, setInputValue] = useState(defaultQuery || defaultValue)
  const [activeValue, setActiveValue] = useState(defaultValue)
  const allItems = items || groupedItems?.flatMap((group) => group.items) || []
  const normalizedQuery = inputValue.trim().toLowerCase()
  const shouldFilter = normalizedQuery && normalizedQuery !== selectedValue.trim().toLowerCase()
  const filteredItems = shouldFilter ? allItems.filter((item) => item.toLowerCase().includes(normalizedQuery)) : allItems
  const filteredGroups = groupedItems
    ? groupedItems
        .map((group) => ({
          ...group,
          items: shouldFilter ? group.items.filter((item) => item.toLowerCase().includes(normalizedQuery)) : group.items,
        }))
        .filter((group) => group.items.length)
    : []

  useEffect(() => {
    if (!forceOpen) {
      return undefined
    }

    setIsOpen(true)
    return undefined
  }, [forceOpen])

  useEffect(() => {
    if (!interactive || forceOpen) {
      return undefined
    }

    function handlePointerDown(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsOpen(false)
        setInputValue(selectedValue)
      }
    }

    window.addEventListener('pointerdown', handlePointerDown)
    return () => window.removeEventListener('pointerdown', handlePointerDown)
  }, [forceOpen, interactive, selectedValue])

  const contextValue = {
    activeValue,
    clearable,
    disabled,
    disabledItems,
    filteredGroups,
    filteredItems,
    forceOpen,
    groupedItems,
    inputValue,
    interactive,
    isOpen,
    placeholder,
    selectedValue,
    setActiveValue,
    setInputValue,
    setIsOpen,
    setSelectedValue,
    searchable,
    visualState,
    wrapperRef,
  }

  return (
    <ComboboxContext.Provider value={contextValue}>
      <div ref={wrapperRef} className="dropdown-combobox">
        {children}
      </div>
    </ComboboxContext.Provider>
  )
}

function useComboboxContext() {
  const context = useContext(ComboboxContext)

  if (!context) {
    throw new Error('Combobox components must be used within Combobox.')
  }

  return context
}

function ComboboxInput({ placeholder = '' }) {
  const {
    clearable,
    disabled,
    forceOpen,
    inputValue,
    interactive,
    isOpen,
    selectedValue,
    setActiveValue,
    setInputValue,
    setIsOpen,
    setSelectedValue,
    searchable,
    visualState,
  } = useComboboxContext()
  const [isHovered, setIsHovered] = useState(false)
  const showPlaceholder = !inputValue
  const showClear = clearable && selectedValue && isHovered && !isOpen && !forceOpen
  const trailingIconKind = searchable ? 'search' : 'chevron'
  const controlClassName = [
    'dropdown-trigger',
    `is-${visualState}`,
    isHovered && !disabled && !isOpen && !forceOpen ? 'is-hover' : '',
    disabled ? 'is-disabled' : '',
    forceOpen || isOpen ? 'is-focus-open' : '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={controlClassName} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <input
        type="text"
        value={inputValue}
        placeholder={placeholder}
        readOnly={!interactive || disabled}
        onFocus={() => {
          if (!disabled && interactive) {
            setIsOpen(true)
          }
        }}
        onChange={(event) => {
          setInputValue(event.target.value)
          if (!disabled && interactive) {
            setIsOpen(true)
          }
        }}
        className={showPlaceholder ? 'is-placeholder' : ''}
      />
      {showClear ? (
        <button
          type="button"
          className="dropdown-clear-btn"
          onClick={() => {
            setActiveValue('')
            setSelectedValue('')
            setInputValue('')
            setIsOpen(false)
          }}
          aria-label="清空已选项"
        >
          <InputIcon kind="clear" />
        </button>
      ) : (
        <span className="dropdown-trigger-icon" aria-hidden="true">
          {trailingIconKind === 'search' ? <InputIcon kind="search" /> : <DropdownChevronIcon open={forceOpen || isOpen} />}
        </span>
      )}
    </div>
  )
}

function ComboboxContent({ children }) {
  const { forceOpen, isOpen } = useComboboxContext()

  if (!forceOpen && !isOpen) {
    return null
  }

  return <div className="dropdown-menu">{children}</div>
}

function ComboboxEmpty({ children }) {
  const { filteredGroups, filteredItems, groupedItems } = useComboboxContext()
  const hasResults = groupedItems ? filteredGroups.length > 0 : filteredItems.length > 0

  if (hasResults) {
    return null
  }

  return (
    <div className="dropdown-empty-state">
      <DropdownSearchIcon />
      <span>{children}</span>
    </div>
  )
}

function ComboboxList({ children }) {
  const { filteredGroups, filteredItems, groupedItems } = useComboboxContext()

  if (groupedItems) {
    return (
      <div className="dropdown-list dropdown-list-grouped">
        {filteredGroups.map((group) => (
          <div key={group.label} className="dropdown-group">
            <div className="dropdown-group-label">{group.label}</div>
            {group.items.map((item) => children(item))}
          </div>
        ))}
      </div>
    )
  }

  return <div className="dropdown-list">{filteredItems.map((item) => children(item))}</div>
}

function ComboboxItem({ value, children }) {
  const { activeValue, disabledItems, setActiveValue, setInputValue, setIsOpen, setSelectedValue } = useComboboxContext()
  const isActive = activeValue === value
  const isDisabled = disabledItems.includes(value)

  return (
    <button
      type="button"
      className={`dropdown-item${isActive ? ' is-active' : ''}${isDisabled ? ' is-disabled' : ''}`}
      onMouseDown={(event) => event.preventDefault()}
      onClick={() => {
        if (isDisabled) {
          return
        }

        setActiveValue(value)
        setSelectedValue(value)
        setInputValue(value)
        setIsOpen(false)
      }}
      disabled={isDisabled}
    >
      <span>{children}</span>
      {isActive ? <DropdownCheckIcon /> : null}
    </button>
  )
}

function ExampleCombobox(props) {
  const { placeholder = '选择一个框架', ...comboboxProps } = props

  return (
    <Combobox items={frameworks} disabledItems={disabledFrameworks} {...comboboxProps}>
      <ComboboxInput placeholder={placeholder} />
      <ComboboxContent>
        <ComboboxEmpty>未找到项目。</ComboboxEmpty>
        <ComboboxList>
          {(item) => (
            <ComboboxItem key={item} value={item}>
              {item}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  )
}

function MultiSelectDemo({
  defaultSelected = ['第一项选项', '第三项选项'],
  disabled = false,
  clearable = false,
  defaultOpen = false,
  interactive = true,
}) {
  const [selectedValues, setSelectedValues] = useState(defaultSelected)
  const [isOpen, setIsOpen] = useState(defaultOpen)
  const [isHovered, setIsHovered] = useState(false)
  const showClear = clearable && selectedValues.length > 0 && isHovered && !disabled && !isOpen
  const triggerClassName = [
    'dropdown-trigger',
    'dropdown-trigger-multiple',
    isHovered && !disabled && !isOpen ? 'is-hover' : '',
    isOpen ? 'is-focus-open' : '',
    disabled ? 'is-disabled' : '',
  ]
    .filter(Boolean)
    .join(' ')

  function toggleValue(value) {
    if (!interactive || disabled || multipleDisabledItems.includes(value)) {
      return
    }

    setSelectedValues((current) => (current.includes(value) ? current.filter((item) => item !== value) : [...current, value]))
  }

  return (
    <div className="dropdown-combobox">
      <div
        className={triggerClassName}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => {
          if (!interactive || disabled) {
            return
          }

          setIsOpen((current) => !current)
        }}
      >
        <div className="dropdown-multi-tags">
          {selectedValues.map((value) => (
            <span key={value} className={`dropdown-tag${disabled ? ' is-disabled' : ''}`}>
              <span>{value}</span>
              {!disabled ? (
                <button
                  type="button"
                  className="dropdown-tag-close"
                  onClick={(event) => {
                    event.stopPropagation()
                    setSelectedValues((current) => current.filter((item) => item !== value))
                  }}
                  aria-label={`移除${value}`}
                >
                  <InputIcon kind="clear" />
                </button>
              ) : null}
            </span>
          ))}
        </div>

        {showClear ? (
          <button
            type="button"
            className="dropdown-clear-btn"
            onClick={(event) => {
              event.stopPropagation()
              setSelectedValues([])
              setIsOpen(false)
            }}
            aria-label="清空所有选项"
          >
            <InputIcon kind="clear" />
          </button>
        ) : (
          <span className="dropdown-trigger-icon" aria-hidden="true">
            <DropdownChevronIcon open={isOpen} />
          </span>
        )}
      </div>

      {isOpen ? (
        <div className="dropdown-menu">
          <div className="dropdown-list">
            {multipleDropdownItems.map((item) => {
              const isActive = selectedValues.includes(item)
              const isDisabled = multipleDisabledItems.includes(item)

              return (
                <button
                  key={item}
                  type="button"
                  className={`dropdown-item${isActive ? ' is-active' : ''}${isDisabled ? ' is-disabled' : ''}`}
                  onMouseDown={(event) => event.preventDefault()}
                  onClick={() => toggleValue(item)}
                  disabled={isDisabled}
                >
                  <span>{item}</span>
                  {isActive ? <DropdownCheckIcon /> : null}
                </button>
              )
            })}
          </div>
        </div>
      ) : null}
    </div>
  )
}

function DropdownSpecCard({ item }) {
  if (item.type === 'open-standard') {
    return (
      <article className="dropdown-spec-item dropdown-spec-item-open">
        <h4>{item.label}</h4>
        <ExampleCombobox defaultValue={item.value} forceOpen={true} interactive={false} />
      </article>
    )
  }

  if (item.type === 'interactive-basic') {
    return (
      <article className="dropdown-spec-item dropdown-spec-item-single">
        <ExampleCombobox clearable={true} />
        <span className="dropdown-spec-caption">{item.label}</span>
        {item.helper ? <p className="dropdown-spec-helper">{item.helper}</p> : null}
      </article>
    )
  }

  if (item.type === 'interactive-searchable') {
    return (
      <article className="dropdown-spec-item dropdown-spec-item-single">
        <ExampleCombobox clearable={true} searchable={true} placeholder="输入以搜索..." />
        <span className="dropdown-spec-caption">{item.label}</span>
        {item.helper ? <p className="dropdown-spec-helper">{item.helper}</p> : null}
      </article>
    )
  }

  if (item.type.startsWith('multiple-')) {
    const multipleProps = {
      defaultSelected: ['第一项选项', '第三项选项'],
    }

    if (item.type === 'multiple-disabled') {
      multipleProps.disabled = true
      multipleProps.defaultSelected = ['第一项选项', '第二项选项']
      multipleProps.interactive = false
    }

    if (item.type === 'multiple-clearable') {
      multipleProps.clearable = true
      multipleProps.defaultSelected = ['第一项选项', '第二项选项', '第三项选项']
    }

    if (item.type === 'multiple-opened') {
      multipleProps.defaultOpen = true
      multipleProps.defaultSelected = ['第一项选项', '第三项选项']
    }

    return (
      <article
        className={`dropdown-spec-item dropdown-spec-item-multiple dropdown-spec-item-${item.type}${
          item.type === 'multiple-opened' ? ' dropdown-spec-item-multiple-open' : ''
        }`}
      >
        <h4>{item.label}</h4>
        <MultiSelectDemo {...multipleProps} />
        {item.helper ? <p className="dropdown-spec-note">{item.helper}</p> : null}
      </article>
    )
  }

  if (item.type === 'open-grouped') {
    return (
      <article className="dropdown-spec-item dropdown-spec-item-open">
        <h4>{item.label}</h4>
        <Combobox
          items={frameworks}
          groupedItems={groupedFrameworks}
          defaultValue={item.value}
          forceOpen={true}
          interactive={false}
        >
          <ComboboxInput placeholder="选择一个框架" />
          <ComboboxContent>
            <ComboboxList>
              {(groupItem) => (
                <ComboboxItem key={groupItem} value={groupItem}>
                  {groupItem}
                </ComboboxItem>
              )}
            </ComboboxList>
          </ComboboxContent>
        </Combobox>
      </article>
    )
  }

  if (item.type === 'open-empty') {
    return (
      <article className="dropdown-spec-item dropdown-spec-item-open">
        <h4>{item.label}</h4>
        <Combobox
          items={[]}
          placeholder={item.placeholder}
          forceOpen={true}
          interactive={false}
        >
          <ComboboxInput placeholder={item.placeholder} />
          <ComboboxContent>
            <ComboboxEmpty>无匹配数据</ComboboxEmpty>
            <ComboboxList>
              {(framework) => (
                <ComboboxItem key={framework} value={framework}>
                  {framework}
                </ComboboxItem>
              )}
            </ComboboxList>
          </ComboboxContent>
        </Combobox>
      </article>
    )
  }

  const comboboxProps = {
    items: frameworks,
    interactive: false,
    placeholder: item.placeholder || '请选择一项',
  }

  if (item.type === 'hover') {
    comboboxProps.visualState = 'hover'
  }

  if (item.type === 'selected') {
    comboboxProps.defaultValue = item.value
  }

  if (item.type === 'clearable') {
    comboboxProps.defaultValue = item.value
    comboboxProps.clearable = true
    comboboxProps.visualState = 'hover'
  }

  if (item.type === 'error') {
    comboboxProps.defaultValue = item.value
    comboboxProps.visualState = 'error'
  }

  if (item.type === 'disabled') {
    comboboxProps.disabled = true
  }

  if (item.type === 'disabled-filled') {
    comboboxProps.disabled = true
    comboboxProps.defaultValue = item.value
  }

  return (
    <article className="dropdown-spec-item">
      <h4>{item.label}</h4>
      <Combobox {...comboboxProps}>
        <ComboboxInput placeholder={comboboxProps.placeholder} />
      </Combobox>
    </article>
  )
}

function DropdownSection({ section }) {
  const isSingleDemo = section.key === 'basic' || section.key === 'searchable'

  return (
    <section className="dropdown-spec-block">
      <div className="dropdown-spec-head">
        <h3>{section.title}</h3>
        <p>{section.description}</p>
      </div>

      {isSingleDemo ? (
        <div className="dropdown-spec-panel dropdown-spec-panel-single">
          <DropdownSpecCard item={section.items[0]} />
        </div>
      ) : (
        <div className={`dropdown-spec-panel dropdown-spec-panel-${section.key}`}>
          {section.items.map((item) => (
            <DropdownSpecCard key={`${section.key}-${item.label}`} item={item} />
          ))}
        </div>
      )}
    </section>
  )
}

function DropdownSystem({ dropdownSystem }) {
  return (
    <section className="doc-section dropdown-system-section" id="dropdowns">
      <div className="section-heading">
        <span className="section-kicker">SELECT</span>
        <h2>{dropdownSystem.title}</h2>
        <p>{dropdownSystem.description}</p>
      </div>

      <div className="input-spec-intro">
        <p>{dropdownSystem.intro}</p>
      </div>

      <div className="dropdown-spec-canvas">
        {dropdownSystem.sections.map((section) => (
          <DropdownSection key={section.key} section={section} />
        ))}
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
    cornerSystem,
    shadowSystem,
    inputSystem,
    dropdownSystem,
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
          <CornerSystem cornerSystem={cornerSystem} onCopy={handleCopy} />
          <ShadowSystem shadowSystem={shadowSystem} onCopy={handleCopy} />
          <InputSystem inputSystem={inputSystem} />
          <DropdownSystem dropdownSystem={dropdownSystem} />
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
