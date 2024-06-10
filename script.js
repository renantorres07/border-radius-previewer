document.addEventListener('DOMContentLoaded', function() {
    const previewBox = document.getElementById('preview-box')
    const ranges = document.querySelectorAll('input[type="range"]')
    const values = document.querySelectorAll('input[type="text"]')
    const copyButton = document.getElementById('copy-css')
    const cssOutput = document.getElementById('css-output')

    function updateBorderRadius() {
        const tl = ranges[0].value + 'px'
        const tr = ranges[1].value + 'px'
        const br = ranges[2].value + 'px'
        const bl = ranges[3].value + 'px'

        previewBox.style.borderRadius = `${tl} ${tr} ${br} ${bl}`

        values[0].value = tl
        values[1].value = tr
        values[2].value = br
        values[3].value = bl

        cssOutput.value = `border-radius: ${tl} ${tr} ${br} ${bl}`
    }

    ranges.forEach(range => {
        range.addEventListener('input', updateBorderRadius)
    })

    copyButton.addEventListener('click', function() {
        cssOutput.select()
        document.execCommand('copy')
        alert('CSS copied to clipboard!')
    })

    updateBorderRadius()
})