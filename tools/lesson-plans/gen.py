import json, sys
from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.units import inch
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import BaseDocTemplate, PageTemplate, Frame, Paragraph, Spacer, Table, TableStyle, PageBreak, KeepTogether
from xml.sax.saxutils import escape as E
import content
F='/usr/share/fonts/truetype/dejavu/'
pdfmetrics.registerFont(TTFont('DV',F+'DejaVuSans.ttf'));pdfmetrics.registerFont(TTFont('DVB',F+'DejaVuSans-Bold.ttf'))
pdfmetrics.registerFont(TTFont('DVI',F+'DejaVuSans-Oblique.ttf'))
pdfmetrics.registerFontFamily('DV',normal='DV',bold='DVB',italic='DVI',boldItalic='DVB')
NAVY=colors.HexColor('#1f3a5f');GREY=colors.HexColor('#555555');LIGHT=colors.HexColor('#eef2f7')
S=lambda n,**k: ParagraphStyle(n,**{'fontName':'DV',**{('fontSize' if a=='fs' else 'leading' if a=='ld' else a):v for a,v in k.items()}, **({} if 'fs' in k else {'fontSize':8.5}), **({} if 'ld' in k else {'leading':11.5})})
body=S('b');small=S('s',fs=7.5,ld=10,textColor=GREY);h1=S('h1',fs=15,ld=19,fontName='DVB',textColor=NAVY)
h2=S('h2',fs=10,ld=13,fontName='DVB',textColor=NAVY,spaceBefore=5,spaceAfter=2);bul=S('bu',leftIndent=9,bulletIndent=0)
cell=S('c',fs=8,ld=10.5);cellb=S('cb',fs=8,ld=10.5,fontName='DVB',textColor=colors.white)
KIND={'tutorial':'Guided practice','learn':'Teaching','practice':'Guided practice','tool':'Toolkit','reflect':'Reflection','mock':'Mock','review':'Review','habit':'Homework'}
def P(t,st=body): return Paragraph(t,st)
def B(items): return [Paragraph(E(i),bul,bulletText='•') for i in items]
def t(c,w,hdr=True,sty=None):
    tb=Table(c,colWidths=w,repeatRows=1 if hdr else 0)
    base=[('VALIGN',(0,0),(-1,-1),'TOP'),('GRID',(0,0),(-1,-1),0.25,colors.HexColor('#c7ced8')),('TOPPADDING',(0,0),(-1,-1),2.5),('BOTTOMPADDING',(0,0),(-1,-1),2.5)]
    if hdr: base+=[('BACKGROUND',(0,0),(-1,0),NAVY)]
    tb.setStyle(TableStyle(base+(sty or [])));return tb
