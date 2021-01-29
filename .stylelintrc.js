module.exports = {
  extends: ['stylelint-config-standard-scss', 'stylelint-config-prettier'],
  plugins: ['stylelint-order', 'stylelint-nimbus-css-check'],
  rules: {
    'order/order': [
      'declarations',
      'custom-properties',
      'dollar-variables',
      'rules',
      'at-rules',
    ],
    'order/properties-order': [
      'position',
      'top',
      'right',
      'bottom',
      'left',
      'z-index',
      'display',
      'visibility',
      'float',
      'clear',
      'overflow',
      '-ms-overflow-x',
      '-ms-overflow-y',
      'overflow-x',
      'overflow-y',
      '-webkit-overflow-scrolling',
      'clip',
      '-webkit-align-content',
      '-ms-flex-line-pack',
      'align-content',
      '-webkit-box-align',
      '-moz-box-align',
      '-webkit-align-items',
      'align-items',
      '-ms-flex-align',
      '-webkit-align-self',
      '-ms-flex-item-align',
      '-ms-grid-row-align',
      'align-self',
      '-webkit-box-flex',
      '-webkit-flex',
      '-moz-box-flex',
      '-ms-flex',
      'flex',
      '-webkit-flex-flow',
      '-ms-flex-flow',
      'flex-flow',
      '-webkit-flex-basis',
      '-ms-flex-preferred-size',
      'flex-basis',
      '-webkit-box-orient',
      '-webkit-box-direction',
      '-webkit-flex-direction',
      '-moz-box-orient',
      '-moz-box-direction',
      '-ms-flex-direction',
      'flex-direction',
      '-webkit-flex-grow',
      '-ms-flex-positive',
      'flex-grow',
      '-webkit-flex-shrink',
      '-ms-flex-negative',
      'flex-shrink',
      '-webkit-flex-wrap',
      '-ms-flex-wrap',
      'flex-wrap',
      '-webkit-box-pack',
      '-moz-box-pack',
      '-ms-flex-pack',
      '-webkit-justify-content',
      'justify-content',
      '-webkit-box-ordinal-group',
      '-webkit-order',
      '-moz-box-ordinal-group',
      '-ms-flex-order',
      'order',
      '-webkit-box-sizing',
      '-moz-box-sizing',
      'box-sizing',
      'margin',
      'margin-top',
      'margin-right',
      'margin-bottom',
      'margin-left',
      'padding',
      'padding-top',
      'padding-right',
      'padding-bottom',
      'padding-left',
      'min-width',
      'min-height',
      'max-width',
      'max-height',
      'width',
      'height',
      'outline',
      'outline-width',
      'outline-style',
      'outline-color',
      'outline-offset',
      'border',
      'border-spacing',
      'border-collapse',
      'border-width',
      'border-style',
      'border-color',
      'border-top',
      'border-top-width',
      'border-top-style',
      'border-top-color',
      'border-right',
      'border-right-width',
      'border-right-style',
      'border-right-color',
      'border-bottom',
      'border-bottom-width',
      'border-bottom-style',
      'border-bottom-color',
      'border-left',
      'border-left-width',
      'border-left-style',
      'border-left-color',
      '-webkit-border-radius',
      '-moz-border-radius',
      'border-radius',
      '-webkit-border-top-left-radius',
      '-moz-border-radius-topleft',
      'border-top-left-radius',
      '-webkit-border-top-right-radius',
      '-moz-border-radius-topright',
      'border-top-right-radius',
      '-webkit-border-bottom-right-radius',
      '-moz-border-radius-bottomright',
      'border-bottom-right-radius',
      '-webkit-border-bottom-left-radius',
      '-moz-border-radius-bottomleft',
      'border-bottom-left-radius',
      '-webkit-border-image',
      '-moz-border-image',
      '-o-border-image',
      'border-image',
      '-webkit-border-image-source',
      '-moz-border-image-source',
      '-o-border-image-source',
      'border-image-source',
      '-webkit-border-image-slice',
      '-moz-border-image-slice',
      '-o-border-image-slice',
      'border-image-slice',
      '-webkit-border-image-width',
      '-moz-border-image-width',
      '-o-border-image-width',
      'border-image-width',
      '-webkit-border-image-outset',
      '-moz-border-image-outset',
      '-o-border-image-outset',
      'border-image-outset',
      '-webkit-border-image-repeat',
      '-moz-border-image-repeat',
      '-o-border-image-repeat',
      'border-image-repeat',
      '-webkit-border-top-image',
      '-moz-border-top-image',
      '-o-border-top-image',
      'border-top-image',
      '-webkit-border-right-image',
      '-moz-border-right-image',
      '-o-border-right-image',
      'border-right-image',
      '-webkit-border-bottom-image',
      '-moz-border-bottom-image',
      '-o-border-bottom-image',
      'border-bottom-image',
      '-webkit-border-left-image',
      '-moz-border-left-image',
      '-o-border-left-image',
      'border-left-image',
      '-webkit-border-corner-image',
      '-moz-border-corner-image',
      '-o-border-corner-image',
      'border-corner-image',
      '-webkit-border-top-left-image',
      '-moz-border-top-left-image',
      '-o-border-top-left-image',
      'border-top-left-image',
      '-webkit-border-top-right-image',
      '-moz-border-top-right-image',
      '-o-border-top-right-image',
      'border-top-right-image',
      '-webkit-border-bottom-right-image',
      '-moz-border-bottom-right-image',
      '-o-border-bottom-right-image',
      'border-bottom-right-image',
      '-webkit-border-bottom-left-image',
      '-moz-border-bottom-left-image',
      '-o-border-bottom-left-image',
      'border-bottom-left-image',
      'background',
      "-ms-filter:'progid:DXImageTransform.Microsoft.Alpha",
      'filter:progid:DXImageTransform.Microsoft.Alpha(Opacity',
      '-ms-interpolation-mode',
      '-webkit-filter',
      '-ms-filter',
      'filter',
      'background-color',
      'background-image',
      'background-attachment',
      'background-position',
      '-ms-background-position-x',
      '-ms-background-position-y',
      'background-position-x',
      'background-position-y',
      '-webkit-background-clip',
      '-moz-background-clip',
      'background-clip',
      'background-origin',
      '-webkit-background-size',
      '-moz-background-size',
      '-o-background-size',
      'background-size',
      'background-repeat',
      'object-fit',
      'box-decoration-break',
      '-webkit-box-shadow',
      '-moz-box-shadow',
      'box-shadow',
      'color',
      'table-layout',
      'caption-side',
      'empty-cells',
      'list-style',
      'list-style-position',
      'list-style-type',
      'list-style-image',
      'quotes',
      'content',
      'counter-increment',
      'counter-reset',
      '-ms-writing-mode',
      'vertical-align',
      'text-align',
      '-webkit-text-align-last',
      '-moz-text-align-last',
      '-ms-text-align-last',
      'text-align-last',
      'text-decoration',
      'text-emphasis',
      'text-emphasis-position',
      'text-emphasis-style',
      'text-emphasis-color',
      'text-indent',
      '-ms-text-justify',
      'text-justify',
      'text-outline',
      'text-transform',
      'text-wrap',
      '-ms-text-overflow',
      'text-overflow',
      'text-overflow-ellipsis',
      'text-overflow-mode',
      'text-shadow',
      'white-space',
      'word-spacing',
      '-ms-word-wrap',
      'word-wrap',
      '-ms-word-break',
      'word-break',
      '-moz-tab-size',
      '-o-tab-size',
      'tab-size',
      '-webkit-hyphens',
      '-moz-hyphens',
      'hyphens',
      'letter-spacing',
      'font',
      'font-weight',
      'font-style',
      'font-variant',
      'font-size-adjust',
      'font-stretch',
      'font-size',
      'font-family',
      'src',
      'line-height',
      'opacity',
      '-ms-interpolation-mode',
      'resize',
      'cursor',
      'nav-index',
      'nav-up',
      'nav-right',
      'nav-down',
      'nav-left',
      '-webkit-transition',
      '-moz-transition',
      '-ms-transition',
      '-o-transition',
      'transition',
      '-webkit-transition-delay',
      '-moz-transition-delay',
      '-ms-transition-delay',
      '-o-transition-delay',
      'transition-delay',
      '-webkit-transition-timing-function',
      '-moz-transition-timing-function',
      '-ms-transition-timing-function',
      '-o-transition-timing-function',
      'transition-timing-function',
      '-webkit-transition-duration',
      '-moz-transition-duration',
      '-ms-transition-duration',
      '-o-transition-duration',
      'transition-duration',
      '-webkit-transition-property',
      '-moz-transition-property',
      '-ms-transition-property',
      '-o-transition-property',
      'transition-property',
      '-webkit-transform',
      '-moz-transform',
      '-ms-transform',
      '-o-transform',
      'transform',
      '-webkit-transform-origin',
      '-moz-transform-origin',
      '-ms-transform-origin',
      '-o-transform-origin',
      'transform-origin',
      '-webkit-animation',
      '-moz-animation',
      '-ms-animation',
      '-o-animation',
      'animation',
      '-webkit-animation-name',
      '-moz-animation-name',
      '-ms-animation-name',
      '-o-animation-name',
      'animation-name',
      '-webkit-animation-duration',
      '-moz-animation-duration',
      '-ms-animation-duration',
      '-o-animation-duration',
      'animation-duration',
      '-webkit-animation-play-state',
      '-moz-animation-play-state',
      '-ms-animation-play-state',
      '-o-animation-play-state',
      'animation-play-state',
      '-webkit-animation-timing-function',
      '-moz-animation-timing-function',
      '-ms-animation-timing-function',
      '-o-animation-timing-function',
      'animation-timing-function',
      '-webkit-animation-delay',
      '-moz-animation-delay',
      '-ms-animation-delay',
      '-o-animation-delay',
      'animation-delay',
      '-webkit-animation-iteration-count',
      '-moz-animation-iteration-count',
      '-ms-animation-iteration-count',
      '-o-animation-iteration-count',
      'animation-iteration-count',
      '-webkit-animation-direction',
      '-moz-animation-direction',
      '-ms-animation-direction',
      '-o-animation-direction',
      'animation-direction',
      'pointer-events',
      'unicode-bidi',
      'direction',
      '-webkit-columns',
      '-moz-columns',
      'columns',
      '-webkit-column-span',
      '-moz-column-span',
      'column-span',
      '-webkit-column-width',
      '-moz-column-width',
      'column-width',
      '-webkit-column-count',
      '-moz-column-count',
      'column-count',
      '-webkit-column-fill',
      '-moz-column-fill',
      'column-fill',
      '-webkit-column-gap',
      '-moz-column-gap',
      'column-gap',
      '-webkit-column-rule',
      '-moz-column-rule',
      'column-rule',
      '-webkit-column-rule-width',
      '-moz-column-rule-width',
      'column-rule-width',
      '-webkit-column-rule-style',
      '-moz-column-rule-style',
      'column-rule-style',
      '-webkit-column-rule-color',
      '-moz-column-rule-color',
      'column-rule-color',
      'break-before',
      'break-inside',
      'break-after',
      'page-break-before',
      'page-break-inside',
      'page-break-after',
      'orphans',
      'widows',
      '-ms-zoom',
      'zoom',
      'max-zoom',
      'min-zoom',
      'user-zoom',
      'orientation',
    ],
    /** #NIMBUS-TPL#stylelint-rule#END */
  },
}