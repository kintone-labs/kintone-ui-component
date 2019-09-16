const renderToPlaceHolder = (divID, code) => {
  return `
    <script id="${divID}-script">
      (function() {
        eval("${code.replace(/\n/g,'')}")
        if (typeof kucContainer !== 'undefined') {
          document.getElementById('${divID}').append(kucContainer)
        }
        else if (typeof component !== 'undefined') {
          document.getElementById('${divID}').append(component.render())
        }
        var currentTag = document.getElementById("${divID}-script")
        currentTag.parentNode.removeChild(currentTag)
      })()
      
    </script>
  `;
}

const KUCComponentRenderer = (md) => {
  md.renderer.rules.fence_custom.KUCComponentRenderer = function(
    tokens,
    idx,
    options,
    env,
    self
  ) {
    try {
      let param = JSON.parse(tokens[idx].params.split(' ')[1])
      return `<div class='kuc-preview' id=${param.id}></div>${renderToPlaceHolder(param.id, tokens[idx].content)}`
    } catch (error) {
      console.log(error)
      return ''
    }
  };
}

module.exports = {KUCComponentRenderer}