def fmt(m): return f"{m//60}:{m%60:02d}"
def build(sec,out,label,days,C,intro,grouping,levelnote):
    foot="BandSix · original teaching material. TOEFL® and TOEFL iBT® are registered trademarks of ETS, which does not endorse this material."
    def deco(cv,doc):
        cv.saveState();cv.setFont('DV',7.5);cv.setFillColor(GREY)
        if doc.page>1:
            cv.drawString(0.6*inch,10.65*inch,f"BandSix TEACHER LESSON PLANS · {label.upper()}")
            cv.drawRightString(7.9*inch,10.65*inch,getattr(doc,'hdr',''))
        cv.drawString(0.6*inch,0.4*inch,foot);cv.drawRightString(7.9*inch,0.4*inch,str(doc.page));cv.restoreState()
    doc=BaseDocTemplate(out,pagesize=letter,leftMargin=.6*inch,rightMargin=.6*inch,topMargin=.65*inch,bottomMargin=.6*inch,title=f"StratSix Lesson Plans · {label}",author="BandSix")
    doc.addPageTemplates([PageTemplate(id='p',frames=[Frame(.6*inch,.6*inch,7.3*inch,9.9*inch,id='f',leftPadding=0,rightPadding=0,topPadding=0,bottomPadding=0)],onPageEnd=deco)])
    st=[Spacer(1,1.6*inch),P("BandSix",S('x',fs=12,fontName='DVB',textColor=GREY)),Spacer(1,8),P(f"Teacher lesson plans",S('t',fs=26,ld=32,fontName='DVB',textColor=NAVY)),P(label,S('t2',fs=20,ld=26,fontName='DVB',textColor=NAVY)),Spacer(1,10),P("17 classes · 3 hours each · level ramp B2 → C1 → C2",S('t3',fs=11,ld=15,textColor=GREY)),Spacer(1,20)]
    st+=[P(intro),PageBreak()]
    st+=[P("How to use these plans",h1),Spacer(1,4)]
    st+=B(["Each plan fits a 3-hour class. The run sheet times come from the platform activities students do on that day.","Days 1–6 use B2 material, Days 7–10 C1 and Days 11–17 C2. " + levelnote,"Teacher instructions and these notes stay at B1 level so you can read them quickly.","Check the Collect box each day: students send their work through Copy & send so you can review it in Drive."])
    st+=[Spacer(1,6),P("The 17 days",h2)]
    rows=[[P("DAY",cellb),P("FOCUS",cellb),P("LEVEL",cellb)]]
    for d in days: rows.append([P(str(d['n']),cell),P(E(d['title']),cell),P('B2' if d['n']<=6 else 'C1' if d['n']<=10 else 'C2',cell)])
    st+=[t(rows,[.5*inch,5.8*inch,.9*inch]),Spacer(1,8),P("The 3-hour pattern",h2)]
    st+=[t([[P(x,cellb) for x in ("PART","MIN","WHAT")],[P("Warm-up",cell),P("10",cell),P("Short activity that activates today's skill.",cell)],[P("Teacher-led",cell),P("30–45",cell),P("Strategy lesson, board plan and checking questions.",cell)],[P("Platform",cell),P("≈ 100–115",cell),P("Students work through the day's platform activities.",cell)],[P("Buffer",cell),P("varies",cell),P("Finish activities, read explanations, one-to-one feedback.",cell)],[P("Wrap-up",cell),P("10",cell),P("Exit ticket and preview of the next day.",cell)]],[1.2*inch,.8*inch,5.2*inch]),PageBreak()]
    for i,d in enumerate(days):
        n=d['n'];c=C[n];hd=f"{label} · Day {n} of 17"
        st.append(_Hdr(hd))
        if c.get('ets'): st.append(P("ETS LESSON · "+E(c['ets'].split(' · ')[0].upper()),S('e',fs=7.5,fontName='DVB',textColor=GREY)))
        st+=[P(f"Day {n} · {E(d['title'])}",h1),P("By the end of the class, students can "+E(d.get('objective') or d['title'])+" ",body),Spacer(1,4),P("Run sheet · 3-hour class",h2)]
        stg=[s for s in d['stages'] if s['kind']!='habit']
        plat=sum(s['mins'] for s in stg);teach=35 if plat<=110 else 30
        buf=max(10,180-10-teach-10-plat)
        if 10+teach+plat+buf+10!=180: teach=180-10-plat-buf-10
        rows=[[P(x,cellb) for x in ("TIME","PHASE","WHAT HAPPENS","MIN")]]
        tm=0
        def add(ph,wh,m):
            nonlocal tm
            rows.append([P(f"{fmt(tm)}–{fmt(tm+m)}",cell),P(ph,cell),P(wh,cell),P(str(m),cell)]);tm+=m
        add("Warm-up",E(c['warm']),10)
        tl="Present the strategy (see Teach this)."
        if c.get('ets'): tl=f"ETS lesson: {E(c['ets'])}. "+tl
        add("Teacher-led",tl,teach)
        for s in stg:
            ttl=s['title'] or KIND.get(s['kind'],'Activity')
            add("Platform",f"{E(ttl)} ({KIND.get(s['kind'],'Activity')})",s['mins'])
        add("Platform","Buffer: finish unchecked activities, read every explanation and send work to Drive. Use the time for one-to-one feedback.",buf)
        add("Wrap-up","Exit ticket: "+E(c['exit'])+" Preview the next day.",10)
        rows[-2][1]=P("Buffer",cell)
        st+=[t(rows,[.95*inch,.85*inch,4.9*inch,.5*inch]),Spacer(1,6)]
        left=[P("Teach this (30–45 min)",h2)]+B(c['teach'])
        right=[P("Board plan",h2)]+B(c['board'])+[P("Check understanding",h2)]
        for q,a in c['checks']: right+=[P("<b>Q:</b> "+E(q),cell),P("<b>A:</b> "+E(a),cell)]
        st+=[Table([[left,right]],colWidths=[3.8*inch,3.5*inch],style=[('VALIGN',(0,0),(-1,-1),'TOP'),('LEFTPADDING',(0,0),(-1,-1),0)]),Spacer(1,4)]
        st+=[Table([[[P("Watch for",h2)]+B(c['watch']),[P("Differentiation",h2),P("<b>Support:</b> "+E(c['support']),cell),P("<b>Stretch:</b> "+E(c['stretch']),cell)]]],colWidths=[3.65*inch,3.65*inch],style=[('VALIGN',(0,0),(-1,-1),'TOP'),('LEFTPADDING',(0,0),(-1,-1),0)])]
        st+=[P("Collect",h2)]+B(["Work: students press Copy & send; texts go to the Writing portfolio in Drive.","Progress report: scores and rubric feedback for this day."])
        hw=d.get('habit') or []
        st+=[P("Daily exposure (homework)",h2)]+B([x for x in hw] or ["Write ten minutes in English and keep a phrase bank."])
        if i<len(days)-1: st.append(PageBreak())
    doc.build(st)
class _Hdr(Paragraph):
    def __init__(s,h): Paragraph.__init__(s,'',body); s.h=h
    def wrap(s,w,h): return (0,0)
    def draw(s): s.canv._doctemplate.hdr=s.h
if __name__=='__main__':
    D=json.load(open('/home/claude/wr/final_days.json'))
    out='/home/claude/stratsix/plans/'
    build('writing',out+'StratSix-Lesson-Plans-Writing-I.pdf','Writing I',D['writing'],content.W1,"Writing I covers two TOEFL iBT tasks: Build a Sentence and Write an Email. It rises from B2 to C2 across 17 classes, finishing with a mock and a personal study plan. The course Writing II covers the Academic Discussion task.",None,"Build a Sentence rises from word order to complex structures, and emails rise from formal requests to diplomatic negotiation.")
    build('writing2',out+'StratSix-Lesson-Plans-Writing-II.pdf','Writing II',D['writing2'],content.W2,"Writing II covers the Academic Discussion task. It rises from B2 to C2 across 17 classes: position and support, replies to classmates, concession and evidence, editing, then a mock and a personal study plan.",None,"Posts rise from simple opinions to abstract, synthesized arguments with calibrated claims.")
