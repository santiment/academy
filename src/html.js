import React from "react"
import PropTypes from "prop-types"

const intercomScript = (
  <script
    dangerouslySetInnerHTML={{
      __html: `(function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',intercomSettings);}else{var d=document;var i=function(){i.c(arguments)};i.q=[];i.c=function(args){i.q.push(args)};w.Intercom=i;function l(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/cyjjko9u';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);}if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})()`,
    }}
  />
)

const firstPromoterScript = (
  <script
    dangerouslySetInnerHTML={{
      __html: `  (function(){var t=document.createElement("script");t.type="text/javascript",t.async=!0,t.src='https://cdn.firstpromoter.com/fprom.js',t.onload=t.onreadystatechange=function(){var t=this.readyState;if(!t||"complete"==t||"loaded"==t)try{$FPROM.init("ks4svmdl",".santiment.net")}catch(t){}};var e=document.getElementsByTagName("script")[0];
            e.parentNode.insertBefore(t,e)})();`,
    }}
  />
)

const gtagScript = (
  <script
    dangerouslySetInnerHTML={{
      __html: `window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'UA-100571693-14');
  gtag('config', 'UA-100571693-1');
  gtag('config', 'G-H53MB0V33X');`,
    }}
  />
)

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
        {intercomScript}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-100571693-14"
        ></script>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-H53MB0V33X"
        ></script>
        <link rel="stylesheet" href="/widgets.css" />
        <script src="/widgets.iife.js" defer></script>
        {gtagScript}
      </head>
      <body {...props.bodyAttributes} data-vaul-drawer-wrapper>
        {props.preBodyComponents}
        <noscript key="noscript" id="gatsby-noscript">
          This app works best with JavaScript enabled.
        </noscript>
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
        {firstPromoterScript}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
