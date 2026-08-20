import type { HeroBrandMarkOwnerProps } from '@deepseek-ai/dsh-client-ui-conversation/client'
import type { SidebarBrandMarkOwnerProps, SidebarBrandNameOwnerProps } from '@deepseek-ai/dsh-client-ui-sidebar/client'

type ZhizhiBrandMarkProps = HeroBrandMarkOwnerProps & SidebarBrandMarkOwnerProps

const ZHIZHI_TEAL = '#0d9488'
const ZHIZHI_AMBER = '#f59e0b'
const ZHIZHI_INK = '#1f2933'

/**
 * Render the zhizhi mark — a small "知" glyph over a teal-amber gradient disc —
 * using inline SVG so the bundle ships no image asset and the mark scales with
 * the host's requested size. The gradient and glyph match the design spec
 * documented at assets/style/colors.md.
 * @param props - Host-supplied mark presentation.
 * @returns the zhizhi mark SVG.
 */
export function ZhizhiBrandMark({ size, className }: ZhizhiBrandMarkProps) {
  const id = `zhizhi-mark-gradient-${size}`
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      role="img"
      aria-label="知之 · 赛博女儿"
      className={className}
    >
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={ZHIZHI_TEAL} />
          <stop offset="100%" stopColor={ZHIZHI_AMBER} />
        </linearGradient>
      </defs>
      <circle cx="32" cy="32" r="30" fill={`url(#${id})`} />
      <text
        x="32"
        y="42"
        textAnchor="middle"
        fontFamily="'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', system-ui, sans-serif"
        fontSize="34"
        fontWeight="700"
        fill="#ffffff"
      >
        知
      </text>
    </svg>
  )
}

/**
 * Render the zhizhi name as a bilingual wordmark — Chinese first, with the
 * short English subtitle that matches the README masthead. Inline so the
 * bundle ships no font asset.
 * @returns the zhizhi name wordmark.
 */
export function ZhizhiBrandName(_props: SidebarBrandNameOwnerProps) {
  return (
    <span
      style={{
        display: 'inline-flex',
        flexDirection: 'column',
        lineHeight: 1.1,
        fontFamily: "'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', system-ui, sans-serif",
      }}
    >
      <span style={{ fontSize: 16, fontWeight: 600, color: ZHIZHI_INK, letterSpacing: 0.5 }}>
        知之
      </span>
      <span style={{ fontSize: 11, color: ZHIZHI_TEAL, letterSpacing: 0.3 }}>
        Cyber Daughter
      </span>
    </span>
  )
}
