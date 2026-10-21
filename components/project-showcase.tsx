"use client";
import { useEffect, useState } from "react";
import { projectShowcases } from "@/lib/project-showcases";
export default function ProjectShowcase({projectId,locale}:{projectId:string;locale:"el"|"en"}) {
 const items=projectShowcases[projectId]??[];
 const [zoom,setZoom]=useState<number|null>(null);
 useEffect(()=>setZoom(null),[projectId]);
 if(!items.length)return null;
 const title=locale==="el"?"Επιλεγμένο περιεχόμενο":"Selected content";
 return <section className="project-showcase" aria-label={title}>
 <div className="project-showcase-heading"><div><div className="eyebrow">CONTENT SHOWCASE</div><h3>{title}</h3></div><span>{items.length} {locale==="el"?"δείγματα":"pieces"}</span></div>
 <div className="project-showcase-grid">{items.map((item,index)=>{
  const match=item.url.match(/instagram\.com\/(p|reel)\/([\w-]+)/);
  const embed=match?`https://www.instagram.com/${match[1]}/${match[2]}/embed/captioned/`:"";
  return <article className="project-showcase-card" key={item.url}>
   {item.type==="instagram"&&embed?<iframe className="project-instagram-embed" title={title+" "+(index+1)} src={embed} loading="eager" allow="encrypted-media; picture-in-picture" referrerPolicy="strict-origin-when-cross-origin"/>:<button type="button" className="project-showcase-image" onClick={()=>setZoom(index)}><img src={item.url} alt={item.label??title} loading="lazy"/></button>}
   <div className="project-showcase-meta"><span>{String(index+1).padStart(2,"0")} / {String(items.length).padStart(2,"0")}</span>{item.type==="instagram"?<a href={item.url} target="_blank" rel="noopener noreferrer">{locale==="el"?"Άνοιγμα στο Instagram ↗":"Open on Instagram ↗"}</a>:<span>{item.label}</span>}</div>
  </article>})}</div>
 {zoom!==null&&items[zoom]?.type==="image"?<div className="project-showcase-lightbox" role="dialog" aria-modal="true" aria-label={title} onMouseDown={()=>setZoom(null)}><button aria-label="Close" onClick={()=>setZoom(null)}>×</button><img src={items[zoom].url} alt={items[zoom].label??title} onMouseDown={e=>e.stopPropagation()}/></div>:null}
 </section>;
}
