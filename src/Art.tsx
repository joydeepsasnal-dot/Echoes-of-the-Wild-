import {useEffect,useRef} from 'react';
// Original low-resolution painted environments, rendered without external assets.
export function paint(c:CanvasRenderingContext2D,w:number,h:number,world=0,t=0){
 c.save();c.scale(w/960,h/540);let seed=723+world*73;const rand=()=>{seed=seed*16807%2147483647;return seed/2147483647};
 const p=[['#071e28','#153d49','#2a6269','#498b81','#123e42','#235e53','#57966b','#bad99b'],['#17243d','#355674','#5c88a0','#97c2c8','#244354','#4e788a','#9cc9cc','#e1f1de'],['#302339','#694653','#a16b66','#d6a27b','#52393d','#85614c','#bd9561','#f5d9a3'],['#241a2e','#493045','#7b454f','#ad6960','#3b2834','#643d43','#9c5c4c','#f6bd82'],['#171a34','#353759','#5a5683','#9689b4','#242944','#434e70','#819aa3','#e0d6b7']][world];
 const rect=(x:number,y:number,a:number,b:number,color:string)=>{c.fillStyle=color;c.fillRect(Math.round(x),Math.round(y),Math.round(a),Math.round(b))};
 const poly=(points:number[][],color:string)=>{c.fillStyle=color;c.beginPath();points.forEach(([x,y],i)=>i?c.lineTo(x,y):c.moveTo(x,y));c.closePath();c.fill()};
 const glow=(x:number,y:number,r:number,color:string)=>{let g=c.createRadialGradient(x,y,0,x,y,r);g.addColorStop(0,color);g.addColorStop(1,'transparent');c.fillStyle=g;c.fillRect(x-r,y-r,r*2,r*2)};
 let sky=c.createLinearGradient(0,0,0,540);sky.addColorStop(0,p[0]);sky.addColorStop(.65,p[2]);sky.addColorStop(1,p[1]);c.fillStyle=sky;c.fillRect(0,0,960,540);
 glow(690,140,290,world===3?'#db805430':'#a9e0c52a');for(let i=0;i<120;i++){let x=rand()*960,y=rand()*285;rect(x,y,rand()>.94?2:1,1,'#c8dac37a')}
 // luminous moon and softly broken cloud banks
 glow(734,103,65,'#d6edc92b');c.fillStyle=p[7];c.beginPath();c.arc(734,103,24,0,Math.PI*2);c.fill();c.fillStyle=p[1];c.beginPath();c.arc(724,96,23,0,Math.PI*2);c.fill();
 for(let i=0;i<22;i++){let x=rand()*960,y=60+rand()*220;rect(x,y,20+rand()*110,2+rand()*4,p[3]+'20');rect(x+12,y-2,rand()*50,2,p[3]+'18')}
 for(let layer=0;layer<3;layer++){let pts=[[0,540]];for(let x=-40;x<1040;x+=40)pts.push([x,220+layer*56+Math.sin(x*.012+layer*2)*30+rand()*44]);pts.push([1040,540]);poly(pts,p[layer+1]);for(let i=1;i<pts.length-2;i++){if(world===1)poly([pts[i],[pts[i][0]+15,pts[i][1]+15],[pts[i][0]+28,pts[i][1]+5]],'#bfd8d029')}}
 // distant temples and terraces
 for(let i=0;i<5;i++){let x=640+i*18,y=228+(i%2)*10;rect(x,y,10,65,p[1]);rect(x-3,y-5,16,5,p[2]);rect(x+3,y+12,3,21,p[0]);}rect(630,291,113,6,p[2]);rect(640,299,100,4,p[1]);
 if(world===2){poly([[720,340],[820,214],[920,340]],p[2]);poly([[820,214],[840,340],[920,340]],p[1]);rect(812,302,15,38,p[0])}
 if(world===3){poly([[490,360],[620,215],[653,215],[810,360]],p[1]);poly([[620,215],[636,229],[653,215]],'#e9a06b');for(let i=0;i<15;i++)rect(630+rand()*30,180-rand()*55,2,3,'#edb27c')}
 // valley river / lava, its reflections and waterfalls
 poly([[620,330],[665,330],[728,390],[649,434],[812,540],[345,540],[580,438],[635,397]],world===3?'#b67358':p[3]);
 for(let i=0;i<100;i++){let y=350+rand()*190;let x=560+(rand()-.45)*(y-320)*1.4;rect(x,y,3+rand()*25,1,p[7]+'40')}
 rect(650,296,18,103,p[3]);rect(654,297,4,101,p[7]+'85');rect(664,301,2,96,p[7]+'75');for(let i=0;i<12;i++)rect(640+rand()*40,394+rand()*5,rand()*9,1,p[7]+'80');
 const pine=(x:number,y:number,s:number,col:string)=>{rect(x-2,y-s,4,s,col);for(let j=0;j<6;j++){let yy=y-s+j*s*.13;poly([[x,yy-s*.25],[x-s*(.1+j*.055),yy+s*.23],[x+s*(.1+j*.055),yy+s*.23]],col)}};
 for(let l=0;l<2;l++)for(let i=0;i<40;i++){let x=rand()*1050,y=345+l*60+rand()*70;pine(x,y,30+rand()*65,p[l===0?2:4])}
 // detailed moss covered island on the right
 const island=[[535,435],[569,425],[587,429],[622,416],[656,418],[680,406],[731,410],[750,425],[803,426],[832,442],[823,462],[787,472],[775,492],[735,502],[715,529],[680,510],[644,501],[626,480],[574,474]];
 poly(island,p[0]);poly(island.slice(0,10).concat([[812,454],[742,447],[687,439],[626,449],[574,450]]),p[4]);
 for(let i=0;i<220;i++){let x=559+rand()*249,y=441+rand()*44; if(y<455||rand()>.5)rect(x,y,2+rand()*9,2+rand()*4,[p[1],p[4],p[5]][i%3])}
 for(let i=0;i<140;i++){let x=550+rand()*260,y=429+Math.sin(x*.035)*9;rect(x,y,2+rand()*7,2,[p[5],p[6],p[7]][i%3]);if(i%5===0)rect(x,y-5,1,5,p[6])}
 // ancient portal arch
 let ax=742,ay=343;glow(ax,ay+36,68,'#8ce6d23a');c.fillStyle='#9be2cb18';c.beginPath();c.ellipse(ax,ay+37,21,36,0,0,7);c.fill();c.strokeStyle='#b0ecd1aa';c.lineWidth=2;c.beginPath();c.ellipse(ax,ay+37,21,36,0,0,7);c.stroke();
 for(let side of [-1,1])for(let j=0;j<5;j++){rect(ax+side*30-6,ay+8+j*15,12,14,p[2]);rect(ax+side*30-5,ay+8+j*15,3,13,p[3]);rect(ax+side*30-2,ay+13+j*15,3,3,p[6]);}rect(ax-25,ay-3,50,13,p[2]);rect(ax-18,ay-10,36,8,p[3]);rect(ax-11,ay-14,22,5,p[2]);
 // explorer silhouette, warm campfire, little mushrooms
 let px=643,py=423;rect(px-5,py-11,5,11,'#172d30');rect(px+3,py-11,5,11,'#172d30');rect(px-8,py-27,18,18,'#688c7c');rect(px-11,py-24,7,16,'#b18d5c');rect(px-6,py-38,15,13,'#d7b88b');rect(px-9,py-41,23,5,'#c2ca8d');rect(px-5,py-45,14,5,'#a2b97d');rect(px+5,py-34,2,3,p[0]);rect(px+10,py-25,4,12,'#d7b88b');
 glow(683,421,32,'#f2bc5655');rect(675,427,17,3,'#b79269');poly([[678,426],[677,418],[682,411],[685,417],[688,412],[690,425]],'#df9554');poly([[681,426],[683,416],[687,426]],'#ffe5a1');
 for(let x of [594,608,795]){rect(x,425,2,8,p[7]);rect(x-4,422,10,3,world===0?'#a3d5bb':p[6]);rect(x-2,420,6,2,p[7]);glow(x,422,11,'#aad9ba25')}
 // organic foreground trees: textured trunks, overlapping stepped foliage
 const tree=(x:number,y:number,s:number)=>{poly([[x-s*.05,y],[x-s*.07,y-s],[x+s*.035,y-s],[x+s*.08,y]],p[0]);rect(x+s*.015,y-s*.8,s*.015,s*.7,p[4]);for(let j=0;j<5;j++){let yy=y-s*.45-j*s*.12,dx=(j%2?1:-1)*s*.2;poly([[x,yy+12],[x+dx,yy-30],[x+dx+3,yy-25],[x,yy+22]],p[0]);}for(let i=0;i<80;i++){let ang=rand()*6.28,r=Math.sqrt(rand());let bx=x+Math.cos(ang)*s*.44*r,by=y-s*.9+Math.sin(ang)*s*.3*r;let size=12+rand()*30;rect(bx,by,size,size*.5,p[0]);rect(bx+3,by-3,size-6,5,p[4]);if(i%3===0)rect(bx+5,by-4,8,2,p[5])}};
 tree(911,500,360);tree(43,540,470);tree(-30,540,310);
 for(let i=0;i<130;i++){let x=rand()*960,y=512+rand()*30;rect(x,y,1,5+rand()*13,p[0]);if(i%4===0)rect(x-3,y,7,2,p[4])}
 // drifting motes are added separately by Landscape
 c.restore();
}
export function Landscape({world=0,className=''}:{world?:number,className?:string}){const ref=useRef<HTMLCanvasElement>(null);useEffect(()=>{const c=ref.current!,ctx=c.getContext('2d')!;const back=document.createElement('canvas');back.width=960;back.height=540;paint(back.getContext('2d')!,960,540,world);let frame:number,last=0;const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;const draw=(t:number)=>{if(t-last>45){last=t;ctx.drawImage(back,0,0);if(!reduce)for(let i=0;i<23;i++){let x=(i*173+t*.003*(i%3+1))%960,y=160+((i*77-t*.007+100000)%330);ctx.fillStyle=`rgba(219,236,171,${.25+Math.sin(t*.001+i)*.2})`;ctx.fillRect(x,y,2,2)}}if(!reduce)frame=requestAnimationFrame(draw)};draw(100);return()=>cancelAnimationFrame(frame)},[world]);return <canvas aria-hidden="true" className={className} ref={ref} width={960} height={540}/>}
