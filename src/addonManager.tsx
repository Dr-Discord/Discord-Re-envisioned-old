/**
 * @file addonManager.tsx
 * @author doggybootsy
 * @desc The addon manager for the addon system.
 * @license MIT
 * @version 1.0.0
 */

import { React } from "./react"
import getModule from "./getModule"
import { alert, copyText } from "./util"

export const initCard = () => {
  const Text = getModule("Text").default
  const Button = getModule(["BorderColors", "Colors"])
  const {
    wrapper,
    content,
    title,
    titleRegion,
    icon,
    infoLink,
    infoIcon,
    buildInfo,
    buildDetails,
    subHead,
  } = getModule(["titleRegion"])
  const InfoFilled = getModule("InfoFilled").default
  return React.memo(({ href }:any) => {
    const [isCopied, setCopied] = React.useState(false)
    const spl = href.replace("dr://", "").split("/")
    return (
      <div className={wrapper}>
        <Text size={Text.Sizes.SIZE_12} className={titleRegion}>
          <strong className={title}>{spl[0]}</strong>
          <a 
            className={infoLink} 
            onClick={(e) => {
              alert("title", "content")
            }}
          ><InfoFilled className={infoIcon} /></a>
          <div 
            className={`copyLink-1bBHaR${isCopied ? " copied-2eS1g4" : ""}`} 
            role="button" 
            tabIndex={0}
            onClick={() => {
              setCopied(true)
              copyText(href)
              setTimeout(() => setCopied(false), 2000)
            }}
          >
            <svg className="copyLinkIcon-aa2cFn" aria-hidden="false" width="24" height="24" viewBox="0 0 24 24">
              <g fill="none" fill-rule="evenodd">
                <path fill="currentColor" d="M10.59 13.41c.41.39.41 1.03 0 1.42-.39.39-1.03.39-1.42 0a5.003 5.003 0 0 1 0-7.07l3.54-3.54a5.003 5.003 0 0 1 7.07 0 5.003 5.003 0 0 1 0 7.07l-1.49 1.49c.01-.82-.12-1.64-.4-2.42l.47-.48a2.982 2.982 0 0 0 0-4.24 2.982 2.982 0 0 0-4.24 0l-3.53 3.53a2.982 2.982 0 0 0 0 4.24zm2.82-4.24c.39-.39 1.03-.39 1.42 0a5.003 5.003 0 0 1 0 7.07l-3.54 3.54a5.003 5.003 0 0 1-7.07 0 5.003 5.003 0 0 1 0-7.07l1.49-1.49c-.01.82.12 1.64.4 2.43l-.47.47a2.982 2.982 0 0 0 0 4.24 2.982 2.982 0 0 0 4.24 0l3.53-3.53a2.982 2.982 0 0 0 0-4.24.973.973 0 0 1 0-1.42z"></path>
                <rect width="24" height="24"></rect>
              </g>
            </svg>
          </div>
        </Text>
        <div className={content}>
          <div className={buildInfo}>
            <Text size={Text.Sizes.SIZE_14} className={subHead}>{spl[1]}</Text>
            <Text size={Text.Sizes.SIZE_16} className={buildDetails}>demo plugin for drdiscord random test ing lol</Text>
          </div>
          <Button 
            size={Button.Sizes.MEDIUM}
            color={Button.Colors.GREEN}
          >Install</Button>
        </div>
      </div>
    )
  })
}