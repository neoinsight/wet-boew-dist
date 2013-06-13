/*!
 *
 * Web Experience Toolkit (WET) / Boîte à outils de l'expérience Web (BOEW)
 * wet-boew.github.io/wet-boew/License-eng.txt / wet-boew.github.io/wet-boew/Licence-fra.txt
 *
 * Version: v3.1.2-development Build: 2013-06-13 01:16 PM
 *
 */
(function(b){var a=window.pe||{fn:{}};a.fn.parsertable={onParserError:undefined,parse:function(o){var r=o,E=function(L,K){if(typeof a.fn.parsertable.onParserError==="function"){a.fn.parsertable.onParserError(L,K)}},J={allParserObj:[],nbDescriptionRow:0},C=[],i=[],g=0,D=0,F=0,u=[],z=0,y=false,H=false,G=[],m,l=[],n=false,k=[],f,e,v=[],I=false,d=b(r).has("tfoot"),x,h,j=false,t=false;if(b(o).get(0).nodeName.toLowerCase()!=="table"){E(1,o);return}if(b(r).tblparser){E(2,r);return}t=b(o).hasClass("hassum");b(r).data().tblparser=J;J.colgroup=C;if(!J.rowgroup){J.rowgroup=[]}if(!J.lstrowgroup){J.lstrowgroup=v}J.elem=r;J.uid=g;g+=1;J.colcaption={};J.colcaption.uid=g;g+=1;J.colcaption.elem=undefined;J.colcaption.type=7;J.colcaption.dataset=[];J.colcaption.summaryset=[];J.rowcaption={};J.rowcaption.uid=g;g+=1;J.rowcaption.elem=undefined;J.rowcaption.type=7;J.rowcaption.dataset=[];J.rowcaption.summaryset=[];J.col=[];function s(N){J.colcaption.elem=N;J.rowcaption.elem=N;var K={colcaption:J.colcaption,rowcaption:J.rowcaption,elem:N},L,O,M=[];if(b(N).children().length>0){b(N).contents().filter(function(){if(!L&&this.nodeType===3){L=b(this).text().replace(/^\s+|\s+$/g,"");if(L.length!==0){L=this;O=true;return}L=false}else{if(!L&&this.nodeType===1){L=this;return}}});b(N).children().filter(function(){if(O){M.push(this)}else{O=true}})}else{L=N}if(M.length>1){K.description=b(M)}else{if(M.length===1){K.description=M[0]}}if(L){K.caption=L}K.groupZero=J;K.type=1;J.groupheadercell=K;b(N).data().tblparser=K}function B(R,O){var M={elem:{},start:0,end:0,col:[],groupZero:J},K=0,Q,P,L,N;M.elem=R;if(R){b(R).data().tblparser=M}M.uid=g;g+=1;J.allParserObj.push(M);if(C.length!==0){M.start=C[C.length-1].end+1}else{M.start=1}if(R){b("col",R).each(function(){var U=b(this),T=U.attr("span")!==undefined?parseInt(U.attr("span"),10):1,S={elem:{},start:0,end:0,groupZero:J};S.uid=g;g+=1;J.allParserObj.push(S);S.start=M.start+K;S.end=M.start+K+T-1;S.elem=this;S.groupZero=J;U.data().tblparser=S;M.col.push(S);i.push(S);K+=T})}if(M.col.length===0){if(R){Q=b(R).attr("span")!==undefined?parseInt(b(R).attr("span"),10):1}else{if(typeof O==="number"){Q=O}else{E(31);return}}K+=Q;for(P=M.start,L=(M.start+K);P<L;P+=1){N={start:0,end:0,groupZero:J,elem:undefined};N.uid=g;g+=1;J.allParserObj.push(N);N.start=P;N.end=P;M.col.push(N);i.push(N)}}M.end=M.start+K-1;C.push(M)}function p(Y){var ae,L,ad,O,ab,aa,ac=[],ah,N,W,U,V,Q,ag,S,K,af,P,Z,T,ai,M,R,X;if(J.colgrouphead||I){return}I=true;if(Y&&Y>0){if(C.length>0&&(C[0].start!==1||(C[0].end!==Y&&C[0].end!==(Y+1)))){E(3);C=[]}}else{Y=0}for(ae=0,L=l.length;ae<L;ae+=1){X=l[ae];if(!X.type){X.type=1}for(ad=0,O=X.cell.length;ad<O;ad+=1){M=l[ae].cell[ad];M.scope="col";if(ae===0&&ad===0&&b(M.elem).html().length===0){M.type=6;if(!J.layoutCell){J.layoutCell=[]}J.layoutCell.push(M);ad=M.width-1;if(ad>=O){break}}T=l[ae+1];ai=(T?T.cell[ad]:"");if(!M.descCell&&M.elem.nodeName.toLowerCase()==="th"&&!M.type&&T&&T.uid!==M.uid&&ai&&!ai.type&&ai.elem.nodeName.toLowerCase()==="td"&&ai.width===M.width&&ai.height===1){T.type=5;ai.type=5;ai.row=X;M.descCell=ai;if(!J.desccell){J.desccell=[]}J.desccell.push(ai);ad=M.width-1;if(ad>=O){break}}if(!M.type){M.type=1}}}for(ae=0,L=l.length;ae<L;ae+=1){X=l[ae];if(X.type===5){for(ad=0,O=X.cell.length;ad<O;ad+=1){M=X.cell[ad];if(M.type!==5&&M.type!==6&&M.height===1){E(4,M.elem)}if(M.uid===l[ae-1].cell[ad].uid){M.height-=1}}J.nbDescriptionRow+=1}else{ac.push(X)}}J.colgrp=[];if(Y>0&&(C.length===1||C.length===0)){W={};U=[];V={start:(Y+1),end:z,col:[],groupZero:J,elem:undefined,type:2};V.uid=g;g+=1;J.allParserObj.push(V);if(V.start>V.end){E(5)}W=V;for(ae=V.start,L=V.end;ae<=L;ae+=1){Q={start:0,end:0,groupZero:J,elem:undefined};Q.uid=g;g+=1;J.allParserObj.push(Q);if(!J.col){J.col=[]}U.push(Q);Q.start=ae;Q.end=ae;Q.groupstruct=V;V.col.push(Q);i.push(Q)}J.colgrp[1]=[];J.colgrp[1].push(J.colcaption);if(Y>0){ag={start:1,elem:undefined,end:Y,col:[],groupZero:J,type:1};ag.uid=g;g+=1;J.allParserObj.push(ag);C.push(ag);C.push(W);J.colcaption.dataset=W.col;for(ae=ag.start,L=ag.end;ae<=L;ae+=1){Q={start:0,end:0,groupZero:J,elem:undefined};Q.uid=g;g+=1;J.allParserObj.push(Q);if(!J.col){J.col=[]}J.col.push(Q);Q.start=ae;Q.end=ae;Q.groupstruct=ag;ag.col.push(Q);i.push(Q)}for(ae=0,L=U.length;ae<L;ae+=1){J.col.push(U[ae])}}if(C.length===0){C.push(W);J.colcaption.dataset=W.col}for(ae=0,L=J.col.length;ae<L;ae+=1){R=J.col[ae];R.header=[];for(ad=0,O=ac.length;ad<O;ad+=1){for(ab=R.start,aa=R.end;ab<=aa;ab+=1){if((ad===0||(ad>0&&ac[ad].cell[ab-1].uid!==ac[ad-1].cell[ab-1].uid))&&ac[ad].cell[ab-1].type===1){R.header.push(ac[ad].cell[ab-1])}}}}}else{S=[];K=(Y===0?1:C[0].end+1);V={start:K,end:undefined,col:[],row:[],type:2};af=[];P=0;Z=false;b.each(C,function(){var ak=this,am,aj,al,an;P+=1;if(Z||J.colgrp[0]){E(6,ak);return}b.each(ak.col,function(){var ao=this;if(!J.col){J.col=[]}J.col.push(ao);ao.type=1;ao.groupstruct=ak});if(ak.start<K){if(Y!==ak.end){E(7,ak)}for(ae=0,L=ak.col.length;ae<L;ae+=1){R=ak.col[ae];R.header=[];for(ad=0,O=ac.length;ad<O;ad+=1){for(ab=R.start,aa=R.end;ab<=aa;ab+=1){if((ad===0||(ad>0&&ac[ad].cell[ab-1].uid!==ac[ad-1].cell[ab-1].uid))&&ac[ad].cell[ab-1].type===1){R.header.push(ac[ad].cell[ab-1])}}}}return}am=undefined;for(ae=0,L=ac.length;ae<L;ae+=1){N=ac[ae].cell[ak.end-1];if(!N&&ak.end>ac[ae].cell.length){E(7);break}if((N.colpos+N.width-1)===ak.end&&(N.colpos>=ak.start)){if(!am||am>(ae+1)){am=(ae+1)}}}if(!am){am=1}for(ae=(am-1),L=ac.length;ae<L;ae+=1){ah=ac[ae];for(ad=ak.start-1,O=ak.end;ad<O;ad+=1){N=ah.cell[ad];if(N.colpos<ak.start||(N.colpos+N.width-1)>ak.end){E(9);return}}}for(ae=af.length,L=(am-1);ae<L;ae+=1){N=ac[ae].cell[ak.start-1];if(N.uid!==ac[ae].cell[ak.end-1].uid||N.colpos>ak.start||N.colpos+N.width-1<ak.end){E(10);return}aj=N;aj.level=(ae+1);aj.start=aj.colpos;aj.end=aj.colpos+aj.width-1;aj.type=7;af.push(aj);if(!J.virtualColgroup){J.virtualColgroup=[]}J.virtualColgroup.push(aj);if(!J.colgrp[(ae+1)]){J.colgrp[(ae+1)]=[]}J.colgrp[(ae+1)].push(aj)}ak.header=[];for(ae=am-(am>=2?2:1);ae<ac.length;ae+=1){for(ad=ak.start;ad<=ak.end;ad+=1){if(ac[ae].cell[ad-1].rowpos===ae+1){ak.header.push(ac[ae].cell[ad-1]);ac[ae].cell[ad-1].colgroup=ak}ad+=ac[ae].cell[ad-1].width-1}}al=[];for(ae=0;ae<af.length-1;ae+=1){al.push(af[ae])}ak.parentHeader=al;if(af.length<am){if(!ak.type){ak.type=2;ak.level=am}af.push(ak);if(!J.colgrp[am]){J.colgrp[am]=[]}J.colgrp[am].push(ak)}an=false;for(ae=af.length-1;ae>=0;ae-=1){if(af[ae].end<=ak.end){if(af[ae].level<am&&l.length>0){ak.type=3}if(ak.type===3&&!an){af[af.length-1].summary=ak;an=true}af.pop()}}if(!t){ak.type=2}if(am===1&&J.colgrp[1]&&J.colgrp[1].length>1&&l.length>0){for(ae=0;ae<J.colgrp[1].length;ae+=1){if(J.colgrp[1][ae].type===3){ak.level=0;if(!J.colgrp[0]){J.colgrp[0]=[]}J.colgrp[0].push(ak);J.colgrp[1].pop();Z=true;break}}if(t){ak.type=3}}if(ak.level===1&&ak.type===2){ak.repheader="caption"}if(!J.col){J.col=[]}b.each(ak.col,function(){var ao=this;ao.type=ak.type;ao.level=ak.level;ao.groupstruct=ak;ao.header=[];for(ad=(am-1);ad<ac.length;ad+=1){for(ae=(ak.start-1);ae<ak.end;ae+=1){if((ac[ad].cell[ae].colpos>=ao.start&&ac[ad].cell[ae].colpos<=ao.end)||(ac[ad].cell[ae].colpos<=ao.start&&(ac[ad].cell[ae].colpos+ac[ad].cell[ae].width-1)>=ao.end)||((ac[ad].cell[ae].colpos+ac[ad].cell[ae].width-1)<=ao.start&&(ac[ad].cell[ae].colpos+ac[ad].cell[ae].width-1)>=ao.end)){if(ao.header.length===0||(ao.header.length>0&&ao.header[ao.header.length-1].uid!==ac[ad].cell[ae].uid)){ao.header.push(ac[ad].cell[ae]);ac[ad].cell[ae].level=ak.level}}}}})});if(!J.virtualColgroup){J.virtualColgroup=[]}b.each(J.virtualColgroup,function(){var aj=this;for(ae=(aj.start-1);ae<aj.end;ae+=1){if(!J.col[ae].headerLevel){J.col[ae].headerLevel=[]}J.col[ae].headerLevel.push(aj)}})}if(C.length>0&&Y>0){J.colgrouphead=C[0];J.colgrouphead.type=1}}function c(){if(!f.type||!f.level){q()}v.push(f);f={}}function w(){if(f&&f.type){c()}f={};f.elem=e;f.row=[];f.headerlevel=[];f.groupZero=J;f.uid=g;g+=1}function q(M){var L,K,N;if(j){f.type=3;f.level=0;k=[];return}if(k.length>0){if(f&&f.type&&f.row.length>0){e={};w()}f.type=2;f.row=k;for(L=0;L<k.length;L+=1){k[L].cell[0].type=7;k[L].cell[0].scope="row";k[L].cell[0].row=k[L];f.headerlevel.push(k[L].cell[0])}}if(k.length===0&&v.length===0){if(f.type&&f.type===1){e={};w()}f.type=2;f.level=1}if(k.length===0&&v.length>0&&!f.type&&C[0]&&(C[0].type===1||(!C[0].type&&C.length>0))&&!M){f.type=3}else{f.type=2}if(f.type===3&&!t){f.type=2;f.level=v[v.length-1].level}if(!f.level){if(v.length>0){K=v[v.length-1];if(f.type===2){if(f.headerlevel.length===K.headerlevel.length){f.level=K.level}else{if(f.headerlevel.length<K.headerlevel.length){N=f.headerlevel;f.headerlevel=[];for(L=0;L<(K.headerlevel.length-f.headerlevel.length);L+=1){f.headerlevel.push(K.headerlevel[L])}for(L=0;L<N.length;L+=1){f.headerlevel.push(N[L])}f.level=K.level}else{if(f.headerlevel.length>K.headerlevel.length){f.level=f.headerlevel.length+1}}}}else{if(f.type===3){if(K.type===3){f.level=K.level-1}else{f.level=K.level}if(f.level<0){E(12)}for(L=0;L<K.headerlevel.length;L+=1){if(K.headerlevel[L].level<f.level){f.headerlevel.push(K.headerlevel[L])}}}else{f.level="Error, not calculated";E(13)}}}else{f.level=1+k.length}}for(L=0;L<f.headerlevel.length;L+=1){f.headerlevel[L].level=L+1;f.headerlevel[L].rowlevel=f.headerlevel[L].level}k=[];if(f.level===undefined||f.level<0){E(14,f.elem)}}function A(Z){F+=1;var T=1,O="",aa=false,K=b(Z).children(),M={colgroup:[],cell:[],elem:Z,rowpos:F},R,L,S,Y,ab,N,X,V,U,P,Q,W;b(Z).data().tblparser=M;M.uid=g;g+=1;M.groupZero=J;J.allParserObj.push(M);R={cell:[],cgsummary:undefined,type:false};R.uid=g;g+=1;J.allParserObj.push(R);L=function(ac){if(!R.type){R.type=1}if(R.type!==1){M.colgroup.push(R);R={cell:[],type:1};R.uid=g;g+=1;J.allParserObj.push(R)}R.cell.push(ac);aa=ac.colpos+ac.width-1};S=function(ac){if(!R.type){R.type=2}if(R.type!==2){M.colgroup.push(R);R={cell:[],type:2};R.uid=g;g+=1;J.allParserObj.push(R)}R.cell.push(ac)};Y=function(){var ad,ac,ae;while(T<=z){if(!u[T]){break}ae=u[T];if(ae.spanHeight&&ae.spanHeight>0&&ae.colpos===T){if(ae.height+ae.rowpos-ae.spanHeight!==F){break}O=ae.elem.nodeName.toLowerCase();if(O==="th"){L(ae)}else{if(O==="td"){S(ae)}}if(ae.spanHeight===1){delete ae.spanHeight}else{ae.spanHeight-=1}for(ac=0;ac<ae.width;ac+=1){M.cell.push(ae)}T+=ae.width}else{break}}};b.each(K,function(){var ah=b(this),ae=ah.attr("colspan")!==undefined?parseInt(ah.attr("colspan"),10):1,ac=ah.attr("rowspan")!==undefined?parseInt(ah.attr("rowspan"),10):1,af,ag,ad;switch(this.nodeName.toLowerCase()){case"th":Y();af={rowpos:F,colpos:T,width:ae,height:ac,data:[],summary:[],elem:this};ah.data().tblparser=af;af.groupZero=J;af.uid=g;g+=1;J.allParserObj.push(af);L(af);af.parent=R;af.spanHeight=ac-1;for(ad=0;ad<ae;ad+=1){M.cell.push(af);u[T+ad]=af}T+=af.width;break;case"td":Y();ag={rowpos:F,colpos:T,width:ae,height:ac,elem:this};ah.data().tblparser=ag;ag.groupZero=J;ag.uid=g;g+=1;J.allParserObj.push(ag);S(ag);ag.parent=R;ag.spanHeight=ac-1;for(ad=0;ad<ae;ad+=1){M.cell.push(ag);u[T+ad]=ag}T+=ag.width;break;default:E(15,this);break}O=this.nodeName.toLowerCase()});Y();if(z===0){z=M.cell.length}if(z!==M.cell.length){M.spannedRow=u;E(16,M.elem)}if(n){l.push(M);return}M.colgroup.push(R);if(O==="th"){M.type=1;if(M.colgroup.length===2&&F===1){if(M.colgroup[0].type===2&&M.colgroup[0].cell.length===1){if(b(M.colgroup[0].cell[0].elem).html().length===0){l.push(M);return}E(17)}else{E(18)}}if(M.colgroup.length===1){if(M.colgroup[0].cell.length>1){if(!y){l.push(M);return}E(18)}else{if(F!==1||M.cell[0].uid===M.cell[M.cell.length-1].uid){k.push(M);y=true;return}E(18)}}if(M.colgroup.length>1&&F!==1){E(21)}}else{M.type=2;y=true;if(k.length>0&&M.cell[0].uid===M.cell[M.cell.length-1].uid){M.type=5;M.cell[0].type=5;M.cell[0].row=M;if(!M.cell[0].describe){M.cell[0].describe=[]}k[k.length-1].cell[0].descCell=M.cell[0];M.cell[0].describe.push(k[k.length-1].cell[0]);if(!J.desccell){J.desccell=[]}J.desccell.push(M.cell[0]);return}if(k.length>0||!f.type){q()}M.type=f.type;M.level=f.level;if(C[0]&&aa&&C[0].end!==aa&&C[0].end===(aa+1)){aa+=1}M.lastHeadingColPos=aa;if(!f.lastHeadingColPos){f.lastHeadingColPos=aa}if(!h){h=aa}M.rowgroup=f;if(f.lastHeadingColPos!==aa){if((!x&&f.lastHeadingColPos<aa)||(x&&x===aa)){b.each(u,function(){if(this&&this.spanHeight>0){E(29,this)}});u=[];k=[];G=[];m+=1;c();e=undefined;w();q();M.type=f.type}else{if(x&&h===aa){b.each(u,function(){if(this&&this.spanHeight>0){E(29,this)}});u=[];k=[];G=[];m+=1;c();e=undefined;w();q(true);M.type=f.type;E(34,M.elem)}else{E(32)}}}if(!f.lastHeadingColPos){f.lastHeadingColPos=aa}if(f.type===3&&!x){x=aa}if(aa){ab=[];N=undefined;X=[];for(V=0;V<aa;V+=1){if(M.cell[V].elem.nodeName.toLowerCase()==="td"){if(!M.cell[V].type&&M.cell[V-1]&&!(M.cell[V-1].descCell)&&M.cell[V-1].type===1&&M.cell[V-1].height===M.cell[V].height){M.cell[V].type=5;M.cell[V-1].descCell=M.cell[V];if(!M.cell[V].describe){M.cell[V].describe=[]}M.cell[V].describe.push(M.cell[V-1]);if(!M.desccell){M.desccell=[]}M.desccell.push(M.cell[V]);if(!J.desccell){J.desccell=[]}J.desccell.push(M.cell[V]);M.cell[V].scope="row"}if(!M.cell[V].type){X.push(M.cell[V])}}if(M.cell[V].elem.nodeName.toLowerCase()==="th"){M.cell[V].type=1;M.cell[V].scope="row";if(N&&N.uid!==M.cell[V].uid){if(N.height>=M.cell[V].height){if(N.height===M.cell[V].height){E(23)}if(!N.subheader){N.subheader=[];N.isgroup=true}N.subheader.push(M.cell[V]);N=M.cell[V];ab.push(M.cell[V])}else{E(24)}}if(!N){N=M.cell[V];ab.push(M.cell[V])}for(U=0;U<X.length;U+=1){if(!(X[U].type)&&!(M.cell[V].keycell)&&X[U].height===M.cell[V].height){X[U].type=4;M.cell[V].keycell=X[U];if(!M.keycell){M.keycell=[]}M.keycell.push(X[U]);if(!J.keycell){J.keycell=[]}J.keycell.push(X[U]);if(!X[U].describe){X[U].describe=[]}X[U].describe.push(M.cell[V])}}}}b.each(X,function(){if(!(this.type)){E(25);if(!M.errorcell){M.errorcell=[]}M.errorcell.push(this)}});M.header=ab}else{aa=0;if(C.length===0){B(undefined,z)}}p(aa);M.headerset=(f.headerlevel||[]);if(aa!==0){aa=C[0].end}if(!M.datacell){M.datacell=[]}for(V=aa;V<M.cell.length;V+=1){P=true;Q=true;for(U=(aa===0?0:1);U<C.length;U+=1){if(C[U].start<=M.cell[V].colpos&&M.cell[V].colpos<=C[U].end){if(M.type===3||C[U].type===3){M.cell[V].type=3}else{M.cell[V].type=2}if(M.type===3&&C[U].type===3&&(b(M.cell[V].elem).text().length===0)){M.cell[V].type=6;if(!J.layoutCell){J.layoutCell=[]}J.layoutCell.push(M.cell[V])}M.cell[V].collevel=C[U].level;M.datacell.push(M.cell[V])}Q=!Q}if(C.length===0){M.cell[V].type=2;M.datacell.push(M.cell[V])}if(M.cell[V].rowpos<F){if(!M.cell[V].addrowheaders){M.cell[V].addrowheaders=[]}if(M.header){for(U=0;U<M.header.length;U+=1){if((M.header[U].rowpos===F&&M.cell[V].addrowheaders.length===0)||(M.header[U].rowpos===F&&M.cell[V].addrowheaders[M.cell[V].addrowheaders.length-1].uid!==M.header[U].uid)){M.cell[V].addrowheaders.push(M.header[U])}}}}}W=(C.length===0);if(C.length===0){W=false}if(!J.col){J.col=[]}for(V=0;V<J.col.length;V+=1){for(U=(J.col[V].start-1);U<J.col[V].end;U+=1){if(!J.col[V].cell){J.col[V].cell=[]}if(!(U>(J.col[V].start-1)&&J.col[V].cell[J.col[V].cell.length-1].uid===M.cell[U].uid)){if(M.cell[U]){J.col[V].cell.push(M.cell[U]);if(!M.cell[U].col){M.cell[U].col=J.col[V]}}else{E(35)}}}}for(V=0;V<M.cell.length;V+=1){if(!M.cell[V].row){M.cell[V].row=M}M.cell[V].rowlevel=f.level;M.cell[V].rowlevelheader=f.headerlevel;M.cell[V].rowgroup=f;if(V>0&&M.cell[V-1].uid===M.cell[V].uid&&M.cell[V].type!==1&&M.cell[V].type!==5&&M.cell[V].rowpos===F&&M.cell[V].colpos<=V){if(!M.cell[V].addcolheaders){M.cell[V].addcolheaders=[]}if(J.col[V]&&J.col[V].header){for(U=0;U<J.col[V].header.length;U+=1){if(J.col[V].header[U].colpos===(V+1)){M.cell[V].addcolheaders.push(J.col[V].header[U])}}}}}H=true}D+=1;if(!J.row){J.row=[]}J.row.push(M);f.row.push(M);delete M.colgroup}if(d){b("tfoot",r).appendTo(b("tbody:last",r).parent())}b(r).children().each(function(){var K=b(this),L=this.nodeName.toLowerCase();if(L==="caption"){s(this)}else{if(L==="colgroup"){B(this)}else{if(L==="thead"){e=this;if(l.length!==0||(J.row&&J.row.length>0)){E(26,this)}b(this).data("tblparser",J);n=true;b(this).children().each(function(){if(this.nodeName.toLowerCase()!=="tr"){E(27,this)}A(this)});n=false}else{if(L==="tbody"||L==="tfoot"){if(L==="tfoot"){j=true}e=this;w();K.data().tblparser=f;K.children().each(function(){if(this.nodeName.toLowerCase()!=="tr"){E(27,this);return}A(this)});c();b.each(u,function(){if(this&&this.spanHeigh&&this.spanHeight>0){E(29,this)}});u=[];k=[];G=[];m+=1}else{if(L==="tr"){A(this)}else{E(30,this)}}}}}});J.theadRowStack=l;delete J.colgroupFrame;J.colgrouplevel=J.colgrp;delete J.colgrp}};window.pe=a;return a}(jQuery));