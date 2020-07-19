google.maps.__gjsload__('geometry', function(_){var qu=function(a,b){return Math.abs(_.Yc(b-a,-180,180))},ru=function(a,b,c,d,e){if(!d){c=qu(a.lng(),c)/qu(a.lng(),b.lng());if(!e)return e=Math.sin(_.Id(a.lat())),e=Math.log((1+e)/(1-e))/2,b=Math.sin(_.Id(b.lat())),_.Jd(2*Math.atan(Math.exp(e+c*(Math.log((1+b)/(1-b))/2-e)))-Math.PI/2);a=e.fromLatLngToPoint(a);b=e.fromLatLngToPoint(b);return e.fromPointToLatLng(new _.I(a.x+c*(b.x-a.x),a.y+c*(b.y-a.y))).lat()}e=_.Id(a.lat());a=_.Id(a.lng());d=_.Id(b.lat());b=_.Id(b.lng());c=_.Id(c);return _.Yc(_.Jd(Math.atan2(Math.sin(e)*
Math.cos(d)*Math.sin(c-b)-Math.sin(d)*Math.cos(e)*Math.sin(c-a),Math.cos(e)*Math.cos(d)*Math.sin(a-b))),-90,90)},su=_.n(),tu={containsLocation:function(a,b){var c=_.Yc(a.lng(),-180,180),d=!!b.get("geodesic"),e=b.get("latLngs"),f=b.get("map");f=!d&&f?f.getProjection():null;for(var g=!1,h=0,k=e.getLength();h<k;++h)for(var l=e.getAt(h),m=0,q=l.getLength();m<q;++m){var r=l.getAt(m),u=l.getAt((m+1)%q),v=_.Yc(r.lng(),-180,180),x=_.Yc(u.lng(),-180,180),y=Math.max(v,x);v=Math.min(v,x);(180<y-v?c>=y||c<v:
c<y&&c>=v)&&ru(r,u,c,d,f)<a.lat()&&(g=!g)}return g||tu.isLocationOnEdge(a,b)}};_.ab("PolyGeometry.containsLocation",tu.containsLocation);
tu.isLocationOnEdge=function(a,b,c){c=c||1E-9;var d=_.Yc(a.lng(),-180,180),e=b instanceof _.Mi,f=!!b.get("geodesic"),g=b.get("latLngs");b=b.get("map");b=!f&&b?b.getProjection():null;for(var h=0,k=g.getLength();h<k;++h)for(var l=g.getAt(h),m=l.getLength(),q=e?m:m-1,r=0;r<q;++r){var u=l.getAt(r),v=l.getAt((r+1)%m),x=_.Yc(u.lng(),-180,180),y=_.Yc(v.lng(),-180,180),F=Math.max(x,y),K=Math.min(x,y);if(x=1E-9>=Math.abs(_.Yc(x-y,-180,180))&&(Math.abs(_.Yc(x-d,-180,180))<=c||Math.abs(_.Yc(y-d,-180,180))<=
c)){x=a.lat();y=Math.min(u.lat(),v.lat())-c;var N=Math.max(u.lat(),v.lat())+c;x=x>=y&&x<=N}if(x)return!0;if(180<F-K?d+c>=F||d-c<=K:d+c>=K&&d-c<=F)if(u=ru(u,v,d,f,b),Math.abs(u-a.lat())<c)return!0}return!1};_.ab("PolyGeometry.isLocationOnEdge",tu.isLocationOnEdge);var uu={computeHeading:function(a,b){var c=_.Ld(a),d=_.Md(a);a=_.Ld(b);b=_.Md(b)-d;return _.Yc(_.Jd(Math.atan2(Math.sin(b)*Math.cos(a),Math.cos(c)*Math.sin(a)-Math.sin(c)*Math.cos(a)*Math.cos(b))),-180,180)}};_.ab("Spherical.computeHeading",uu.computeHeading);
uu.computeOffset=function(a,b,c,d){b/=d||6378137;c=_.Id(c);var e=_.Ld(a);a=_.Md(a);d=Math.cos(b);b=Math.sin(b);var f=Math.sin(e);e=Math.cos(e);var g=d*f+b*e*Math.cos(c);return new _.J(_.Jd(Math.asin(g)),_.Jd(a+Math.atan2(b*e*Math.sin(c),d-f*g)))};_.ab("Spherical.computeOffset",uu.computeOffset);
uu.computeOffsetOrigin=function(a,b,c,d){c=_.Id(c);b/=d||6378137;d=Math.cos(b);var e=Math.sin(b)*Math.cos(c);b=Math.sin(b)*Math.sin(c);c=Math.sin(_.Ld(a));var f=e*e*d*d+d*d*d*d-d*d*c*c;if(0>f)return null;var g=e*c+Math.sqrt(f);g/=d*d+e*e;var h=(c-e*g)/d;g=Math.atan2(h,g);if(g<-Math.PI/2||g>Math.PI/2)g=e*c-Math.sqrt(f),g=Math.atan2(h,g/(d*d+e*e));if(g<-Math.PI/2||g>Math.PI/2)return null;a=_.Md(a)-Math.atan2(b,d*Math.cos(g)-e*Math.sin(g));return new _.J(_.Jd(g),_.Jd(a))};
_.ab("Spherical.computeOffsetOrigin",uu.computeOffsetOrigin);uu.interpolate=function(a,b,c){var d=_.Ld(a),e=_.Md(a),f=_.Ld(b),g=_.Md(b),h=Math.cos(d),k=Math.cos(f);b=uu.Dg(a,b);var l=Math.sin(b);if(1E-6>l)return new _.J(a.lat(),a.lng());a=Math.sin((1-c)*b)/l;c=Math.sin(c*b)/l;b=a*h*Math.cos(e)+c*k*Math.cos(g);e=a*h*Math.sin(e)+c*k*Math.sin(g);return new _.J(_.Jd(Math.atan2(a*Math.sin(d)+c*Math.sin(f),Math.sqrt(b*b+e*e))),_.Jd(Math.atan2(e,b)))};_.ab("Spherical.interpolate",uu.interpolate);
uu.Dg=function(a,b){var c=_.Ld(a);a=_.Md(a);var d=_.Ld(b);b=_.Md(b);return 2*Math.asin(Math.sqrt(Math.pow(Math.sin((c-d)/2),2)+Math.cos(c)*Math.cos(d)*Math.pow(Math.sin((a-b)/2),2)))};uu.computeDistanceBetween=function(a,b,c){c=c||6378137;return uu.Dg(a,b)*c};_.ab("Spherical.computeDistanceBetween",uu.computeDistanceBetween);uu.computeLength=function(a,b){b=b||6378137;var c=0;a instanceof _.Ue&&(a=a.getArray());for(var d=0,e=a.length-1;d<e;++d)c+=uu.computeDistanceBetween(a[d],a[d+1],b);return c};
_.ab("Spherical.computeLength",uu.computeLength);uu.computeArea=function(a,b){return Math.abs(uu.computeSignedArea(a,b))};_.ab("Spherical.computeArea",uu.computeArea);uu.computeSignedArea=function(a,b){b=b||6378137;a instanceof _.Ue&&(a=a.getArray());for(var c=a[0],d=0,e=1,f=a.length-1;e<f;++e)d+=uu.el(c,a[e],a[e+1]);return d*b*b};_.ab("Spherical.computeSignedArea",uu.computeSignedArea);uu.el=function(a,b,c){return uu.fl(a,b,c)*uu.Zl(a,b,c)};
uu.fl=function(a,b,c){var d=[a,b,c,a];a=[];for(c=b=0;3>c;++c)a[c]=uu.Dg(d[c],d[c+1]),b+=a[c];b/=2;d=Math.tan(b/2);for(c=0;3>c;++c)d*=Math.tan((b-a[c])/2);return 4*Math.atan(Math.sqrt(Math.abs(d)))};
uu.Zl=function(a,b,c){a=[a,b,c];b=[];for(c=0;3>c;++c){var d=a[c],e=_.Ld(d);d=_.Md(d);var f=b[c]=[];f[0]=Math.cos(e)*Math.cos(d);f[1]=Math.cos(e)*Math.sin(d);f[2]=Math.sin(e)}return 0<b[0][0]*b[1][1]*b[2][2]+b[1][0]*b[2][1]*b[0][2]+b[2][0]*b[0][1]*b[1][2]-b[0][0]*b[2][1]*b[1][2]-b[1][0]*b[0][1]*b[2][2]-b[2][0]*b[1][1]*b[0][2]?1:-1};var vu={decodePath:function(a){for(var b=_.Uc(a),c=Array(Math.floor(a.length/2)),d=0,e=0,f=0,g=0;d<b;++g){var h=1,k=0;do{var l=a.charCodeAt(d++)-63-1;h+=l<<k;k+=5}while(31<=l);e+=h&1?~(h>>1):h>>1;h=1;k=0;do l=a.charCodeAt(d++)-63-1,h+=l<<k,k+=5;while(31<=l);f+=h&1?~(h>>1):h>>1;c[g]=new _.J(1E-5*e,1E-5*f,!0)}c.length=g;return c}};_.ab("PolylineCodec.decodePath",vu.decodePath);
vu.encodePath=function(a){a instanceof _.Ue&&(a=a.getArray());return vu.xn(a,function(b){return[Math.round(1E5*b.lat()),Math.round(1E5*b.lng())]})};_.ab("PolylineCodec.encodePath",vu.encodePath);vu.xn=function(a,b){for(var c=[],d=[0,0],e,f=0,g=_.Uc(a);f<g;++f)e=b?b(a[f]):a[f],vu.jj(e[0]-d[0],c),vu.jj(e[1]-d[1],c),d=e;return c.join("")};vu.jj=function(a,b){vu.yn(0>a?~(a<<1):a<<1,b)};vu.yn=function(a,b){for(;32<=a;)b.push(String.fromCharCode((32|a&31)+63)),a>>=5;b.push(String.fromCharCode(a+63))};_.z.google.maps.geometry={encoding:vu,spherical:uu,poly:tu};_.t=su.prototype;_.t.decodePath=vu.decodePath;_.t.encodePath=vu.encodePath;_.t.computeDistanceBetween=uu.computeDistanceBetween;_.t.interpolate=uu.interpolate;_.t.computeHeading=uu.computeHeading;_.t.computeOffset=uu.computeOffset;_.t.computeOffsetOrigin=uu.computeOffsetOrigin;_.Df("geometry",new su);});
