import React from 'react'
import "../CSS/Skill.css"
import img1 from "../assets/img1.jpg"

const Skills = () => {
  return (
    <div className=' page2   w-full  sm:h-[110vh]'>

    <div className=' mainbox  mt-[50px]  gap-10 px-[50px] p-[100px]  flex  items-center justify-center w-full  h-[100%]'>

        <div className=' box w-full h-[450px] bg-[rgb(26,106,255)] rounded-xl  transform motion-safe:hover:scale-110   box1'>
             
        <h1  className='  p-3 text-left  text-5xl     font-bold  text-white  '> Mern Stack Developer</h1>
          
          <div className='flex  flex-col gap-1  ml-2' >

            <div className='flex items-center m-1 gap-2'>
            <img  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB8klEQVR4nO2WuUoEQRCGP1GT9UzWSJN9As19AI+H0BcQTdTMxVDFIxIRD9QnMFgET9jEGwURPBLdNdNFvBLBg4a/oRlmd3adSYQtKKan+q/++6iuaihLWaAJmAUOgA2gH6h3Nsa0B9R3IGw87MY1ADfAD/Cpr9EnoFeac+wWc+2ZXMkyrIHGgCqgBUgCbw6ZaY8AzcKMyz5ICNnTKmocWzWw6RBvymalVj47YYgftG1WKoA1Ea5LTXtVfVZugfswxBkN0gmMAmlnpV5NC9Mln7u/krZ5AsfqK3AJ7EsvgBcfnAnA1lIIa4AV4NsZZA54B76Adh+fdvW9C2v9jG0ZiBVDeioncycX1D7Ud6aA74wwR/oawhO1j4PIrbOZdSWQcGb/DDQK163Ay+r8Ud+zg08o2pf1P1WIOKtoNPfRypkckx6cJTABaCUp27ljqxY+E0Sc9dzLKIgzQcTTclySQ76t7nRW0VFgq81xzet/Mii4bECcOudTSnBZ7IITaEfFRHZMhF9/uE4fPtdpsRjSYhLIi5KGTSCXSipeXK7UBBJVygyVq7M+RWLVp0isRV0kdlXiTKnLVxa38pTF7TDEQxp8POAhkFSfwUxE8RCo11Z7nz6PQI/0yefpcwXUEVLizmMvBfR5Bq2TLRXlY68s/19+AUHy8SxzEnNSAAAAAElFTkSuQmCC"></img>
            <h3 className='text-white font-semibold'>React.js</h3>
            </div>
            <div className='flex items-center m-1 gap-2'>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAACXBIWXMAAAsTAAALEwEAmpwYAAABrklEQVR4nNWVO0sDQRSF105sJJY+fkUk90YCltoLgoIEUXJnEaz8CQqCioVEjJp7A2ojCCr4qrQxVgELbYyVIGqTFIpWEhljwro72Owk4IEDu1PMt+fMzI7j/AelBAcVxweaAnO5t4cYysRQmlyPdTccSIzHSrDy46OGwtwsjHtgVTMmGwKb2MAOXaOGkOCn9vczQ8ndSUSsA0lwvpaKGN4Vw4cn5axVmLuTiCjGNw9Qb5py/V3gNZWJtlsDKoFp39o9E8PLr7EsuBaBeO2dnAQftH9/BBSswKY2+zoDO1PwjgSK/nHKYZeFdLGxwMSMN0rw1nBERi0AMR1MCIWqA+MrNoD7wSSQJ8YrQ9V74YEMeUN15yRwEaha4NJCwmB1JHCqbaraCStiPDNsmgMlcGio+sRGwjVDwl3t4Diuhk+Yw2HDxFuKYdtQ6VBoYFL6W0ng0VfdJglkfTU/pTLRNseGFOOkL03afz71XWkFVocKLnlui2VtT7pFq7Ca9K9LMdzru7FqKFI2PuI0VBWnxc3FU9r62WmGSGDO+i3/l/SaKcEFp1kijs1oNw0YRl9kpbs2Iiqx6QAAAABJRU5ErkJggg=="/>
            <h3 className='text-white font-semibold'>Mongoose</h3>
            </div>
            <div className='flex items-center m-1 gap-2'>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAACXBIWXMAAAsTAAALEwEAmpwYAAAD6UlEQVR4nN1XW4hbVRS947RaBB/F+mixydl30im10n4MPkAxIlbxURRkfi0zuXvfiVr6UYtvIypF8UOq+BiozNy9kxHyI374JTjQH8VaBG19ULCiaJVWS320WrWRfXOSnKaZkDvkTtENB5Jzz9lnnbPXfnne/1FGJmmxjjONw8u9MXaxEXrVCP6hA5he93nikgUHMjJJiw0TGaZDIFRzh2H8FQSfyu3YfM6CgMmW8TZg+rwJgnGfiYJbgcMNRvBTZ/4LPwpvTw2IXwlXgVDVOfBnw/TQFdXRs5uLSqWzDIf3GsEfmy8m9O7QdLC2b0CyU5suBMHnYo7Eh+A/IMTduJKpFJfGe5j+tKBOgODkcIWWzR9J47ZMP7Rehd6D6cK6XlUYmVhtBN9x9v9kBLd41dHBRFhMhHlg+tgh6jcKzpunQIQ3K9cc8n+mvOsNjNB2x/6/KE/64THKNSO0zTAebQHDZ7qDKY9ngemk3TCVEVru9VlgpnCpEdxpTXjSjyjT3VTWREkPys+WFilnfA5uAqaNIHhVduq+y+YEJvRVfFaE+TmVZiW80T7lgTlBC+23N7s+nqiODhqmx0HwcHuQrF+OPlK9HfUI1Tp9SwQImL6z/LolVsz0isOJw8C0xzDtiklsza9ub8p0Q+qAMpXiUsP4l/2/vT3BZipFvxnVGWdTB+TzxJUt04TrO+pkutuuOe7VvIF0AVXpAicafwmCj+m8emvz8Jo3oC/V7k2pcQgYH+lMZs369IERetkwXdOuJzVAKlAJrwbB1wzTJ62cd9qoajpaEECnSHV0MMMBaDkCZdpqBHc7uWxjqoAM07P2d7lbwASm73WdL/Rw2oDI8uXoEBdyndavnBlf0TCjzzSWKqDhCi1zytgjcY4q01YQCoDxAWB8sfE6GjRXRPdflCogz/O8oUowUnf5jkRucOfrrATXunp6AtRKrvRtr4CaxVxcV9PTIBiB0Fu23H1BA2On8qWn5KrBy5aoyouZnASXn64ID9ZvHW7w5iHKKQs6LoeH3iyu7LrBMJWcmuh3I/jk8kk6t/4tXN/4lo0Ka5IAyU5tWgJCj9qAGddCRuiJnjb75fC6U+KH0G/A9L4CbJg0SacKjPc0TFQ3N+7WM5JcKOaFzzTmKrJZ+5gvdEdPQKYL6+LGoFWeHATBcTdiJ5eSEhbzPlNRb9qtCmyIhgNNJcD0t30RjUPP52Tz+V6/ZfXO8fMM44PaOWh2dz0obrEFt2gT6bj823MFzb4IRMGwYfrQ6Uz2myi8C8rBnXWQzfm98/XE5FLzBtpb5q4t9kJJJm6ZaYcS3Y6X3PRwxiQ/W1qUuD3+r8i/YulWaCQ4etkAAAAASUVORK5CYII="></img>
            <h3 className='text-white font-semibold'>Node.js</h3>
            </div>

            <div className='flex items-center m-1 gap-2'>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB8ElEQVR4nO3Vu2sUcRDA8U9OoxFi0CJYCIJKtLhCIRiEVGKjgrEIqIWVohZpJLWCiIKCz3/AVBJE06iVYJHCSkWsbAUfKCTBF6IiRH5hOPbW29yupBC5LyzDvG5+v92bGTp0+N9ZhkO4j3eYw1s8wEHUcvG7Ua9Yox55DTbjGWZwGSPYGfIKZvEYGzI52/A5DluGwxGf8hbYhPe4jTUFScl+B6+wPmM/iq8lbl6PuBS/QHp9T6NoV5vkrij+KGe/iZfoLcjrDX+Ka7r+zCI3zbM2XvuejG0VXmCyIGcy/Cmuwb34plW4ils52wA+YSxnHwt78jfxBvsrFj4Q3zrPKL5jKPSh0Edb/civTGBZUvyPAt+1ONRAyKS3ZB6DqjEYea3ojrb7FrJ7scJ/+xRxLvxJFjKPI3GLqk8rduEnLoRMeku+YJ+lYV2M2rOhJ/khN3AaPMepJSi6HNN4mJnptdCnw9/ERTypWGR13C7LJbxGf87eH/bkb2Jj9FrZXt4Rk2trxjYS7TVckDMc/hTXxBl8xPY2RbfEwDmfO3han+NtcscjLsU3qMUAT47jWJFLWomT4Z+IvZ3oiQUzVXLBTEV8T95xItbjXCz/iZCz8e88litwA3fRpxx9UTzl/UE6zd5ohes4He1WOIE6dPin+A22+3hP6vlBawAAAABJRU5ErkJggg=="/>
            <h3 className='text-white font-semibold'>Express</h3>
            </div>
            <div className='flex items-center m-1 gap-2'>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAACXBIWXMAAAsTAAALEwEAmpwYAAACGklEQVR4nM3Uz4tNYRzH8bc0mpBSStGkrPxYWMjsJlv8BzaykZ0rRKNoDMqPuXM1UzLDdY6RzVCEXFfDzT3PzWayQhbKwsYGmyl0zXx0nzmdzrlx73mOuZOnPpunU6++3z7ngf/p6Dar5FPSBCsWB7xJn3wkn/7FAX0OhuA33WF150GPKyEoeZyN7ofoUZ71nQDLMXBG11lr7wu8UIHHnQA/ReA8Oqw8e1RANnl6E99P06WAYypnKJltqMdcAvT5rjzvIzA2pd6wTIb7MkhVdrqDPr1NmDSMdCbCoik1zXIFlC02nwPuoMf+pnVKx5EOIw3FwBFKCpiKYVLApSwTXkyAl5FyYU6H2CjS0xhkIvBBFvBhhBWRjsbAXAj+CTMWfOcOenyIwAtNWGO1pb9gxoI/NclSF6xbHr8sdgPpSAw7gfSkBWYidGN6sMi2aLpzMay/xRqbU2VXetBnr8XGw1Y2sJNIz1JiBqnGIRdw0IKDIXYKacoBMzaj6UGPu7oWTtfAnjPniKnxELhM+Nb+awNIFWadMWPBj+mwMbp0lbrOI72kngkzFpxVhe724C02a4S6qvzIjJkI3doeLLJbhq//jBlmFLA93VoN62SYUJChLMbmkWpsSIUl4Bo7ZHjlsMLXMvQ5QwlULFHAPgV8bgF9UUDO6f1sC1dYqYABmUSZGi0eU4U1CwbRDNfYJMOkAu6pypaOQQt1fgMXKoTBeCu3SAAAAABJRU5ErkJggg=="/>
            <h3 className='text-white font-semibold'>Firebase</h3>
            </div>
            <div className='flex items-center m-1 gap-2'>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAACXBIWXMAAAsTAAALEwEAmpwYAAABEUlEQVR4nOWSvUoDURCFD/gGKmgqGxvxhwi2Nha+gEF7C2trfQshjb3NndmAjSAx3DPrzxtYqCm01MKtxFLZG0m47i12Wz0wxcDMxznDAP9Ucr2MLO9AbQ+SrzUH9PozUF5C7Ssu3sL5xQZOOIDyHmpPCdgbnG9H85m1qpDMryCzrUmfdyD8iGBiBTI7hPgNKA+gPK6CnJtKONyE8r3qLkAfwylqSwcLUDuF2DPUPkNs4QnOr+bijGJdiA1HQ3wJS+VybZ352R9AynYRYtWJD+ERhPsQro8OaEUMY3noncm8bYf/qtL9/K++DeFrwt0QwgeI9evHLZ9OeJOIewF3N10fNAZyFcLd8Es9LjUH/Al9Az6W0jAuqnnQAAAAAElFTkSuQmCC"/>
            <h3 className='text-white font-semibold'>Tailwindcss</h3>
            </div>
            <div className='flex items-center m-1 gap-2'>
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAABS0lEQVR4nOWVvUoDQRSFP1MIARWxilrbKAg2om2qWAgiEuzWwtrS9QH0DSJio5amVPAZBJ9BSaXYSMCfoIVuGLkLw+bO7g6ZQvDAhZnZc8/ZubNzF/4L1oB3IJEw40ZIgwtLPI3zUOLzQEcx6MgzL4wALaANNIFj4EcRT+Nb+IZ7KeNKnsFOjlhSMiKX+BjwGMDgGZjQDPYCiCcSRmsAq8CHI+EL2AdmJGJZ07hGY8VVpmWgpyTFCjdWeD3RyIW2i2mFV3O8fSHsG5tImLJkMavw3orEfUp04FuiokOOPQ55Y5jP9BPYBkbxxDjwVMLgjCEQlTBYF+4dcGvlpqU8suYDqGSaXUsaml3fKjAFvABdYNISnANe8ww0LFjt+lrWtoAr4AbYzOzg0NcA+bmYhN3fGZxauzpxCHoZ1OUSpRfuAVgEloD7EAZ/F33cY9zb2vtcfQAAAABJRU5ErkJggg=="/>
            <h3 className='text-white font-semibold'>REST API</h3>
            </div>

            {/* <div className='flex items-center m-1 gap-2'>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAABfklEQVR4nO3UvUvWcRQF8I+ZRAYRYkPZEA4O+QIJkYkVDVK+LUFhi4vaoiCRIEhtDfkC5RBuRjg0NPSiFiI1iRGCQ4QOTQ1u/hHyhSv8fPABHSzI34Efz4XD9557zz085MiR43/B6X8lPIm
            <h3 className='text-white font-semibold'>Flask</h3>
            </div> */}
            
         
         


          </div>
  </div>

        <div className=' box w-full h-[450px]  rounded-2xl bg-[rgb(26,106,255)] transform motion-safe:hover:scale-110   box2'>

        <h1  className='  p-4 text-left  text-5xl     font-bold  text-white  '>UI/UX Developer</h1>

        <div className=' m-2    flex flex-col gap-1'>

        <div className='flex items-center m-1 gap-2'>
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC80lEQVR4nO3UTUgUYRgH8LGQjn1Z7khBFOasJyE7RJQ6K+SMO/gBHjyV0Mwys+jswSjaKSmDKBIi1LTsyyJKuxjNbM6raKeohOjjEGW3dowE7cPZtFqfWEnUrd19ZcbdDv7hf3sPP97nfR+CWM4SBnYQ6QbrqAyyZJPBkO3RHS3bcnvKs7sfZLp9QX2uNvDRR6GWzrUd9YHNyjMYx1uDJSFWRyu3AvhcsSvT4Rlkbckqe1BM1naDcYzHQ2HB5oB3bYEFGTKQCGUsBhZpXRFrCfVpXwYZZMiw7TCfq8sSbITNLMJBGYuFya7XlmDBUnLPksB89HNLsLHitasNxjG1BDd22RJs5tYY8rrNsGnwFedbh7nJjCBLDtsHoxsJu/KR25hpsI77FmHj4KO9hP2BtCtsoLqDQ92XSvsGo9tT0d47KezqAJk+HGnPmZPN9R0BTbjxSPde62vxXB3Mtp3kL4dtCgdPFA4gVv0cPI2czdHNLEoz+51aCOaX0swpSjUbiQZYYQ+qDDb7ORiJh5qFUejLeko1h6NRC4BqqM0WmMLBvUQoZRamhS7GQ802J/C90BKqwQ0Ziht+4cCOVMAQpZrfcGCUat6yBPOXQiEOSuEAvDXhVzioP31pCXbMDQXYsAOLgKmhF8kbZTk8c2rmV8xR3iSsxs9BN+7jd6qhFiyYFiqwDGsogU2KGwwcWO7Dz+so1XyXYF20ErYuWDc8xlmwVGCCpFQT/f2uzEmnap6wbcHOBdIOHe+vls92dded7xyMrtx0p3P+6RzVzHdqoXpKNU9R6gQfAdsMIghpQHIISHogIAliVpdmbixpqdFqN/C69D4uKhUwAYmdCVEoybD9A/IaQZd+/HcwoVfai4VCSYZ5kLcQF8br4kDSYJHfyCMxjAVDUjORzAi6pGGMcZpH4s6kwjy6J5tH0lj8MUoXiFTkYK+Ux+vSm3+8q58CEk9XdVWtJFIVYUhIF/rEcgGJ5wQktvK6WC8icWvKQMsh5vIb21PPfj55IvYAAAAASUVORK5CYII="/>
            <h3 className='text-white font-semibold'>Figma</h3>
            </div>

            <div className='flex items-center m-1 gap-2'>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC50lEQVR4nNWWS4iOYRTHf24zQy4pPlkwhgWysZiFy1BEwky5fUiiCNmwYKOkJtGYryEWGhYYfKyQSxGLMS4LolwiuW0ozJTFjDFug06ddzpOz/t97zdZ8K+33vec//P83+c855zngf8AfYEqIANkgSZ9smqrBEr+pmAZ0AB8An7leYRzTMd0G8VAHfA1gaB/vmgUigoVHQbcDkz4DKgGFgBTgGnAEmA3cD/AvwmkChF9HZhgUoKxk4FrbuyrJOLFbqXfgM1Az6R/DfQADjjxG/nCXmfIP4DlFI4+QEsg7LVxA0a7RHquGXpe91NwGDikk2wHaoCDwAlggnLG5Ei4USHhhgD5ATAX6K+cOcAex7kLLAMGKqc38DZG/GioOYTqtN2I2lA2G857oJfjrI0RbvNNpso4fzqyrMbDJ88M55dkfGr8H837fEvMGEfWiZ8JCJc7Ydlnj/Vmb/fFJdkp41ikPTj6/gwMCEz8xHA+BMI9Tn1XgaVuYV1oNI6KwB6tCAjvd5yZzj9C7RuA6YbXGCc8FRikK41s5wLCj51wvfPLAr4DQ3TOoLAN9UK1nTa2DlMugvFaavcMp1lLKcIW4LK+L44LtU0uOQQE89yKVhr+DmCbtlPLmWU40t9X6/tOw5E+0IVK45BVoH//ztgvGP4j7VAp7ecRR7oaam/XLcOdXLKgPw6HVuOUchHsNTZpp4OBscAdM/ai4bToD68xZVieq4GgfTkiXFHbRBfKVRpm2b8IaceZDZzVEsIdk0cIoEyLPSKtM2GNbJeAh8BIM67Edabj2kb7ARtdgpYSg4wLrRwQW91ReSswrt5wOrVK0u60qyEHijQbrXi1Cka2TYFxtk6jbtVpvpv0cMmJlF5XQqeLTDY85tbxImbMS2BoPlErbldus3KXNoQKveylNYxvAvymQkRt2GtdwiV9OvRnCr7eWpTqzaEtgWCrlkxs9tINSNnIIS5ROAlc10fexSYdSRrRv43fGap/DgcXOVMAAAAASUVORK5CYII="/>
            <h3 className='text-white font-semibold'>Wordpress</h3>
            </div>

            <div className='flex items-center m-1 gap-2'>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAB9ElEQVR4nO2UQUhUURSGv5wSrIhQAhcVrYKgQBARDVoZs6hd1CpTsk2KoKthWkS00Z0OLRpzoytb1CKRgWhZuFHIsCBUonDhUEEgo4OITZz4H9y5vYezzvvD5d1zzn/u/d89514ICAgI+E9xBEjtw0mJx2egAJzyCHXANeAmcNSLHQNmgE+yzwAfgDHZOWAbeJSw+WOgDDwxYwKoAM880qT8NhaAw05sUH7LNdwFvgOtjsBVce576w7J/xU4jv7QHEXgkEh2GruOABtpZ5GCfJZraAP6gB6HcwXY059ekq8F2PHXaxKx4hBvy34BvNN8XLF6oKQcyzU8FMc/8pz8Vp4TwLLsKb8miwoMy56W3QtkNf/o/FlFORGeJghwS/FD3w2g0RcwquCc7HXZ54BOpwyn1UA2H3Hy8wkCUH50wjZuxHC4qmBJjWTzb4pZ823KdweY17yrRgGXPQG34gQ0qFmM8DKmTq/lm1VzlpWznwDr8i9eCezbHCfijQi/nfpHyHox41KDgLzXhO9lv4oTkHGOyTY668TavSuZSdjIbkOEtNax07oo3wVgS1z3yv5FVHsbb6mGvQ9rTjx6cHwBA7JPOo3c73G7JeyXmrrq6S3quDr4F9eBFeCnuL4Au6bnZY+riR8Qj3vAEvA8IR4QEBBwgPAHw3CkWYdEO+cAAAAASUVORK5CYII="></img>
            <h3 className='text-white font-semibold'>Wix Studio</h3>
            </div>


        </div>

        </div>


        <div className= ' box w-full h-[450px] rounded-2xl  bg-[rgb(26,106,255)]  transform motion-safe:hover:scale-110   box3'>
        <h1  className='  p-4 text-left  text-5xl     font-bold  text-white  '>APP Developer </h1>

        <div className=' m-2   flex flex-col gap-1'>
 
        <div className='flex items-center m-1 gap-2'>
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAABUElEQVR4nMXWPU7DMBTA8b8ELRNqCxyAgQE4QaXeAfYOjKxM9AxsjAwsfC0ZUS9RFfNxhZ4ACalzkCVbsqyktl+c9ElPifKhn/zs5BnkcQ5cAqd0ED1gCnwCpZNz4KANcB+4AVYe6OY3cJgLPAbugN8NYFZ8AMyABaAS8xHYlaJbiZk59oHXyBL7uQYKYJQypwtzXhj8WYgnzfm9mSfMi53gA+DPg3W+NSx7ab77WvzWPOTDuUb+AxxV/ZFWG+DW8Klzsw7OVfZ3F15GwjlGrtwuU3WjbAlXFr4QwG7ZX6TwmRCW4sqd47kQluDKhXUT/xLCqbjyv+WhWd0S2C64PeApFbb4gxC2eD+AK2rCNvG1EA+VXRGIQgiH8GUI1k38ukGeADvAlXd9TGRMGuD6HyGOUcU+OjY1TlP8YxuwFM8CY7Yvup/G7K/16o1eSJ3FPxNF2L386OnAAAAAAElFTkSuQmCC"/>
            <h3 className='text-white font-semibold'>Dart</h3>
            </div>

        <div className='flex items-center m-1 gap-2'>
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAACXBIWXMAAAsTAAALEwEAmpwYAAABPUlEQVR4nGNgGAU4gP3x/woOh/8vdzjyfxUGPvy/K3TVf2YGagGXw//l7I/8v+tw5P9/dGx/5P9D58P/lUYtIwhGg5EqwGU0NdI7GJ0O/ddzPPzfGBs2PvOflaqW2R/+34BNnQME11PkO5pYhstSdMvMDv6pxGUZyCEM5ACYpeiWMa/83MCy8vNTs/1/H1HsM2zVDwgjW8a88st/EMZiKWWWoQNky7BYSl3LGNa/F2Be+fk+uoUgzBq3/CpLwEwbBqqDVd/kmFd8voviw+jF9zk8p/xn95r6myVgpj1NLWWBWsbmO+0/S9DM/4xhsx8zRM2lXi0PB8u/K7BkbNzHEjTjP2P4bFQcNvs+Q/h0eCKjHgidKccYNusuhoUQ/JA2Ph0QS8OnKzCGz17OGD5rFQYOm93FELqKes3EIQUA7Ylqkf/EG0oAAAAASUVORK5CYII="/>
            <h3 className='text-white font-semibold'>Flutter</h3>
            </div>  

            <div className='flex items-center m-1 gap-2'>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAACXBIWXMAAAsTAAALEwEAmpwYAAACGklEQVR4nM3Uz4tNYRzH8bc0mpBSStGkrPxYWMjsJlv8BzaykZ0rRKNoDMqPuXM1UzLDdY6RzVCEXFfDzT3PzWayQhbKwsYGmyl0zXx0nzmdzrlx73mOuZOnPpunU6++3z7ngf/p6Dar5FPSBCsWB7xJn3wkn/7FAX0OhuA33WF150GPKyEoeZyN7ofoUZ71nQDLMXBG11lr7wu8UIHHnQA/ReA8Oqw8e1RANnl6E99P06WAYypnKJltqMdcAvT5rjzvIzA2pd6wTIb7MkhVdrqDPr1NmDSMdCbCoik1zXIFlC02nwPuoMf+pnVKx5EOIw3FwBFKCpiKYVLApSwTXkyAl5FyYU6H2CjS0xhkIvBBFvBhhBWRjsbAXAj+CTMWfOcOenyIwAtNWGO1pb9gxoI/NclSF6xbHr8sdgPpSAw7gfSkBWYidGN6sMi2aLpzMay/xRqbU2VXetBnr8XGw1Y2sJNIz1JiBqnGIRdw0IKDIXYKacoBMzaj6UGPu7oWTtfAnjPniKnxELhM+Nb+awNIFWadMWPBj+mwMbp0lbrOI72kngkzFpxVhe724C02a4S6qvzIjJkI3doeLLJbhq//jBlmFLA93VoN62SYUJChLMbmkWpsSIUl4Bo7ZHjlsMLXMvQ5QwlULFHAPgV8bgF9UUDO6f1sC1dYqYABmUSZGi0eU4U1CwbRDNfYJMOkAu6pypaOQQt1fgMXKoTBeCu3SAAAAABJRU5ErkJggg=="/>
            <h3 className='text-white font-semibold'>Firebase</h3>
            </div>
          
        </div>

        </div>



        <div className=' box  w-full h-[450px]    rounded-2xl  bg-[rgb(26,106,255)]  transform motion-safe:hover:scale-110  box4'>
        <h1  className='  p-3 text-left  text-5xl     font-bold  text-white  '> Java(DSA) Developer</h1>


          <div className='m-2   flex flex-col gap-1'>

          <div className='flex items-center m-1 gap-1'>
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAACkklEQVR4nMXWWaiWVRQG4CfLIRVNEYMCMb0ohAiTQFHUBu0miAoFESLBi0TECgfURHBAy4uGiywlKKigg0EFYpBQEuVA3alBWdRNSYFeWGhUnljwCh8/J8+g3/GFxcfe/7/Xu/baa+LqMQRTXSe8cD1IF+LYYJNOwq/YP5ikd+EndOP+wSJdgLMhfT97N2EmNmJ+G6Sr8XdIv8Yt2IAz+BkPtkG6NYQlJzEZX2X9BSa2Fb3dkdO4Da9n/RmGawnvheSvBNaN+DN7D2gRb4ekvoUR+Dd7K9okXtgRxYWPsldBNaxN8nfj6tuznoLzIV/aJvHN+Bwv9hDp27WMEXgr5bLwBP7BrGtFMD+3OISdmBfSy61wWiK7jHis42yl2itJu72Nc71ieSNnz2FT9hZFHs/3GTyH5/EGDuDRhp6N0bG6r8RVkd7B7w0DepIqnT/g0xSTTnffnf+9agC4BzswIzI90TwpjeFKWBPip/pLOjWurk70LOY2DCh5GKuSZrsxsuO2f+AIhvaXeCy6kru9ufxwI8gq8E7hZYzuL2kTd+RGT2Il1uNpLMa9MfAyhqZ2N28/IFS//Q0XE7lrQ7wrAfg9LmDz1ZTNkWnq5bYTeCnvvL/REHqS6s3bMKFD30MY0xfirigqkjs7fisFc/KOi/K9D+P/R1e97dF4qFdsbtziEyzp51QxKsZtSsf6pTHs39Db4cVJgUsx4FJG2G/wcbyyL+/9Jj7M2PNtanZ33n0LxkXndKzrq/UT80aVp3vwQSrUlxnyjmfdFSPWpWff2tAxI5PLyUYr7RPK4jr8SCpYU2knKqXqv8vwWmbuH1Ov6wkGhOrDdZsqgdVtDibya8L8LqNtube8UDesxjE7XaxH/AcP/K+aj0WcvAAAAABJRU5ErkJggg=="/>
            <h3 className='text-white font-semibold'>Java</h3>
            </div>


        <div className='flex items-center m-1 gap-2'>
          <img src="data:image/png;base64,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"></img>
            <h3 className='text-white font-semibold'>Data Structure</h3>
            </div>
            </div>
        </div>


    </div>
    
    
    </div>
  )
}

export default Skills
