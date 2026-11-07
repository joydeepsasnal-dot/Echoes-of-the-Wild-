export const worlds=[
{name:'Enchanted Forest',short:'Forest',subtitle:'Where the journey begins',color:'#a9d46d',sky:'#143c49',ground:0x426b45,boss:'Ancient Tree Guardian',icon:'♧'},
{name:'Frozen Kingdom',short:'Frozen',subtitle:'Beyond the silent peaks',color:'#a4e1ee',sky:'#223c60',ground:0x6ea8bd,boss:'Frost Dragon',icon:'❄'},
{name:'Desert of Secrets',short:'Desert',subtitle:'Follow the forgotten sands',color:'#eac184',sky:'#5b4350',ground:0xaa7b45,boss:'Sand Golem',icon:'◇'},
{name:'Volcanic Realm',short:'Volcanic',subtitle:'A spark in the darkness',color:'#f89770',sky:'#3c283b',ground:0x8d5049,boss:'Lava Titan',icon:'♨'},
{name:'Celestial Kingdom',short:'Celestial',subtitle:'Among the fallen stars',color:'#c6b4fa',sky:'#26213f',ground:0x726599,boss:'The Forgotten King',icon:'✧'}];
export const levels=worlds.flatMap((w,wi)=>['The Awakening','Lost Trails','Guardian’s Gate'].map((name,i)=>({id:wi*3+i,world:wi,name:i===2?w.boss:name,length:2500+i*450,boss:i===2})));
