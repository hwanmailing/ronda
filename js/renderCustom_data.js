const originalImages = new Map([...document.querySelectorAll('img[id]')].map(el=>[el.id,el.getAttribute('src')]));
// Shared by previews and the editor. Only explicit URL fields change destinations.
function updateElementByType(element, value, key = '') {
 if(!element || typeof value !== 'string') return false;
 if(!value.trim()){if(element.tagName==='IMG'&&originalImages.has(element.id))element.src=originalImages.get(element.id);return false;}
 const safeUrl = (text, image=false) => {try {const u=new URL(text,location.href); return (image ? ['http:','https:'] : ['http:','https:','mailto:','tel:']).includes(u.protocol);}catch{return false;}};
 if(element.tagName==='IMG'){if(safeUrl(value,true))element.src=value;return true;}
 if(element.tagName==='I'){if(/^[\w -]+$/.test(value))element.className=value.includes('fa-')?`fas ${value}`:value;return true;}
 if(/icon-color$/.test(key)){if(CSS.supports('color',value))element.style.color=value;return true;}
 if(element.tagName==='A' && /(?:href|link|url|email|phone|tel)$/.test(key)){
  const href=/email$/.test(key)?`mailto:${value}`:/phone$|tel$/.test(key)?`tel:${value}`:value;
  if(href!=='#' && safeUrl(href))element.setAttribute('href',href);return true;
 }
 // Preserve text formatting without accepting executable HTML from imported settings.
 const parts=value.split(/<br\s*\/?\s*>/i); element.replaceChildren();
 parts.forEach((part,i)=>{if(i)element.appendChild(document.createElement('br'));element.appendChild(document.createTextNode(part.replace(/<[^>]*>/g,'')));});return true;
}
function renderCustomData(data = typeof custom_data !== 'undefined' ? custom_data : {}) {
 Object.entries(data).forEach(([key,value])=>{const el=document.getElementById(key.replace(/_/g,'-'));if(el)updateElementByType(el,value,key);});
}
renderCustomData();
window.addEventListener('message',event=>{
 if(event.origin!==location.origin || event.source!==window.parent || event.data?.type!=='ronda:preview')return;
 renderCustomData(event.data.data || {});
});
