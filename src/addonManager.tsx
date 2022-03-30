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
        </Text>
        <div className={content}>
          <div className={buildInfo}>
            <Text size={Text.Sizes.SIZE_14} className={subHead}>demoPlugin</Text>
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