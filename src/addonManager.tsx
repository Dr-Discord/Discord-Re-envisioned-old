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
    copyLink,
    copied,
    copyLinkIcon
  } = getModule(["titleRegion"])
  const InfoFilled = getModule("InfoFilled").default
  const Tooltip = getModule("Tooltip").default
  const Download = getModule("Download").default
  const Clickable = getModule("Clickable").default
  const HelpCircle = getModule("HelpCircle").default
  const Link = getModule("Link").default
  let to:number|undefined
  
  return React.memo(({ href }:any) => {
    const [copiedText, setCopiedText] = React.useState(false)
    const spl = href.replace("dr://", "").split("/")
    
    return (
      <div className={wrapper}>
        <Text size={Text.Sizes.SIZE_12} className={titleRegion}>
          <strong className={title}>{spl[0]}</strong>
          <a 
            className={infoLink} 
            onClick={() => alert("Title", "Body")}
          ><HelpCircle className={infoIcon} /></a>
          <Clickable className={[copyLink, copiedText ? copied : ""].join(" ")} onClick={() => {
            if (to) clearTimeout(to)
            copyText(href)
            setCopiedText(true)
            setTimeout(setCopiedText.bind(this, false), 2000)
          }}>
            <Link className={copyLinkIcon} />
            {copiedText ? "Link Copied!" : "Copy Link"}
          </Clickable>
          <Clickable className={copyLink}>
            <Tooltip text="Install">
              {(props:tooltipProps) => (
                <Download {...props} className={copyLinkIcon} />
              )}
            </Tooltip>
          </Clickable>
        </Text>
        <div className={content}>
          <div className={buildInfo}>
            <div className={buildDetails}>Title</div>
            <Text className={subHead}>Info</Text>
          </div>
        </div>
      </div>
    )
  })
}