import React from "./react"

export default React.memo(({ props = {}, editor:_editor = () => {} }:any) => {
  const ref = React.useRef<any>()
  React.useEffect(() => {
    const editor = ace.edit(ref.current)
    _editor(editor)
  })
  return <div ref={ref} {...props}></div>
})